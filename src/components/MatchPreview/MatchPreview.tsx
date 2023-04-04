import TeamLogo from "../TeamLogo/TeamLogo";

const MatchPreview = () => {
  return (
    <article className="w-full sm:w-3/4 mx-auto border bg-white border-light-borders dark:border-dark-borders dark:bg-dark-color-container rounded mb-5">
      <p className="p-4 border-b border-light-borders dark:border-b-dark-borders">
        Liga va aqui
      </p>
      <div className="flex items-center justify-evenly p-4">
        <TeamLogo
          src="https://assets.laliga.com/assets/2019/06/07/small/barcelona.png"
          teamName="Barcelona"
        />
        <div className="bg-light-borders dark:bg-dark-borders px-4 py-1 rounded-full">
          <span className="text-lg">1 : 2</span>
        </div>
        <TeamLogo
          src="https://assets.laliga.com/assets/2019/06/07/small/real-madrid.png"
          teamName="Real Madrid"
        />
      </div>
    </article>
  );
};

export default MatchPreview;
