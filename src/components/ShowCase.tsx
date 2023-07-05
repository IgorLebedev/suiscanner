import React from "react";
import { useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/hooks";
import { clearPics } from "../slicers/picsSlice";
import Card from "./NftCard";

const ShowCase = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pics } = useAppSelector(state => state.pics);
  const handleReset = () => {
    dispatch(clearPics());
    navigate('/')
  };
  return (
    <div className="container grid grid-cols-12 gap-4 mx-auto h-auto p-3">
      <div className="mb-2 flex col-span-12 justify-between items-center">
        <h1 className="text-center text-4xl text-red-300 font-semibold">SHOWCASE</h1>
        <button
          className="col-span-2 px-5 py-2 bg-red-400 text-slate-100 rounded-lg"
          onClick={handleReset}  
        >
          Reset Nfts
        </button>
      </div> 
      {pics.map((link) => (
        <Card link={link}/>
      ))}
    </div>
  )
};

export default ShowCase;
