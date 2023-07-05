import React from "react";
import { useAppSelector } from "../hooks/hooks";
import Card from "./NftCard";

const ShowCase = () => {
  const { pics } = useAppSelector(state => state.pics);
  console.log(pics);
  return (
    <div className="container grid grid-cols-10 gap-2 mx-auto h-auto p-3">
      <h1 className="text-center col-span-10 text-4xl font-semibold">SHOWCASE</h1>
      {pics.map((link) => (
        <Card link={link}/>
      ))}
    </div>
  )
};

export default ShowCase;
