import { Card, ProgressItem } from "quickcheck-shared";

import { useEnrollmentContext } from "~/pages/Enrollment";

export const EnrollmentProgress = () => {
  const { enrollment } = useEnrollmentContext();

  return (
    <Card className="w-full">
      <ProgressItem
        id={enrollment.id}
        progress={{
          attempted: enrollment.attempted.aggregate?.count ?? 0,
          retired: enrollment.retired.aggregate?.count ?? 0,
          total: enrollment.total.aggregate?.count ?? 0,
        }}
      />
    </Card>
  );
};
