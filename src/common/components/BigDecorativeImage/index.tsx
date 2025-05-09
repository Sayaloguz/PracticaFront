import { FC } from "react";
import Image from "next/image";

interface BigDecorativeImageProps {
  src: string;
  alt: string;
}

const BigDecorativeImage: FC<BigDecorativeImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full h-[40vh]">
      <Image src={src} alt={alt} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-red-500/40 mix-blend-screen" />
    </div>
  );
};

export default BigDecorativeImage;
