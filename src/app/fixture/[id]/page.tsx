import Accordion from "@/components/Accordion/Accordion";
import FixtureResult from "@/components/FixtureResult/FixtureResult";
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

      {/* eventos en vivo */}
      {/* estadisticas */}
    </main>
  );
};

export default FixturePage;
