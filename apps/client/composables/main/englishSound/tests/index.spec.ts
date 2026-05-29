import { createTestingPinia } from "@pinia/testing";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useCourseStore } from "~/store/course";
import { play, updateSource } from "../audio";
import { useCurrentStatementEnglishSound } from "../index";

vi.hoisted(() => {
  const store = new Map<string, string>();
  const mock = {
    clear: vi.fn(() => store.clear()),
    getItem: vi.fn((key: string) => store.get(key) ?? null),
    removeItem: vi.fn((key: string) => store.delete(key)),
    setItem: vi.fn((key: string, value: string) => store.set(key, value)),
  };

  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: mock,
  });
});

vi.mock("../audio.ts", () => {
  return {
    updateSource: vi.fn(),
    updateText: vi.fn(),
    play: vi.fn(),
  };
});

describe("useCurrentStatementEnglishSound", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    createTestingPinia({
      createSpy: vi.fn,
    });

    const courseStore = useCourseStore();
    courseStore.currentStatement = {
      id: "1",
      order: 1,
      english: "I",
      soundmark: "/I/",
      chinese: "我",
      isMastered: false,
    };

    vi.clearAllMocks();
  });

  it("plays sound", async () => {
    const { playSound } = useCurrentStatementEnglishSound();

    playSound();

    expect(play).toHaveBeenCalled();
  });

  it("should updates audio source", async () => {
    useCurrentStatementEnglishSound();

    // update english value
    const courseStore = useCourseStore();
    courseStore.currentStatement = {
      id: "2",
      order: 2,
      english: "like",
      soundmark: "/like/",
      chinese: "喜欢",
      isMastered: false,
    };
    await vi.advanceTimersToNextTimerAsync();

    expect(updateSource).toBeCalledTimes(1);
  });

  it("does not update audio source if the word is the same", async () => {
    useCurrentStatementEnglishSound();

    const courseStore = useCourseStore();
    courseStore.currentStatement = {
      id: "1",
      order: 1,
      english: "I",
      soundmark: "/I/",
      chinese: "我",
      isMastered: false,
    };

    expect(updateSource).toHaveBeenCalledTimes(1);
  });
});
