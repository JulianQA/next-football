import Accordion from "@/components/Accordion/Accordion";
import FixtureEvents from "@/components/Fixture/FixtureEvents";
import FixtureResult from "@/components/Fixture/FixtureResult";
import LineUp from "@/components/LineUp/LineUp";
import { fetchApi } from "@/utils/api/fetch";

interface FixturePageProps {
  params: {
    id: string;
  };
}
const FixturePage = async ({ params: { id } }: FixturePageProps) => {
  //TODO FixturePage
  const { response } = await fetchApi("fixtures", `id=${id}`);
  return (
    <main>
      {/* el escudo de los equipos con le resultado */}
      <FixtureResult fixture={response[0]} />
      {/* la alineacion */}
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
      <FixtureEvents homeId="33" awayId="34" />
      {/* eventos en vivo */}
      {/* estadisticas */}
    </main>
  );
};

export default FixturePage;
