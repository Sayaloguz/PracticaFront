"use client";

import { Divider } from "antd";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardAntd from "@/common/components/PruebasMM/Cards/CardAntd";
import CustomArrows from "@/common/components/PruebasMM/ModalsMM/CarouselSlick/Delivery";
import { FC } from "react";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomArrow: FC<ArrowProps & { direction: "left" | "right" }> = ({
  className,
  style,
  onClick,
  direction,
}) => {
  const Icon = direction === "left" ? LeftOutlined : RightOutlined;
  const position = direction === "left" ? { left: -16 } : { right: -16 };

  return (
    <div
      className={className}
      style={{
        ...style,
        ...position,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
        width: 32,
        height: 32,
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <Icon style={{ color: "white", fontSize: 16 }} />
    </div>
  );
};

export default function PageHomePruebas() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cardItems = Array.from({ length: 10 }).map((_, i) => ({
    game: `Hola, prueba título ${i + 1}`,
    alt: "Prueba de card",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    user: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i + 1}`,
    desc: "Esto es una descripción de prueba",
  }));

  const cards = cardItems.map((item, i) => (
    <div key={i} className="px-4">
      <CardAntd
        game={item.game}
        alt={item.alt}
        src={item.src}
        user={item.user}
        desc={item.desc}
      />
    </div>
  ));

  return (
    <div className="flex flex-col items-center justify-center px-4 bg-slate-600 py-8">
      <Divider />
      <h1 className="text-xl font-bold mb-4 text-center text-white">
        Últimas 10 cosas en carrusel pero se muestran solo 5:
      </h1>

      <div className="w-full max-w-screen-xl" style={{ minWidth: 0 }}>
        <Slider {...settings}>{cards}</Slider>
      </div>

      <Divider className="my-8 mx-8 bg-white" />

      <h2 className="text-xl font-bold mb-4 text-center text-white">
        Carrusel de demostración con flechas personalizadas:
      </h2>

      <div className="w-full max-w-screen-xl">
        <CustomArrows items={cardItems} />
      </div>
    </div>
  );
}
