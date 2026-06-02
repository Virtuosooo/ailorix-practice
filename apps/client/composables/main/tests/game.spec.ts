import { afterEach, describe, expect, it, vi } from "vitest";

import { clearAutoNextQuestionTimer, startAutoNextQuestionTimer } from "../autoNextQuestionTimer";
import { useGameMode } from "../game";

describe("Game Mode Composable", () => {
  afterEach(() => {
    clearAutoNextQuestionTimer();
    vi.useRealTimers();
  });

  it("changes game mode to Answer", () => {
    const { showAnswer, isAnswer } = useGameMode();

    showAnswer();

    expect(isAnswer()).toBe(true);
  });

  it("changes game mode back to Question", () => {
    const { showAnswer, showQuestion, isQuestion } = useGameMode();
    showAnswer();

    showQuestion();

    expect(isQuestion()).toBe(true);
  });

  it("confirms isAnswer returns true only when game mode is Answer", () => {
    const { showAnswer, isAnswer, isQuestion } = useGameMode();
    showAnswer();

    expect(isAnswer()).toBe(true);
    expect(isQuestion()).toBe(false);
  });

  it("confirms isQuestion returns true only when game mode is Question", () => {
    const { showQuestion, isQuestion, isAnswer } = useGameMode();
    showQuestion();

    expect(isQuestion()).toBe(true);
    expect(isAnswer()).toBe(false);
  });

  it("clears the pending auto next timer when returning to the question", () => {
    vi.useFakeTimers();
    const callback = vi.fn();
    const { showQuestion } = useGameMode();
    startAutoNextQuestionTimer(callback);

    showQuestion();
    vi.advanceTimersByTime(1500);

    expect(callback).not.toHaveBeenCalled();
  });
});
