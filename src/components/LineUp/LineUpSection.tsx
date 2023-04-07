import LineUpPlayer from "./LineUpPlayer";

interface LineUpSectionProps {
  title: string;
  people: any[];
}
const LineUpSection = ({ title, people }: LineUpSectionProps) => {
  return (
    <div className="mb-2">
      <p>{title}</p>
      {people.map((player, index) => (
        <LineUpPlayer key={index} />
      ))}
    </div>
  );
};

export default LineUpSection;
