import MainTitle from "@/common/components/Titles/MainTitle";
import BigDecorativeImage from "@/common/components/BigDecorativeImage";
import officeImage from "@/common/assets/oficina.jpg";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
      <BigDecorativeImage
        src={officeImage}
        alt="Personas en una oficina trabajando con ordenadores"
      />
        <MainTitle title="Bienvenido a la página principal" />
        <p>Pufff, esto está super vacío...</p>
      </div>

    </div>

  );
}