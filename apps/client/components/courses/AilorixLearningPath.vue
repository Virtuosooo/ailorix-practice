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
