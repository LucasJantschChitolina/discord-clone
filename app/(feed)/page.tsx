import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { initalProfile } from "@/lib/inital-profile";
import Image from "next/image";
import { createMatch } from "../actions/match";

const Feed = async () => {
  const profile = await initalProfile();

  const reviews = await db.review.findMany({});
  const matches = await db.match.findMany({});

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p>{profile.name}</p>
        <Image
          src={profile.imageUrl}
          height={24}
          width={24}
          alt={`${profile.name} profile image`}
        />
      </div>

      <form
        action={() =>
          createMatch({
            date: new Date(),
            homeTeam: "Atlético MG",
            awayTeam: "Cruzeiro",
            location: "Estádio Mineirão",
            competition: "Brasileirão",
            season: "2024",
            round: "1",
          })
        }
      >
        <Button type="submit">Submit</Button>
      </form>

      <div className="flex gap-2">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id}>
              <p>{review.title}</p>
              <p>{review.rating}</p>
            </div>
          ))
        ) : (
          <p>no reviews yet</p>
        )}
      </div>

      <div className="flex gap-2">
        {matches.length > 0 ? (
          matches.map((match) => (
            <div key={match.id}>
              <p>
                {match.homeTeam} vs {match.awayTeam}
              </p>
              <p>{match.location}</p>
            </div>
          ))
        ) : (
          <p>no matches yet</p>
        )}
      </div>
    </div>
  );
};

export default Feed;
