import react from "react";
import logo from "../assets/images/pint.svg";
import "../assets/styles/App.css";

export default function Samples() {
  return (
    <div className="flex flex-col rounded-lg my-1 mt-3 mx-3 p-1 bg-white">
      <div className=" bg-whiteflex-start align-left text-l p-1">
        <p>predefined color palettes</p>
        <div className="flex-col">
          <div className="flex flex-row items-center">
            <div
              style={{ backgroundColor: '#ff3847' }}
              className="w-5 h-5 p-1 m-1  rounded-lg"
            ></div>
            <div
              style={{ backgroundColor: '#ff3847' }}
              className="w-5 h-5 p-1 m-1  rounded-lg"
            ></div>
            <div
              style={{ backgroundColor: '#ff3847' }}
              className="w-5 h-5 p-1 m-1  rounded-lg"
            ></div>
            <div
              style={{ backgroundColor: '#ff3847' }}
              className="w-5 h-5 p-1 m-1  rounded-lg"
            ></div>
            <div
              style={{ backgroundColor: '#ff3847' }}
              className="w-5 h-5 p-1 m-1  rounded-lg"
            ></div>
            <div
              style={{ backgroundColor: '#ff3847' }}
              className="w-5 h-5 p-1 m-1  rounded-lg"
            ></div>

          </div>
        </div>
      </div>
    </div>
  );
}
