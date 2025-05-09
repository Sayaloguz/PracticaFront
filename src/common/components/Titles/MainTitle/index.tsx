import { FC } from "react";
import { MainTitleProps } from "./interface";

const MainTitle: FC<MainTitleProps> = ({ title }) => {
  return (
    <h1 className="text-4xl font-extrabold text-red-700 dark:text-white ml-8 mt-5 mb-5">
      {title}
    </h1>
  );
};

export default MainTitle;
