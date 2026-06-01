<template>
  <div class="flex w-full flex-col">
    <template v-if="isLoading">
      <Loading></Loading>
    </template>

    <template v-else>
      <h2 class="mb-4 text-center text-3xl dark:border-gray-600">
        {{ coursePackStore.currentCoursePack?.title }}
      </h2>
      <CoursesAilorixLearningPath
        v-if="showAilorixLearningPath"
        :courses="currentCoursePack?.courses ?? []"
        :activeCourseId="activeCourseMap[coursePackId]"
        @selectCourse="handleChangeCourse"
      />
      <div
        v-else
        class="h-full scrollbar-hide"
      >
        <div
          class="grid h-[79vh] grid-cols-1 justify-start gap-8 overflow-y-auto overflow-x-hidden pb-96 pl-0 pr-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <template
            v-for="course in coursePackStore.currentCoursePack?.courses"
            :key="course.id"
          >
            <CoursesCourseCard
              :title="course.title"
              :description="course.description"
              :id="course.id"
              :count="course.completionCount"
              :coursePackId="course.coursePackId"
              @click="handleChangeCourse(course.id)"
            />
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { navigateTo } from "#app";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

import { useActiveCourseMap } from "~/composables/courses/activeCourse";
import { useCoursePackStore } from "~/store/coursePack";
import { isAilorixLearningPathPack } from "~/utils/ailorixLearningPath";

const isLoading = ref(false);
const route = useRoute();
const coursePackStore = useCoursePackStore();
const coursePackId = route.params.id as string;
const { activeCourseMap, updateActiveCourseMap } = useActiveCourseMap();
const currentCoursePack = computed(() => coursePackStore.currentCoursePack);
const showAilorixLearningPath = computed(() => isAilorixLearningPathPack(currentCoursePack.value));

setup();

async function setup() {
  isLoading.value = true;
  await coursePackStore.setupCoursePack(coursePackId);
  isLoading.value = false;
}

function handleChangeCourse(courseId: string) {
  updateActiveCourseMap(coursePackId, courseId);
  navigateTo(`/game/${coursePackId}/${courseId}`);
}
</script>

<style></style>
