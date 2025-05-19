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
  const position = direction === "left" ? { left: -40 } : { right: -40 };

  return (
    <div
      className={`${className} group`} // group para el hover
      style={{
        ...style,
        ...position,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255, 0, 0, 0.6)", // rojo con transparencia
        borderRadius: "35%",
        width: 70,
        height: 200,
        zIndex: 20,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {/* 
              <Icon
        className="transition-colors duration-300 group-hover:text-white"
        style={{ color: "#f8fafc", fontSize: 28 }} // color inicial gris claro (tailwind slate-50)
      />
        */}
    </div>
  );
};

const CustomArrows: FC<CustomArrowsProps> = ({ items }) => {
  const settings = {
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
