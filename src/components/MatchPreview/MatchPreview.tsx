import Link from "next/link";
import FixtureResult from "../FixtureResult/FixtureResult";

const MatchPreview = () => {
  return (
    <article className="w-full sm:w-3/4 mx-auto border bg-white border-light-borders dark:border-dark-borders dark:bg-dark-color-container rounded mb-5">
      <p className="p-4 border-b border-light-borders dark:border-b-dark-borders">
        <Link href={`/league/${"34"}`}>
          <span className="hover:underline underline-offset-2">
            Liga va aqui
          </span>
        </Link>
      </p>
      <FixtureResult id="34" />
    </article>
  );
};

export default MatchPreview;
