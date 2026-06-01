<template>
  <div class="flex w-full flex-col">
    <h2 class="mb-4 text-center text-3xl dark:border-gray-600">课程包列表</h2>
    <div
      role="tablist"
      class="tabs-boxed tabs mx-auto mb-5 w-fit bg-gray-100 p-1 dark:bg-gray-800"
    >
      <button
        v-for="option in categoryOptions"
        :key="option.value"
        role="tab"
        type="button"
        class="tab h-9 rounded-md px-4 text-sm transition-colors sm:px-6"
        :class="{
          'tab-active bg-white font-semibold shadow-sm dark:bg-gray-700':
            selectedCategory === option.value,
        }"
        @click="selectedCategory = option.value"
      >
        {{ option.label }}
      </button>
    </div>
    <template v-if="isLoading">
      <Loading></Loading>
    </template>
    <template v-else>
      <div class="h-[79vh] overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div
          class="grid auto-rows-fr grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4"
        >
          <template
            v-for="coursePack in visibleCoursePacks"
            :key="coursePack.id"
          >
            <CoursePackCard
              :coursePack="{
                id: coursePack.id,
                title: coursePack.title,
                description: coursePack.description,
                cover: coursePack.cover,
                isFree: coursePack.isFree,
              }"
              @cardClick="handleGoToCoursePack"
            ></CoursePackCard>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import type { CoursePack } from "~/types";
import CoursePackCard from "~/components/courses/CoursePackCard.vue";
import { useNavigation } from "~/composables/useNavigation";
import { useCoursePackStore } from "~/store/coursePack";
import { CoursePackCategory, filterAndSortCoursePacks } from "~/utils/coursePackFilter";

const coursePackStore = useCoursePackStore();
const { gotoCourseList } = useNavigation();
const isLoading = ref(false);
const selectedCategory = ref(CoursePackCategory.All);
const categoryOptions = [
  { label: "全部", value: CoursePackCategory.All },
  { label: "职业英语", value: CoursePackCategory.Professional },
  { label: "通用英语", value: CoursePackCategory.General },
];
const visibleCoursePacks = computed(() =>
  filterAndSortCoursePacks(coursePackStore.coursePacks, selectedCategory.value),
);

setup();

async function setup() {
  // 课程包不会更新 所以初始化的时候只拉取一次数据就好了
  if (coursePackStore.coursePacks.length === 0) {
    isLoading.value = true;
    await coursePackStore.setupCoursePacks();
    isLoading.value = false;
  }
}

function handleGoToCoursePack(coursePack: CoursePack) {
  if (coursePack.isFree) {
    gotoCourseList(coursePack.id);
  } else {
    // 看看是不是会员 不是的话 直接弹出消息告知 需要是会员
    // TODO 还没有检测是不是会员的功能函数
    console.log("需要是会员");
  }
}
</script>

<style></style>
