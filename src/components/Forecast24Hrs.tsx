import clsx from "clsx";
import React, { useState } from "react";
import { weeklyWeather } from "../constants/data.json";
import Icons from "../utilities/icons";

interface Props {
  className: string;
}

const Forecast24Hrs: React.FC<Props> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
  };

  enum custumAir {
    "sunny cloudy" = "Air4",
    "sunny" = "Air5",
    "rainy" = "Air6",
    "sunny rainy" = "Air7",
    "thunder" = "Air8",
  }

  return (
    <div
      className={clsx("flex items-center ", className)}
    >
      <button
        onClick={handlePrev}
        className=" md:w-10 md:h-10 w-5 h-5  flex items-center justify-center "
      >
        <img src={Icons.Left} alt="Left" className="w-4 md:w-8 h-4 md:h-8" />
      </button>

      <div className="grid grid-cols-7 overflow-hidden flex-1 h-full py-10  ">
        {Object.entries(Object.entries(weeklyWeather)[currentIndex][1]).map(
          (item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between "
            >
              <p className="text-white font-medium capitalize text-[10px] sm:text-sm md:text-base hidden sm:block "> {item[0]} </p>
              <p className="text-white font-medium capitalize text-[10px] sm:text-sm md:text-base block sm:hidden "> {item[0].substring(0,4)} </p>
              <img
                src={Icons[custumAir[item[1].type as keyof typeof custumAir]]}
                alt="Air"
                className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16"
              />
              <p className="text-center text-white text-xs sm:text-sm md:text-xl font-medium">
                {" "}
                {item[1].degree}° 
              </p>
            </div>
          )
        )}
      </div>

      <button
        onClick={handleNext}
        className=" md:w-10 md:h-10 w-5 h-5  flex items-center justify-center "
      >
        <img src={Icons.Right} alt="Left" className="w-4 md:w-8 h-4 md:h-8" />
      </button>
    </div>
  );
};

export default Forecast24Hrs;
