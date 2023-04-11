import Accordion from "@/components/Accordion/Accordion";
import FixtureEvents from "@/components/Fixture/FixtureEvents";
import FixtureResult from "@/components/Fixture/FixtureResult";
import FixtureStatistics from "@/components/Fixture/FixtureStatistics";
import LineUp from "@/components/LineUp/LineUp";
import { fetchApi } from "@/utils/api/fetch";

interface FixturePageProps {
  params: {
    id: string;
  };
}
const FixturePage = async ({ params: { id } }: FixturePageProps) => {
  const { response } = await fetchApi("fixtures", `id=${id}`);
  return (
    <main>
      <FixtureResult fixture={response[0]} />
      {response[0].lineups.length > 0 && (
        <div className="grid md:grid-cols-2 gap-2">
          {response[0].lineups.map((team: any) => (
            <div key={team.team.id}>
              <Accordion
                title={`LineUp ${team.team.name}`}
                content={
                  <LineUp
                    coach={team.coach}
                    starting={team.startXI}
                    subs={team.substitutes}
                  />
                }
              />
            </div>
          ))}
        </div>
      )}
      {response[0].events.length > 0 && (
        <Accordion
          title="Events"
          content={
            <FixtureEvents
              homeId={response[0].teams.home.id}
              awayId={response[0].teams.away.id}
              events={response[0].events}
            />
          }
        />
      )}
      {response[0].statistics.length > 0 && (
        <Accordion
          title="Statistics"
          content={<FixtureStatistics statistics={response[0].statistics} />}
        />
      )}
    </main>
  );
};

export default FixturePage;
