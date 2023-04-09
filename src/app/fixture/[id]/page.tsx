import Accordion from "@/components/Accordion/Accordion";
import FixtureEvents from "@/components/Fixture/FixtureEvents";
import FixtureResult from "@/components/Fixture/FixtureResult";
import LineUp from "@/components/LineUp/LineUp";

interface FixturePageProps {
  params: {
    id: string;
  };
}
const FixturePage = ({ params: { id } }: FixturePageProps) => {
  //TODO FixturePage
  return (
    <main>
      {/* el escudo de los equipos con le resultado */}
      <FixtureResult id={id} />
      {/* la alineacion */}
      <div className="grid md:grid-cols-2 gap-2">
        <div>
          <Accordion title="LineUp Barcelona" content={<LineUp />} />
        </div>
        <div>
          <Accordion title="LineUp Barcelona" content={<LineUp />} />
        </div>
      </div>
      <FixtureEvents homeId="33" awayId="34" />
      {/* eventos en vivo */}
      {/* estadisticas */}
    </main>
  );
};

export default FixturePage;
