import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { getNextValidBusinessDate, isWeekend } from "./date";

describe("date functions", () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers();
  });

  test("tests Monday isWeekend", () => {
    const date = new Date(2023, 10, 13, 12); // Monday
    expect(isWeekend(date)).toEqual(false);
  });

  test("tests Saturday isWeekend", () => {
    const date = new Date(2023, 10, 11, 12); // Sat
    expect(isWeekend(date)).toEqual(true);
  });

  test("tests Saturday + 2 getNextValidBusinessDate", () => {
    const date = new Date(2023, 10, 11, 12); // Sat 2023-11-11

    expect(getNextValidBusinessDate(date, 2)).toEqual("2023-11-14");
  });

  test("tests Friday + 2 getNextValidBusinessDate", () => {
    const date = new Date(2023, 10, 10, 12); // Friday 2023-11-10

    expect(getNextValidBusinessDate(date, 2)).toEqual("2023-11-14"); // Tuesday
  });

  test("tests Wednesday + 3 getNextValidBusinessDate", () => {
    const date = new Date(2023, 10, 15, 12); // Wednesday 2023-11-15

    expect(getNextValidBusinessDate(date, 3)).toEqual("2023-11-20"); // Monday
  });

  test("tests Monday + 5 getNextValidBusinessDate", () => {
    const date = new Date(2023, 10, 13, 12); // Wednesday 2023-11-15

    expect(getNextValidBusinessDate(date, 5)).toEqual("2023-11-20"); // Monday
  });
});
