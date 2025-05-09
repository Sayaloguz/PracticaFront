import { FC } from "react";
import { SecondaryTitleProps } from "./interface";

const SecondaryTitle: FC<SecondaryTitleProps> = ({
  title,
}: SecondaryTitleProps) => {
  return (
    <h3 className="text-2xl font-bold text-red-800 dark:text-white mt-6 mb-10">
      {title}
    </h3>
  );
};

export default SecondaryTitle;
