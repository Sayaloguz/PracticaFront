
import { FC } from "react";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardAntd from "@/common/components/PruebasMM/Cards/CardAntd";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

interface CustomArrowsProps {
  items: {
    game: string;
    alt: string;
    src: string;
    user: string;
    desc: string;
  }[];
}

const SampleArrow: FC<ArrowProps & { direction: "left" | "right" }> = ({
  className,
  style,
  onClick,
  direction,
}) => {
  const Icon = direction === "left" ? LeftOutlined : RightOutlined;
  const position = direction === "left" ? { left: -50 } : { right: -50 };

  return (
    <div
      className={${className} custom-slick-arrow}
      style={{
        ...style,
        ...position,
        display: "flex !important",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255, 0, 0, 0.6)",
        borderRadius: "35%",
        width: 70,
        height: 200,
        zIndex: 20,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Icon
        style={{
          color: "#f8fafc",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      />
    </div>
  );
};

const CustomArrows: FC<CustomArrowsProps> = ({ items }) => {
  const settings = {
    arrows: true,
    centerMode: true,
    centerPadding: "20px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleArrow direction="right" />,
    prevArrow: <SampleArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container bg-white rounded-lg shadow-md overflow-visible">
      {/* Estilos scoped usando template literals */}
      <style>
        {
          .slick-prev::before, .slick-next::before {
            display: none !important;
            content: '' !important;
          }
          .custom-slick-arrow {
            opacity: 1 !important;
          }
          .slick-disabled .custom-slick-arrow {
            opacity: 0.5 !important;
            cursor: not-allowed !important;
          }
        }
      </style>
      
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-6 flex justify-center">
            <CardAntd
              game={item.game}
              alt={item.alt}
              src={item.src}
              user={item.user}
              desc={item.desc}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomArrows;