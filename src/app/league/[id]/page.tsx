import { leagues } from "@/utils/mock/leagues";

interface LeaguePageProps {
  params: {
    id: string;
  };
}
const LeaguePage = ({ params: { id } }: LeaguePageProps) => {
  const leagueInfo = leagues.find((item) => item.id.toString() == id);
  return <div className="text-white">{leagueInfo?.name}</div>;
};

export default LeaguePage;
