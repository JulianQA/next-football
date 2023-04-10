import Image from "next/image";

interface LineUpPlayerProps {
  player: Player;
}
const LineUpPlayer = ({ player }: LineUpPlayerProps) => {
  const imageUrl = `https://media.api-sports.io/football/players/${player.id}.png`;
  return (
    <div className="flex items-center gap-4 p-1 sm:p-2 bg-light-borders dark:bg-dark-borders">
      <span className="text-purple-400 w-7 text-center">{player.number}</span>
      <Image
        src={imageUrl}
        alt={player.name}
        className="rounded-full w-7 h-7"
        width={20}
        height={20}
      />
      <p className="w-full">{player.name}</p>
    </div>
  );
};

export default LineUpPlayer;
