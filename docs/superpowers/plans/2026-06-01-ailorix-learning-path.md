# Ailorix Learning Path Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the flat Ailorix professional course list with a six-stage learning path while preserving the original flat list for general English packs.

**Architecture:** Keep course data and progress APIs unchanged. Add a pure front-end learning-path helper that groups courses by `order`, calculates completion totals, resolves the resume course, and identifies the Ailorix professional pack by its existing cover. Render that model through a dedicated Vue component and route only Ailorix packs through it.

**Tech Stack:** Nuxt 3, Vue 3 Composition API, TypeScript, Tailwind CSS, DaisyUI, Vitest

---

## File Structure

- Create `apps/client/utils/ailorixLearningPath.ts`: stage configuration, grouping, completion summary, Ailorix detection, and resume-course fallback.
- Create `apps/client/utils/tests/ailorixLearningPath.spec.ts`: focused unit coverage for route-model behavior and edge cases.
- Create `apps/client/components/courses/AilorixLearningPath.vue`: render the professional learning path, stage expansion state, progress summary, and start/resume action.
- Modify `apps/client/pages/course-pack/[id].vue`: choose between the Ailorix path and the existing flat course grid without changing navigation behavior.

### Task 1: Build The Learning-Path Model

**Files:**

- Create: `apps/client/utils/ailorixLearningPath.ts`
- Create: `apps/client/utils/tests/ailorixLearningPath.spec.ts`

- [ ] **Step 1: Write failing tests for the path model**

Create `apps/client/utils/tests/ailorixLearningPath.spec.ts`:

```ts
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
```

- [ ] **Step 2: Run the model tests and verify they fail**

Run:

```bash
pnpm -C apps/client test -- utils/tests/ailorixLearningPath.spec.ts
```

Expected: FAIL because `../ailorixLearningPath` does not exist.

- [ ] **Step 3: Add the pure learning-path helper**

Create `apps/client/utils/ailorixLearningPath.ts`:

```ts
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
  const unmatchedCourses = [...courses];
  const stages: LearningPathStage[] = stageDefinitions
    .map((definition) => {
      const stageCourses = courses.filter(
        (course) => course.order >= definition.startOrder && course.order <= definition.endOrder,
      );

      stageCourses.forEach((course) =>
        unmatchedCourses.splice(unmatchedCourses.indexOf(course), 1),
      );

      return {
        id: definition.id,
        title: definition.title,
        description: definition.description,
        courses: stageCourses,
        completedCourses: countCompletedCourses(stageCourses),
      };
    })
    .filter((stage) => stage.courses.length > 0);

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
```

- [ ] **Step 4: Run the model tests and verify they pass**

Run:

```bash
pnpm -C apps/client test -- utils/tests/ailorixLearningPath.spec.ts
```

Expected: PASS with 6 tests.

- [ ] **Step 5: Commit the helper**

```bash
git add apps/client/utils/ailorixLearningPath.ts apps/client/utils/tests/ailorixLearningPath.spec.ts
git commit -m "feat(client): model Ailorix learning path"
```

### Task 2: Render The Professional Learning Path

**Files:**

- Create: `apps/client/components/courses/AilorixLearningPath.vue`
- Modify: `apps/client/pages/course-pack/[id].vue`

- [ ] **Step 1: Add the learning-path component**

Create `apps/client/components/courses/AilorixLearningPath.vue`:

```vue
<template>
  <section class="space-y-5">
    <div class="rounded-lg border bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-500 dark:text-gray-400">外企 QA 英语学习路线</p>
          <p class="mt-1 text-lg font-semibold">
            已完成 {{ learningPath.completedCourses }} / {{ learningPath.totalCourses }} 门课程
          </p>
        </div>
        <button
          v-if="resumeCourse"
          type="button"
          class="btn border-none bg-purple-500 text-white hover:bg-purple-600"
          @click="$emit('selectCourse', resumeCourse.id)"
        >
          {{ activeCourseId ? "继续学习" : "开始学习" }}
        </button>
      </div>
    </div>

    <div
      v-for="stage in learningPath.stages"
      :key="stage.id"
      class="overflow-hidden rounded-lg border bg-white dark:border-gray-700 dark:bg-gray-900"
    >
      <button
        type="button"
        class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        @click="toggleStage(stage.id)"
      >
        <span>
          <span class="block text-lg font-semibold">{{ stage.title }}</span>
          <span class="mt-1 block text-sm text-gray-500 dark:text-gray-400">
            {{ stage.description }}
          </span>
        </span>
        <span class="shrink-0 text-sm text-gray-500">
          {{ stage.completedCourses }} / {{ stage.courses.length }}
        </span>
      </button>

      <div
        v-if="expandedStageId === stage.id"
        class="grid grid-cols-1 gap-4 border-t p-4 dark:border-gray-700 md:grid-cols-2 lg:grid-cols-3"
      >
        <CoursesCourseCard
          v-for="course in stage.courses"
          :key="course.id"
          :title="course.title"
          :description="course.description"
          :id="course.id"
          :count="course.completionCount"
          :coursePackId="course.coursePackId"
          @click="$emit('selectCourse', course.id)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import type { Course } from "~/types";
import { buildAilorixLearningPath, getResumeCourse } from "~/utils/ailorixLearningPath";

const props = defineProps<{
  courses: Course[];
  activeCourseId?: string;
}>();

defineEmits<{
  (e: "selectCourse", courseId: string): void;
}>();

const learningPath = computed(() => buildAilorixLearningPath(props.courses));
const resumeCourse = computed(() => getResumeCourse(props.courses, props.activeCourseId));
const expandedStageId = ref(
  learningPath.value.stages.find((stage) =>
    stage.courses.some((course) => course.id === resumeCourse.value?.id),
  )?.id,
);

function toggleStage(stageId: string) {
  expandedStageId.value = expandedStageId.value === stageId ? undefined : stageId;
}
</script>
```

