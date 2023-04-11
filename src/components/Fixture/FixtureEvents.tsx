import FixtureIconEvent from "./FixtureIconEvent";

interface FixtureEventsProps {
  homeId: string;
  awayId: string;
  events: any[];
}
const FixtureEvents = ({ homeId, awayId, events }: FixtureEventsProps) => {
  return (
    <section className="flex flex-col-reverse gap-2">
      {events.map((item, index) => (
        <div key={index} className="grid grid-cols-3 items-center p-2">
          <p
            className={`flex flex-col text-xs sm:flex-row sm:gap-2 sm:text-base ${
              item.team.id === homeId ? "" : "col-start-3"
            }`}
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
          <FixtureIconEvent
            eventType={item.type}
            detail={item.detail}
            className="justify-self-center col-start-2 col-end-3 row-start-1 row-end-1"
          />
        </div>
      ))}
    </section>
  );
};

export default FixtureEvents;
