export const AUTO_NEXT_QUESTION_DELAY = 1500;

let autoNextQuestionTimer: ReturnType<typeof setTimeout> | undefined;

export function clearAutoNextQuestionTimer() {
  if (!autoNextQuestionTimer) return;

  clearTimeout(autoNextQuestionTimer);
  autoNextQuestionTimer = undefined;
}

export function startAutoNextQuestionTimer(callback: () => void) {
  clearAutoNextQuestionTimer();

  autoNextQuestionTimer = setTimeout(() => {
    autoNextQuestionTimer = undefined;
    callback();
  }, AUTO_NEXT_QUESTION_DELAY);
}
