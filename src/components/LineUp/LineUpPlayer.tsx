const LineUpPlayer = () => {
  const imageUrl = `https://media.api-sports.io/football/players/${"617"}.png`;
  return (
    <div className="flex items-center gap-4  p-1 sm:p-2 bg-light-borders dark:bg-dark-borders">
      <span className="text-purple-400">31</span>
      <img src={imageUrl} alt="Ederson" className="rounded-full w-7 h-7" />
      <p className="w-full">Ederson</p>
    </div>
  );
};

export default LineUpPlayer;
