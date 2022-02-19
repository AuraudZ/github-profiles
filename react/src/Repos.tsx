import React from "react";

import "./Repo.css";
interface ReposProps {
  repos: any[];
}

export const Repos: React.FC<ReposProps> = ({ repos }) => {
  return (
    <div className=" rounded inline-block text-white text-xs mr-2 mb-2 no-underline p-1 px-1">
      {repos
        .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
        .slice(0, 10)
        .map((repo: any) => (
          <div key={repo.id} className="repo flex flex-row">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo"
            >
              {repo.name}
            </a>
          </div>
        ))}
    </div>
  );
};
