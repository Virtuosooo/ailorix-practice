import { beforeEach, describe, expect, it, vi } from "vitest";

import { usePronunciation } from "../pronunciation";

const localStorageMock = vi.hoisted(() => {
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

  return mock;
});

describe("pronunciation", () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  it("encodes sentence text in Youdao pronunciation urls", () => {
    const { getPronunciationUrl } = usePronunciation();

    expect(getPronunciationUrl("Let me check and get back to you later.")).toBe(
      "https://dict.youdao.com/dictvoice?type=2&audio=Let%20me%20check%20and%20get%20back%20to%20you%20later.",
    );
  });
});
