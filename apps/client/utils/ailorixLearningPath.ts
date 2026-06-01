import type { Course, CoursePack } from "~/types";

export const AILORIX_WORK_COURSE_COVER = "/ailorix-work-course.svg";

export interface LearningPathStage {
  id: string;
  title: string;
  description: string;
  courses: Course[];
  completedCourses: number;
}

export interface AilorixLearningPath {
  stages: LearningPathStage[];
  completedCourses: number;
  totalCourses: number;
}

const stageDefinitions = [
  {
    id: "workplace-foundations",
    title: "职场起步",
    description: "从入职、自我介绍到日常沟通，建立外企工作的表达基础。",
    startOrder: 1,
    endOrder: 22,
  },
  {
    id: "testing-foundations",
    title: "测试基本功",
    description: "覆盖测试计划、用例、缺陷、复测、回归和常用测试策略。",
    startOrder: 23,
    endOrder: 42,
  },
  {
    id: "specialized-testing",
    title: "专项测试",
    description: "进入 Web、移动端、兼容性、性能、安全、数据和日志场景。",
    startOrder: 43,
    endOrder: 54,
  },
  {
    id: "automation-delivery",
    title: "自动化与交付",
    description: "练习 Playwright、接口测试、契约变更、流水线和发布表达。",
    startOrder: 55,
    endOrder: 60,
  },
  {
    id: "quality-collaboration",
    title: "质量协作",
    description: "处理线上问题、质量指标、Sprint、复盘和跨角色协作。",
    startOrder: 61,
    endOrder: 69,
  },
  {
    id: "international-career",
    title: "外企进阶",
    description: "面向海外协作、英文汇报、外企面试和入职沟通。",
    startOrder: 70,
    endOrder: 80,
  },
] as const;

function countCompletedCourses(courses: Course[]) {
  return courses.filter((course) => course.completionCount > 0).length;
}

export function isAilorixLearningPathPack(coursePack?: Pick<CoursePack, "cover">) {
  return coursePack?.cover === AILORIX_WORK_COURSE_COVER;
}

export function buildAilorixLearningPath(courses: Course[]): AilorixLearningPath {
  const matchedCourseIds = new Set<string>();
  const stages: LearningPathStage[] = stageDefinitions
    .map((definition) => {
      const stageCourses = courses.filter(
        (course) => course.order >= definition.startOrder && course.order <= definition.endOrder,
      );

      stageCourses.forEach((course) => matchedCourseIds.add(course.id));

      return {
        id: definition.id,
        title: definition.title,
        description: definition.description,
        courses: stageCourses,
        completedCourses: countCompletedCourses(stageCourses),
      };
    })
    .filter((stage) => stage.courses.length > 0);

  const unmatchedCourses = courses.filter((course) => !matchedCourseIds.has(course.id));
  if (unmatchedCourses.length > 0) {
    stages.push({
      id: "other",
      title: "其他课程",
      description: "暂未归入既有阶段的补充课程。",
      courses: unmatchedCourses,
      completedCourses: countCompletedCourses(unmatchedCourses),
    });
  }

  return {
    stages,
    completedCourses: countCompletedCourses(courses),
    totalCourses: courses.length,
  };
}

export function getResumeCourse(courses: Course[], activeCourseId?: string) {
  return courses.find((course) => course.id === activeCourseId) ?? courses[0];
}
