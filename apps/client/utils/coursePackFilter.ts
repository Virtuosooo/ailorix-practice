import type { CoursePacksItem } from "~/types";

export enum CoursePackCategory {
  All = "all",
  Professional = "professional",
  General = "general",
}

const AILORIX_WORK_COURSE_COVER = "/ailorix-work-course.svg";

export function getCoursePackCategory(coursePack: CoursePacksItem) {
  return coursePack.cover === AILORIX_WORK_COURSE_COVER
    ? CoursePackCategory.Professional
    : CoursePackCategory.General;
}

export function filterAndSortCoursePacks(
  coursePacks: CoursePacksItem[],
  category: CoursePackCategory,
) {
  return [...coursePacks]
    .filter(
      (coursePack) =>
        category === CoursePackCategory.All || getCoursePackCategory(coursePack) === category,
    )
    .sort((a, b) => {
      const aIsProfessional = getCoursePackCategory(a) === CoursePackCategory.Professional;
      const bIsProfessional = getCoursePackCategory(b) === CoursePackCategory.Professional;

      return Number(bIsProfessional) - Number(aIsProfessional);
    });
}
