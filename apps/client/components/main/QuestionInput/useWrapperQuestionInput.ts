import { courseTimer } from "~/composables/courses/courseTimer";
import { startAutoNextQuestionTimer } from "~/composables/main/autoNextQuestionTimer";
import { useGameMode } from "~/composables/main/game";
import { useInput } from "~/composables/main/question";
import { useAutoNextQuestion } from "~/composables/user/autoNext";
import { useKeyboardSound } from "~/composables/user/sound";
import { useSpaceSubmitAnswer } from "~/composables/user/submitKey";
import { useCourseStore } from "~/store/course";
import { useQuestionInput } from "./questionInputHelper";
import { useAnswer } from "./useAnswer";
import { useAnswerError } from "./useAnswerError";
import { usePlayTipSound, useTypingSound } from "./useTypingSound";

export function useWrapperQuestionInput() {
  const courseStore = useCourseStore();
  const { showAnswer } = useGameMode();
  const { goToNextQuestion } = useAnswer();
  const { setInputCursorPosition, getInputCursorPosition, focusInput } = useQuestionInput();
  const { isKeyboardSoundEnabled } = useKeyboardSound();
  const { checkPlayTypingSound, playTypingSound } = useTypingSound();
  const { handleAnswerError } = useAnswerError();
  const { playRightSound } = usePlayTipSound();
  const { isAutoNextQuestion } = useAutoNextQuestion();
  const { isUseSpaceSubmitAnswer } = useSpaceSubmitAnswer();

  const {
    initialize: initializeQuestionInput,
    findWordById,
    inputValue,
    submitAnswer,
    setInputValue,
    handleKeyboardInput,
    isFixMode,
    isFixInputMode,
  } = useInput({
    source: () => courseStore.currentStatement?.english!,
    setInputCursorPosition,
    getInputCursorPosition,
    inputChangedCallback,
  });

  function inputChangedCallback(e: KeyboardEvent) {
    if (isKeyboardSoundEnabled() && checkPlayTypingSound(e)) {
      playTypingSound();
    }
  }

  function handleAnswerRight() {
    courseTimer.timeEnd(String(courseStore.statementIndex)); // 停止当前题目的计时
    playRightSound();

    if (isAutoNextQuestion()) {
      showAnswer();
      startAutoNextQuestionTimer(goToNextQuestion);
      return;
    }

    showAnswer();
  }

  return {
    initializeQuestionInput,
    isFixMode,
    isFixInputMode,
    findWordById,
    inputValue,
    setInputValue,
    submitAnswer() {
      submitAnswer(handleAnswerRight, handleAnswerError);
      focusInput();
    },
    handleKeyboardInput(e: KeyboardEvent) {
      handleKeyboardInput(e, {
        useSpaceSubmitAnswer: {
          enable: isUseSpaceSubmitAnswer(),
          rightCallback: handleAnswerRight,
          errorCallback: handleAnswerError,
        },
      });
    },
  };
}
