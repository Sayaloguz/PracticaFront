// const MainButton: FC<ButtonProps> = ({ useCase, endPointData = {}, token = "" }) => {


"use client";
import { FC } from "react";

/*
import { FC, useEffect, useState } from "react";
import Service from "../../../../../service/src/index";
*/
interface ButtonProps {
  action: string;
  text: string;

}

const MainButton: FC<ButtonProps> = ({action, text}) => {
    return (
      <button 
        onClick={() => {
          console.log({action});
        }}
        type="button" 
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        {text}
      </button>    
  );
}

export default MainButton;