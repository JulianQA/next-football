import FixturePreview from "@/components/Fixture/FixturePreview";
import { fetchApi } from "@/utils/api/fetch";

async function Home() {
  const { response } = await fetchApi("fixtures", "live=all");
  return (
    <main>
      <p className="text-center mb-6 text-2xl">Live Matches</p>
      {response.map((fixture) => (
        <FixturePreview fixture={fixture} key={fixture.fixture.id} />
      ))}
    </main>
  );
}

export default Home;
