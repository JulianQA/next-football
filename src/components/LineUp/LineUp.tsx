import LineUpPlayer from "./LineUpPlayer";
import LineUpSection from "./LineUpSection";

interface LineUpProps {
  coach: Coach;
  starting: { player: Player }[];
  subs: { player: Player }[];
}

const LineUp = ({ coach, starting, subs }: LineUpProps) => {
  return (
    <section>
      {/* <LineUpSection title="Coach" people={[coach]} /> */}
      <LineUpSection title="Starting XI" people={starting} />
      <LineUpSection title="Substitutes" people={subs} />
    </section>
  );
};

export default LineUp;
