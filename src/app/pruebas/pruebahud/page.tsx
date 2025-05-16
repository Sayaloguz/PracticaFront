import MainTitle from "@/common/components/Titles/MainTitle";
import CardAntd from "@/common/components/PruebasMM/Cards/CardAntd";
import Link from "next/link";

export default function PagePruebasHud() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <MainTitle title="Página de pruebas hud" />
        <Link href="/pruebas">Volver a pruebas</Link>
        <CardAntd
          game="Hola, prueba título"
          alt="Prueba de card"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          user="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
          desc="Esto es una descripción de prueba"
        />
      </div>
    </div>
  );
}
