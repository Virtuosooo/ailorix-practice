import { clearAutoNextQuestionTimer } from "~/composables/main/autoNextQuestionTimer";
import { useGameMode } from "~/composables/main/game";
import { useSummary } from "~/composables/main/summary";
import { useCourseStore } from "~/store/course";

export function useAnswer() {
  const courseStore = useCourseStore();
  const { showQuestion } = useGameMode();
  const { showSummary } = useSummary();

  function goToNextQuestion() {
    clearAutoNextQuestionTimer();

    if (courseStore.isAllDone()) {
      showSummary();
      return;
    }

    courseStore.toNextStatement();
    showQuestion();
  }

  return {
    goToNextQuestion,
  };
}
