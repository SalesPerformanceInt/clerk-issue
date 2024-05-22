/**
 * Workflow IDs
 */

export const workflowIDs = [
  "UserAway",
  "UserInactive",
  "CompletedEnrollment",
  "NewEnrollment",
  "QuestionMC",
  "RequestedLink",
] as const;
export type WorkflowIDs = (typeof workflowIDs)[number];

export type WorkflowID = {
  name: WorkflowIDs;
  id: string;
};
