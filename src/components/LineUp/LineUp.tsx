import LineUpPlayer from "./LineUpPlayer";
import LineUpSection from "./LineUpSection";

const LineUp = () => {
  return (
    <section>
      <LineUpSection title="Coach" people={[...new Array(1)]} />
      <LineUpSection title="Starting XI" people={[...new Array(11)]} />
      <LineUpSection title="Substitutes" people={[...new Array(7)]} />
    </section>
  );
};

export default LineUp;
