import { db } from "@/lib/db";
import { ModeToggle } from "@/components/mode-toggle";

import { UserButton } from "@clerk/nextjs";
import { MapPin, Trophy } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";

const Feed = async () => {
  const reviews = await db.review.findMany({});
  const matches = await db.match.findMany({});

  return (
    <div className="flex flex-col">
      <Header />
      <div className="p-4 flex gap-4 flex-col">
        <div>
          <h2 className="text-xl mb-2">Partidas sugeridas</h2>
          <p>Partidas acontecendo hoje que você pode gostar</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {matches.map((match) => (
            <Link
              href={`/matches/${match.id}`}
              key={match.id}
              className="bg-green-200 dark:bg-green-500 p-8 rounded-md flex gap-12 flex-col w-full"
            >
              <div className="grid grid-cols-3 items-center text-center">
                <div>
                  <p>{match.homeTeam}</p>
                  <p>Home</p>
                </div>
                <div>
                  <p className="text-md font-bold">Horário</p>
                  <p>
                    {match.date.getHours()}:{match.date.getMinutes()}
                  </p>
                </div>
                <div>
                  <p>{match.awayTeam}</p>
                  <p>Away</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-md flex items-center">
                  <Trophy height={16} />
                  {match.competition}
                </p>
                <p className="text-md flex items-center">
                  <MapPin height={16} />
                  {match.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
