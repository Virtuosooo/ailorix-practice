import { describe, expect, it } from "vitest";

import type { CoursePacksItem } from "~/types";
import {
  CoursePackCategory,
  filterAndSortCoursePacks,
  getCoursePackCategory,
} from "../coursePackFilter";

const ailorixCoursePack: CoursePacksItem = {
  id: "ailorix",
  title: "Ailorix 外企测试工程师英语全套",
  description: "面向软件测试工程师进外企",
  cover: "/ailorix-work-course.svg",
  isFree: true,
};

const xingrongCoursePack: CoursePacksItem = {
  id: "xingrong",
  title: "星荣零基础学英语",
  description: "通用英语课程",
  cover: "https://example.com/xingrong.jpg",
  isFree: true,
};

describe("course pack filter", () => {
  it("should classify the Ailorix work English pack as professional English", () => {
    expect(getCoursePackCategory(ailorixCoursePack)).toBe(CoursePackCategory.Professional);
    expect(getCoursePackCategory(xingrongCoursePack)).toBe(CoursePackCategory.General);
  });

  it("should place professional English packs before general English packs", () => {
    expect(
      filterAndSortCoursePacks([xingrongCoursePack, ailorixCoursePack], CoursePackCategory.All),
    ).toEqual([ailorixCoursePack, xingrongCoursePack]);
  });

  it("should filter course packs by category", () => {
    expect(
      filterAndSortCoursePacks(
        [xingrongCoursePack, ailorixCoursePack],
        CoursePackCategory.Professional,
      ),
    ).toEqual([ailorixCoursePack]);
    expect(
      filterAndSortCoursePacks([xingrongCoursePack, ailorixCoursePack], CoursePackCategory.General),
    ).toEqual([xingrongCoursePack]);
  });
});
