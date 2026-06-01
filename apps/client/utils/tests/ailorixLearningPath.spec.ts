import { describe, expect, it } from "vitest";

import type { Course, CoursePack } from "~/types";
import {
  AILORIX_WORK_COURSE_COVER,
  buildAilorixLearningPath,
  getResumeCourse,
  isAilorixLearningPathPack,
} from "../ailorixLearningPath";

function createCourse(order: number, completionCount = 0): Course {
  return {
    id: `course-${order}`,
    coursePackId: "ailorix",
    order,
    title: `课程 ${order}`,
    description: "",
    completionCount,
    statementIndex: 0,
    statements: [],
    video: "",
  };
}

const ailorixPack: CoursePack = {
  id: "ailorix",
  title: "Ailorix 外企测试工程师英语全套",
  description: "",
  isFree: true,
  cover: AILORIX_WORK_COURSE_COVER,
  courses: Array.from({ length: 80 }, (_, index) => createCourse(index + 1)),
};

describe("Ailorix learning path", () => {
  it("should enable path mode only for the Ailorix work English pack", () => {
    expect(isAilorixLearningPathPack(ailorixPack)).toBe(true);
    expect(isAilorixLearningPathPack({ ...ailorixPack, cover: "/general.svg" })).toBe(false);
  });

  it("should group all 80 courses into six stages", () => {
    const path = buildAilorixLearningPath(ailorixPack.courses);

    expect(path.stages).toHaveLength(6);
    expect(path.stages.map((stage) => stage.courses.length)).toEqual([22, 20, 12, 6, 9, 11]);
    expect(path.stages.flatMap((stage) => stage.courses)).toHaveLength(80);
  });

  it("should count completed courses overall and per stage", () => {
    const courses = [createCourse(1, 1), createCourse(2, 2), createCourse(23, 1)];
    const path = buildAilorixLearningPath(courses);

    expect(path.completedCourses).toBe(3);
    expect(path.stages[0].completedCourses).toBe(2);
    expect(path.stages[1].completedCourses).toBe(1);
  });

  it("should collect unmatched courses in an extra stage", () => {
    const path = buildAilorixLearningPath([createCourse(81)]);

    expect(path.stages).toHaveLength(1);
    expect(path.stages[0].title).toBe("其他课程");
    expect(path.stages[0].courses[0].id).toBe("course-81");
  });

  it("should resume the saved course when it still exists", () => {
    const courses = [createCourse(1), createCourse(2)];

    expect(getResumeCourse(courses, "course-2")?.id).toBe("course-2");
  });

  it("should fall back to the first course when resume data is missing or stale", () => {
    const courses = [createCourse(1), createCourse(2)];

    expect(getResumeCourse(courses)?.id).toBe("course-1");
    expect(getResumeCourse(courses, "removed-course")?.id).toBe("course-1");
    expect(getResumeCourse([], "removed-course")).toBeUndefined();
  });
});
