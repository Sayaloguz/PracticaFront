import FormCrearJam from "@/common/components/PruebasMM/FormCrearJam/Delivery";
import MainTitle from "@/common/components/Titles/MainTitle";
import Link from "next/link";

export default function PagePruebasCrearJam() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <MainTitle title="Página de pruebas" />
        <Link href="/pruebas">Volver a pruebas</Link>

        <FormCrearJam />
      </div>
    </div>
  );
}
