import React from "react";
import clsx from "clsx";

interface Props {
  className: string;
}

const Info: React.FC<Props> = ({ className }) => {
  return <div className={clsx("", className)}>Info</div>;
};

export default Info;
