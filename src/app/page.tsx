import MainTitle from "@/common/components/Titles/MainTitle";
import BigDecorativeImage from "@/common/components/BigDecorativeImage";
import officeImage from "@/common/assets/oficina.jpg";
import SecondaryTitle from "@/common/components/Titles/SecondaryTitle";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <MainTitle title="Bienvenido a la página principal" />

        <BigDecorativeImage
          src={officeImage.src}
          alt="Personas en una oficina trabajando con ordenadores"
        />

        <SecondaryTitle title="Esto es un título" />
        <p className="my-2">Pufff, esto está super vacío...</p>

        <SecondaryTitle title="¿Qué es esto?" />
        <p className="my-2">Pufff, esto está super vacío...</p>
      </div>
    </div>
  );
}
