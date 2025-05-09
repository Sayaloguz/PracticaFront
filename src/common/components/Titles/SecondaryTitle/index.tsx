import { FC } from "react";

interface SecondaryTitleProps {
  title: string;
}

const SecondaryTitle: FC<SecondaryTitleProps> = ({
  title,
}: SecondaryTitleProps) => {
  return (
    <h3 className="text-2xl font-bold text-gray-800 dark:text-white ml-16 mt-6 mb-10">
      {title}
    </h3>
  );
};

export default SecondaryTitle;
