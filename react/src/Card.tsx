import React from "react";
import { User } from "./types/User";

interface CardProps {
  data: User | undefined;
  //imageURL: string;
}

export const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div>
      <h1>Hello {data?.name}</h1>
      <img src={data?.avatar_url} alt="avatar" />
    </div>
  );
};
