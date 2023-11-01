export interface UserData {
  unanswered_questions?: number;
  active_enrollments?: number;
  first_name?: string;
  last_name?: string;
}

export type UserDataWithName = Pick<UserData, "first_name" | "last_name">;

export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;
