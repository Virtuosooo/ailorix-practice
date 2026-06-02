import { afterEach, describe, expect, it, vi } from "vitest";

import {
  clearAutoNextQuestionTimer,
  startAutoNextQuestionTimer,
} from "~/composables/main/autoNextQuestionTimer";
import { useAnswer } from "../useAnswer";

const mocks = vi.hoisted(() => ({
  isAllDone: vi.fn(),
  showQuestion: vi.fn(),
  showSummary: vi.fn(),
  toNextStatement: vi.fn(),
}));

vi.mock("~/store/course", () => ({
  useCourseStore: () => ({
    isAllDone: mocks.isAllDone,
    toNextStatement: mocks.toNextStatement,
  }),
}));

vi.mock("~/composables/main/game", () => ({
  useGameMode: () => ({
    showQuestion: mocks.showQuestion,
  }),
}));

vi.mock("~/composables/main/summary", () => ({
  useSummary: () => ({
    showSummary: mocks.showSummary,
  }),
}));

describe("useAnswer", () => {
  afterEach(() => {
    clearAutoNextQuestionTimer();
    vi.clearAllMocks();
    vi.useRealTimers();
  });

  it("clears the pending auto next timer when finishing the course early", () => {
    vi.useFakeTimers();
    const callback = vi.fn();
    mocks.isAllDone.mockReturnValue(true);
    startAutoNextQuestionTimer(callback);

    const { goToNextQuestion } = useAnswer();
    goToNextQuestion();
    vi.advanceTimersByTime(1500);

    expect(callback).not.toHaveBeenCalled();
    expect(mocks.showSummary).toHaveBeenCalledTimes(1);
  });
});
