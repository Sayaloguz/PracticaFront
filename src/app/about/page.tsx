import { Breadcrumb } from "antd";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section>
      <Breadcrumb
        items={[
          {
            title: <Link href="/">Home</Link>,
          },
          {
            title: "About",
          },
        ]}
      />
      <div>Prueba about</div>
    </section>
  );
}
