import MainTitle from "@/common/components/Titles/MainTitle";
import BigCardAntd from "@/common/components/PruebasMM/Cards/BigCardAntd";
import Link from "next/link";
import JamList from "@/common/components/PruebasMM/JamList";

export default function PagePruebasMisJams() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <MainTitle title="Página de pruebas MJ" />
        <Link href="/pruebas">Volver a pruebas</Link>
        <BigCardAntd
          game="Hola, prueba título"
          alt="Prueba de card"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          user="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
          desc="Esto es una descripción de prueba"
        />
        <JamList />
      </div>
    </div>
  );
}
