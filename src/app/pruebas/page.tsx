import MainTitle from "@/common/components/Titles/MainTitle";
import MerchantFormAntd from "@/common/components/Forms/MerchantFormAntd/Delivery";
import CardAntd from "@/common/components/PruebasMM/Cards/CardAntd";
import BigCardAntd from "@/common/components/PruebasMM/Cards/BigCardAntd";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <MainTitle title="Página de pruebas" />
        <Link href="/pruebas/pruebahud">Hud</Link>
        <Link href="/pruebas/pruebamisjams">Mis jams</Link>
        <CardAntd
          game="Hola, prueba título"
          alt="Prueba de card"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          user="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
          desc="Esto es una descripción de prueba"
        />

        <BigCardAntd
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
