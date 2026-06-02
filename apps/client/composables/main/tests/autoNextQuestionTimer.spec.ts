import { afterEach, describe, expect, it, vi } from "vitest";

import { clearAutoNextQuestionTimer, startAutoNextQuestionTimer } from "../autoNextQuestionTimer";

describe("auto next question timer", () => {
  afterEach(() => {
    clearAutoNextQuestionTimer();
    vi.useRealTimers();
  });

  it("runs the callback after the pause duration", () => {
    vi.useFakeTimers();
    const callback = vi.fn();

    startAutoNextQuestionTimer(callback);
    vi.advanceTimersByTime(1499);

    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("does not run the callback after the timer is cleared", () => {
    vi.useFakeTimers();
    const callback = vi.fn();

    startAutoNextQuestionTimer(callback);
    clearAutoNextQuestionTimer();
    vi.advanceTimersByTime(1500);

    expect(callback).not.toHaveBeenCalled();
  });

  it("replaces the existing timer when a new pause starts", () => {
    vi.useFakeTimers();
    const firstCallback = vi.fn();
    const secondCallback = vi.fn();

    startAutoNextQuestionTimer(firstCallback);
    startAutoNextQuestionTimer(secondCallback);
    vi.advanceTimersByTime(1500);

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalledTimes(1);
  });
});
