import LineUpPlayer from "./LineUpPlayer";

interface LineUpSectionProps {
  title: string;
  people: { player: Player }[];
}
const LineUpSection = ({ title, people }: LineUpSectionProps) => {
  return (
    <div className="mb-2">
      <p>{title}</p>
      {people.map((player) => (
        <LineUpPlayer key={player.player.id} player={player.player} />
      ))}
    </div>
  );
};

export default LineUpSection;
