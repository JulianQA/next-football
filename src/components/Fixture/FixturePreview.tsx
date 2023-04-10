"use client";
import Link from "next/link";
import FixtureResult from "./FixtureResult";
import Image from "next/image";

interface FixturePreviewProps {
  fixture: Response;
}
const FixturePreview = ({ fixture }: FixturePreviewProps) => {
  return (
    <article className="w-full sm:w-3/4 mx-auto border bg-white border-light-borders dark:border-dark-borders dark:bg-dark-color-container rounded mb-5">
      <p className="flex items-center gap-2 p-4 border-b border-light-borders dark:border-b-dark-borders">
        <Image
          src={fixture.league.logo}
          alt={fixture.league.name}
          width={20}
          height={20}
          className="w-auto h-auto"
        />
        <Link href={`/league/${fixture.league.id}`}>
          <span className="hover:underline underline-offset-2">
            {fixture.league.name}
          </span>
        </Link>
      </p>
      <FixtureResult fixture={fixture} />
    </article>
  );
};

export default FixturePreview;
