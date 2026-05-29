import { and, eq } from "drizzle-orm";

import { db } from "@earthworm/db";
import {
  course,
  courseHistory,
  coursePack,
  statement,
  userCourseProgress,
} from "@earthworm/schema";
import { ailorixCoursePack, ailorixCourses } from "./courses";

(async function () {
  await db.transaction(async (tx) => {
    const existingPack = await tx.query.coursePack.findFirst({
      where: and(
        eq(coursePack.creatorId, ailorixCoursePack.creatorId),
        eq(coursePack.title, ailorixCoursePack.title),
      ),
    });

    if (existingPack) {
      const existingCourses = await tx.query.course.findMany({
        where: eq(course.coursePackId, existingPack.id),
      });

      await tx.delete(courseHistory).where(eq(courseHistory.coursePackId, existingPack.id));
      await tx
        .delete(userCourseProgress)
        .where(eq(userCourseProgress.coursePackId, existingPack.id));

      for (const existingCourse of existingCourses) {
        await tx.delete(statement).where(eq(statement.courseId, existingCourse.id));
      }

      await tx.delete(course).where(eq(course.coursePackId, existingPack.id));
      await tx.delete(coursePack).where(eq(coursePack.id, existingPack.id));

      console.log(`已清理旧课程包: ${existingPack.title}`);
    }

    const [coursePackEntity] = await tx.insert(coursePack).values(ailorixCoursePack).returning();

    for (const [courseIndex, courseData] of ailorixCourses.entries()) {
      const [courseEntity] = await tx
        .insert(course)
        .values({
          coursePackId: coursePackEntity.id,
          order: courseIndex + 1,
          title: courseData.title,
          description: courseData.description,
        })
        .returning({ id: course.id, order: course.order, title: course.title });

      for (const [statementIndex, statementData] of courseData.statements.entries()) {
        await tx.insert(statement).values({
          ...statementData,
          order: statementIndex + 1,
          courseId: courseEntity.id,
        });
      }

      console.log(`创建课程: ${courseEntity.order}. ${courseEntity.title}`);
    }

    console.log(`Ailorix 课程包创建完成: ${coursePackEntity.title}`);
  });

  process.exit(0);
})();
