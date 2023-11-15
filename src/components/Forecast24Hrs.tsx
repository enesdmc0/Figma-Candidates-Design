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
        className="w-10 h-10  flex items-center justify-center "
      >
        <img src={Icons.Left} alt="Left" className="w-8 h-8" />
      </button>

      <div className="grid grid-cols-7 overflow-hidden flex-1 h-full py-10  ">
        {Object.entries(Object.entries(weeklyWeather)[currentIndex][1]).map(
          (item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between "
            >
              <p className="text-white font-medium capitalize "> {item[0]} </p>
              <img
                src={Icons[custumAir[item[1].type as keyof typeof custumAir]]}
                alt="Air"
                className="w-16  h-16"
              />
              <p className="text-center text-white text-xl font-medium">
                {" "}
                {item[1].degree}° 
              </p>
            </div>
          )
        )}
      </div>

      <button
        onClick={handleNext}
        className="w-10 h-10 flex items-center justify-center "
      >
        <img src={Icons.Right} alt="Left" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Forecast24Hrs;
