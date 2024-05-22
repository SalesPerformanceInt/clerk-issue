// import { expect, test } from "vitest";

// import { startNotificationWorkflow } from "~/models/notification/notificationService";

// test("startNotificationWorkflow - NewEnrollment", async () => {
//   const notificationHandles = await Promise.all(
//     Array(5)
//       .fill(0)
//       .map(
//         async (_, i) =>
//           await startNotificationWorkflow({
//             taskQueue: "accelerate_notification_service",
//             workflowId: { name: "NewEnrollment", id: `Test-${i}` },
//             workflowArgs: [
//               {
//                 schedule: { now: true },
//                 notificationData: {
//                   userData: {
//                     uid: "1",
//                     firstName: "Testable",
//                     lastName: "Bystander",
//                     email: `testable.bystander.${i}@test.com`,
//                     language: "en-us",
//                   },
//                   loginUrl: "",
//                   notificationType: "NewEnrollment",
//                   contentData: {
//                     enrollment: {
//                       uid: "1",
//                       taxon: { displayName: "Test Taxon" },
//                       firstQuestion: { uid: "1" },
//                     },
//                   },
//                 },
//               },
//             ],
//           }),
//       ),
//   );

//   expect(notificationHandles).toHaveLength(5);
// });
