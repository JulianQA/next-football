import FixtureIconEvent from "./FixtureIconEvent";

interface FixtureEventsProps {
  homeId: string;
  awayId: string;
  events: any[];
}
const FixtureEvents = ({ homeId, awayId, events }: FixtureEventsProps) => {
  const eventByTeam = (teamId: string) => {
    return teamId === homeId ? "left-0" : "right-0";
  };
  return (
    <section
      className="relative"
      style={{ height: `${events.length * 2 + 2}rem` }}
    >
      {events.map((item, index) => (
        <div
          key={index}
          style={{
            bottom: `${index * 2 + (item.type === "subst" ? 1 : 0)}rem`,
          }}
        >
          <FixtureIconEvent
            eventType={item.type}
            detail={item.detail}
            className="absolute left-2/4"
            style={{ bottom: `${index * 2}rem` }}
          />
          <p
            className={`absolute ${eventByTeam(
              item.team.id
            )} flex flex-col text-xs sm:flex-row sm:gap-2 sm:text-base`}
            style={{ bottom: `${index * 2}rem` }}
          >
            {item.type === "subst" ? (
              <>
                <span>{item.player.name}</span>
                <span className="text-light-borders dark:text-dark-borders">
                  {item.assist.name}
                </span>
              </>
            ) : (
              <span>{item.player.name}</span>
            )}
          </p>
        </div>
      ))}
    </section>
  );
};

export default FixtureEvents;
