import {
  Card,
  CardTitle,
  MobileCarousel,
  ResponsiveContainer,
} from "quickcheck-shared";

export default function Home() {
  return (
    <ResponsiveContainer>
      <section className="flex flex-col gap-4">
        <MobileCarousel>
          <Card>
            <CardTitle title="Weekly Streak" qty={3} className="p-6" />
          </Card>

          <Card>
            <CardTitle title="Achievements" className="p-6" />
          </Card>

          <Card>
            <CardTitle title="Leaderboard" className="p-6" />
          </Card>
        </MobileCarousel>
      </section>
    </ResponsiveContainer>
  );
}
