/**
 * Global
 */

export const TODAY = new Date();
export const DAY_MS = 1000 * 3600 * 24;

/**
 * Enrollment
 */

export const ENROLLMENT_WEEKS = 12;
export const ENROLLMENT_DAYS = 5;

export const ENROLLMENT_PERIOD = (ENROLLMENT_WEEKS * ENROLLMENT_DAYS) / 3;

/**
 * Review
 */

export const REVIEW_CORRECT = 1;
export const REVIEW_WRONG = 0.6;

export const REVIEW_LATEST_REVIEW_GAP = 3;
export const REVIEW_DAYS_OVERFLOW = 1;

export const REVIEW_DIFFICULTY_BASE = 0.3;
export const REVIEW_DIFFICULTY_MAX = 1;
export const REVIEW_DIFFICULTY_MIN = 0;
