import Header from "@/components/header";
import { db } from "@/lib/db";
import { Calendar, Clock, MapPin, Trophy } from "lucide-react";

const Match = async ({ params }: { params: { id: string } }) => {
  const match = await db.match.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!match) {
    return <div>Match not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="p-4">
        <h1 className="text-3xl">
          {match.homeTeam} vs {match.awayTeam}
        </h1>
        <p className="text-md flex items-center">
          <Clock height={16} />
          {match.date.getHours()}:{match.date.getMinutes()}
        </p>
        <p className="text-md flex items-center">
          <Calendar height={16} />
          {match.date.getMonth()}
        </p>
        <p className="text-md flex items-center">
          <MapPin height={16} />
          {match.location}
        </p>
        <p className="text-md flex items-center">
          <Trophy height={16} />
          {match.competition}
        </p>
      </div>
    </div>
  );
};

export default Match;
