import { afterEach, describe, expect, it, vi } from "vitest";

import { clearAutoNextQuestionTimer } from "~/composables/main/autoNextQuestionTimer";
import { useWrapperQuestionInput } from "../useWrapperQuestionInput";

const mocks = vi.hoisted(() => ({
  autoNextEnabled: true,
  blurInput: vi.fn(),
  focusInput: vi.fn(),
  goToNextQuestion: vi.fn(),
  isAllDone: vi.fn(() => false),
  showAnswer: vi.fn(),
  showSummary: vi.fn(),
  timeEnd: vi.fn(),
  toNextStatement: vi.fn(),
}));

vi.mock("~/composables/courses/courseTimer", () => ({
  courseTimer: {
    timeEnd: mocks.timeEnd,
  },
}));

vi.mock("~/composables/main/game", () => ({
  useGameMode: () => ({
    showAnswer: mocks.showAnswer,
  }),
}));

vi.mock("~/composables/main/question", () => ({
  useInput: () => ({
    findWordById: vi.fn(),
    handleKeyboardInput: vi.fn(),
    initialize: vi.fn(),
    inputValue: "",
    isFixInputMode: vi.fn(),
    isFixMode: vi.fn(),
    setInputValue: vi.fn(),
    submitAnswer: (rightCallback: () => void) => rightCallback(),
  }),
}));

vi.mock("~/composables/main/summary", () => ({
  useSummary: () => ({
    showSummary: mocks.showSummary,
  }),
}));

vi.mock("~/composables/user/autoNext", () => ({
  useAutoNextQuestion: () => ({
    isAutoNextQuestion: () => mocks.autoNextEnabled,
  }),
}));

vi.mock("~/composables/user/sound", () => ({
  useKeyboardSound: () => ({
    isKeyboardSoundEnabled: () => false,
  }),
}));

vi.mock("~/composables/user/submitKey", () => ({
  useSpaceSubmitAnswer: () => ({
    isUseSpaceSubmitAnswer: () => false,
  }),
}));

vi.mock("~/store/course", () => ({
  useCourseStore: () => ({
    isAllDone: mocks.isAllDone,
    statementIndex: 0,
    toNextStatement: mocks.toNextStatement,
  }),
}));

vi.mock("../questionInputHelper", () => ({
  useQuestionInput: () => ({
    blurInput: mocks.blurInput,
    focusInput: mocks.focusInput,
    getInputCursorPosition: vi.fn(),
    setInputCursorPosition: vi.fn(),
  }),
}));

vi.mock("../useAnswer", () => ({
  useAnswer: () => ({
    goToNextQuestion: mocks.goToNextQuestion,
  }),
}));

vi.mock("../useAnswerError", () => ({
  useAnswerError: () => ({
    handleAnswerError: vi.fn(),
  }),
}));

vi.mock("../useTypingSound", () => ({
  usePlayTipSound: () => ({
    playRightSound: vi.fn(),
  }),
  useTypingSound: () => ({
    checkPlayTypingSound: vi.fn(),
    playTypingSound: vi.fn(),
  }),
}));

describe("useWrapperQuestionInput", () => {
  afterEach(() => {
    clearAutoNextQuestionTimer();
    mocks.autoNextEnabled = true;
    vi.clearAllMocks();
    vi.useRealTimers();
  });

  it("shows the answer before automatically moving to the next question", () => {
    vi.useFakeTimers();
    const { submitAnswer } = useWrapperQuestionInput();

    submitAnswer();

    expect(mocks.showAnswer).toHaveBeenCalledTimes(1);
    expect(mocks.goToNextQuestion).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1500);

    expect(mocks.goToNextQuestion).toHaveBeenCalledTimes(1);
  });

  it("keeps the manual answer page when auto next is disabled", () => {
    vi.useFakeTimers();
    mocks.autoNextEnabled = false;
    const { submitAnswer } = useWrapperQuestionInput();

    submitAnswer();
    vi.advanceTimersByTime(1500);

    expect(mocks.showAnswer).toHaveBeenCalledTimes(1);
    expect(mocks.goToNextQuestion).not.toHaveBeenCalled();
  });
});
