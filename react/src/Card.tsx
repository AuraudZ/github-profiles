import React, { useEffect, useState } from "react";
import { User } from "./types/User";
import "./Card.css";
import { Repos } from "./Repos";
interface CardProps {
  data: User | undefined;
  //imageURL: string;
}

export const Card: React.FC<CardProps> = ({ data }) => {
  const [repos, setRepos] = useState<[]>([]);
  // Sort the repositories by number of stars
  useEffect(() => {
    const resp = fetch(data!.repos_url);
    resp.then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log(data);
          setRepos(data);
        });
      }
    });
  }, []);

  return (
    <div className="bg-primary-100 bg-gradient-to-tl border-20 flex p-12 max-w-4xl card ">
      <div>
        <img src={data?.avatar_url} alt={data?.login} className="avatar" />
      </div>
      <div className="user-info">
        <h2>{data?.name}</h2>
        <p>{data?.bio}</p>
        <ul className="info">
          <li>
            {data?.followers}
            <strong> Followers</strong>
          </li>
          <li>
            {data?.following}
            <strong> Following</strong>
          </li>
          <li>
            {data?.public_repos}
            <strong> Repos</strong>
          </li>
          <Repos repos={repos} />
        </ul>
      </div>
    </div>
  );
};