- [ ] **Step 2: Route only the Ailorix pack through the path component**

Modify `apps/client/pages/course-pack/[id].vue`.

Add imports:

```ts
import { computed, ref } from "vue";

import { isAilorixLearningPathPack } from "~/utils/ailorixLearningPath";
```

Replace the current `ref` import with the `computed, ref` import. Read the active course map:

```ts
const { activeCourseMap, updateActiveCourseMap } = useActiveCourseMap();
const currentCoursePack = computed(() => coursePackStore.currentCoursePack);
const showAilorixLearningPath = computed(() => isAilorixLearningPathPack(currentCoursePack.value));
```

Inside the loaded template, immediately after the `<h2>` heading, render the path for Ailorix:

```vue
<CoursesAilorixLearningPath
  v-if="showAilorixLearningPath"
  :courses="currentCoursePack?.courses ?? []"
  :activeCourseId="activeCourseMap[coursePackId]"
  @selectCourse="handleChangeCourse"
/>
```

Add `v-else` to the existing flat-list wrapper:

```vue
<div v-else class="h-full scrollbar-hide"></div>
```

- [ ] **Step 3: Run the focused test suite**

Run:

```bash
pnpm -C apps/client test -- utils/tests/ailorixLearningPath.spec.ts utils/tests/coursePackFilter.spec.ts composables/main/tests/question.spec.ts components/main/QuestionInput/tests/question.spec.ts
```

Expected: PASS with 51 tests. Existing Nuxt test-environment `localStorage` warnings may still print.

- [ ] **Step 4: Verify formatting, types, and production generation**

Run:

```bash
pnpm exec prettier --check apps/client/utils/ailorixLearningPath.ts apps/client/utils/tests/ailorixLearningPath.spec.ts apps/client/components/courses/AilorixLearningPath.vue apps/client/pages/course-pack/'[id]'.vue
git diff --check
pnpm -C apps/client type-check
API_BASE='https://api.practice.ailorix.com' \
LOGTO_APP_ID='b4vtjjefuw6hh330518kp' \
LOGTO_ENDPOINT='https://logto.practice.ailorix.com/' \
BACKEND_ENDPOINT='https://api.practice.ailorix.com/' \
LOGTO_SIGN_IN_REDIRECT_URI='https://practice.ailorix.com/callback' \
LOGTO_SIGN_OUT_REDIRECT_URI='https://practice.ailorix.com/' \
HELP_DOCS_URL='https://earthworm-docs.cuixueshe.com/get-started/' \
pnpm -C apps/client generate
```

Expected: formatting PASS, diff check PASS, type check PASS, and generation ends with `You can now deploy .output/public to any static hosting!`.

- [ ] **Step 5: Commit the rendered path**

```bash
git add apps/client/components/courses/AilorixLearningPath.vue apps/client/pages/course-pack/'[id]'.vue
git commit -m "feat(client): render Ailorix learning path"
```

### Task 3: Deploy And Verify Production

**Files:**

- Generated artifact: `apps/client/.output/public`
- Deployment archive: `/private/tmp/ailorix-practice-public.tar.gz`

- [ ] **Step 1: Push the completed commits**

```bash
git push origin main
```

Expected: the fork `Virtuosooo/ailorix-practice` advances to the latest commit.

- [ ] **Step 2: Package the local production build**

```bash
COPYFILE_DISABLE=1 tar -czf /private/tmp/ailorix-practice-public.tar.gz \
  -C apps/client/.output/public .
shasum -a 256 /private/tmp/ailorix-practice-public.tar.gz
```

Expected: archive exists and a SHA-256 checksum prints.

- [ ] **Step 3: Upload the archive**

```bash
scp /private/tmp/ailorix-practice-public.tar.gz \
  root@47.80.63.188:/tmp/ailorix-practice-public.tar.gz
```

Expected: upload completes without error.

- [ ] **Step 4: Replace the static build with a backup**

```bash
ssh root@47.80.63.188 'set -euo pipefail
cd /var/www/earthworm/current
git pull --ff-only origin main
ts=$(date +%Y%m%d%H%M%S)
new_dir="apps/client/.output/public.new-$ts"
backup_dir="apps/client/.output/public.backup-$ts"
mkdir -p "$new_dir"
tar -xzf /tmp/ailorix-practice-public.tar.gz -C "$new_dir"
test -f "$new_dir/index.html"
mv apps/client/.output/public "$backup_dir"
mv "$new_dir" apps/client/.output/public
nginx -t
systemctl reload nginx
printf "deployed=%s\nbackup=%s\n" "$(git rev-parse --short HEAD)" "$backup_dir"
'
```

Expected: `nginx -t` succeeds and the deployed revision matches the latest pushed commit.

- [ ] **Step 5: Verify the production learning path**

Open `https://practice.ailorix.com/course-pack`, then:

1. Click `Ailorix 外企测试工程师英语全套`.
2. Confirm the page shows 6 stages and a `开始学习` or `继续学习` button.
3. Confirm exactly one stage starts expanded.
4. Click the main action and confirm navigation to `/game/<coursePackId>/<courseId>`.
5. Return to `https://practice.ailorix.com/course-pack`.
6. Click `星荣零基础学英语`.
7. Confirm the original flat course grid still renders.

Expected: Ailorix uses the staged route, general English remains unchanged, and both packs still navigate into exercises.
