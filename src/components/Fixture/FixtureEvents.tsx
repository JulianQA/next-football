import FixtureIconEvent from "./FixtureIconEvent";

interface FixtureEventsProps {
  homeId: string;
  awayId: string;
}
const FixtureEvents = ({ homeId, awayId }: FixtureEventsProps) => {
  const eventByTeam = (teamId: string) => {
    return teamId === homeId ? "left-0" : "right-0";
  };
  return (
    <section
      className="relative"
      style={{ height: `${mock.length * 2 + 2}rem` }}
    >
      {mock.map((item, index) => (
        <div key={item.id}>
          <FixtureIconEvent
            eventType={item.type}
            detail={item.detail}
            className="absolute left-2/4"
            style={{ bottom: `${index * 2}rem` }}
          />
          <span
            className={`absolute ${eventByTeam(item.teamId)} botom`}
            style={{ bottom: `${index * 2}rem` }}
          >
            {item.description}
          </span>
        </div>
      ))}
    </section>
  );
};

const mock = [
  {
    id: 1,
    description: "Gol del equipo local",
    teamId: "33",
    type: "Goal",
    detail: "Normal Goal",
  },
  {
    id: 2,
    description: "Tarjeta amarilla para el equipo visitante",
    teamId: "34",
    type: "Card",
    detail: "Yellow Card",
  },
  {
    id: 3,
    description: "Cambio en el equipo local",
    teamId: "33",
    type: "subst",
    detail: "Substitution 1",
  },
  {
    id: 4,
    description: "Gol del equipo visitante",
    teamId: "34",
    type: "Goal",
    detail: "Normal Goal",
  },
  {
    id: 5,
    description: "Tarjeta roja para el equipo local",
    teamId: "33",
    type: "Card",
    detail: "Red Card",
  },
];

export default FixtureEvents;
