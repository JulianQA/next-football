import { BiFootball } from "react-icons/bi";
import { TbRectangleVertical } from "react-icons/tb";
import { MdChangeCircle } from "react-icons/md";

interface FixtureIconEventProps extends React.HTMLAttributes<HTMLSpanElement> {
  eventType: string;
  detail: string;
}
const FixtureIconEvent = ({
  eventType,
  detail,
  ...spanProps
}: FixtureIconEventProps) => {
  const icon = () => {
    if (eventType === "Goal") {
      return <BiFootball size={24} className="text-purple-400" />;
    } else if (eventType === "Card") {
      return detail === "Red Card" ? (
        <TbRectangleVertical className="text-red-600" size={24} />
      ) : (
        <TbRectangleVertical className="text-yellow-300" size={24} />
      );
    } else if (eventType === "subst") {
      return <MdChangeCircle className="text-purple-400" size={24} />;
    } else {
      return;
    }
  };

  return <span {...spanProps}>{icon()}</span>;
};

export default FixtureIconEvent;
