import FixturePreview from "@/components/Fixture/FixturePreview";
import { fetchApi } from "@/utils/api/fetch";

interface LeaguePageProps {
  params: {
    id: string;
  };
}
const LeaguePage = async ({ params: { id } }: LeaguePageProps) => {
  const today = new Date();

  const currentDate: string = today.toISOString().slice(0, 10);

  let inAWeek: string = today.toISOString().slice(0, 10);

  inAWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const currentYear =
    today.getMonth() < 7 ? today.getFullYear() - 1 : today.getFullYear();
  const { response } = await fetchApi(
    "fixtures",
    `league=${id}&from=${currentDate}&to=${inAWeek}&season=${currentYear}`
  );
  return (
    <main className="text-white">
      {response.map((fixture) => (
        <FixturePreview fixture={fixture} key={fixture.id} />
      ))}
    </main>
  );
};

export default LeaguePage;
