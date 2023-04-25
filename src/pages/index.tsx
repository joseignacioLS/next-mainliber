import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header/_header";
import { useState } from "react";
import Footer from "@/components/Footer/_footer";
import Link from "next/link";
import Forum from "./consultas";
import FAQ from "./faq";

const Home = () => {
  const [logos, setLogos] = useState([
    "Arag.png",
    "DKV.jpg",
    "Fiatc.jpg",
    "Generali.png",
    "Mapfre.png",
    "MutuaLevante.png",
    "MutuaMadrilena.png",
    "PlusUltra.jpg",
    "Zurich.png",
  ]);
  return (
    <div className="layout">
      <Header></Header>
      <main>
        <section className={styles.mainSection}>
          <h2>Sobre nosotros</h2>
          <p>
            Mainliber es la correduría del Grupo Sala, especializada en seguros
            particulares, nacida con vocación de servicio al cliente. Nos
            ocupamos de todo, tanto del trámite de siniestros, como de la
            contratación de seguros, modificación si fuese el caso y vigilancia
            de cartera. Todos los años estudiamos sus seguros por si hubiese
            mejores ofertas tanto en precio como en coberturas. Trabajamos con
            las Compañías más solventes del mercado y podemos hacer cualquier
            seguro que necesites.
          </p>
          <p>
            Mainliber Insurance Bróker, S.L. es una sociedad de correduría, con
            número de inscripción en el Registro Especial de Mediadores de
            Seguros, Corredores de Reaseguros y sus Altos Cargos de la Comunidad
            Valenciana VS/2014-016, y tiene concertado seguro de responsabilidad
            civil por los importes legales, así como capacidad financiera según
            lo establecido en el artículo 27 de la Ley 26/2006, de 17 de julio,
            de mediación de seguros y reaseguros privados.
          </p>
        </section>
        <section className={styles.mainSection}>
          <h2>Nuestros Servicios</h2>
          <div className={styles.services}>
            <Link href="/servicios/decesos" className={styles.service}><span>Decesos</span><img src="/assets/iconos/test.png"/></Link>
            <Link href="/servicios/salud" className={styles.service}><span>Salud</span><img src="/assets/iconos/test.png"/></Link>
            <Link href="/servicios/automovil" className={styles.service}><span>Automóvil</span><img src="/assets/iconos/test.png"/></Link>
            <Link href="/servicios/hogar" className={styles.service}><span>Hogar</span><img src="/assets/iconos/test.png"/></Link>
            <Link href="/servicios/vida" className={styles.service}><span>Vida</span><img src="/assets/iconos/test.png"/></Link>
          </div>
        </section>
        <section className={styles.mainSection}>
          <h2>Nuestras Colaboraciones</h2>
          <div className={styles.collaborators}>
            {logos.map((logo: string) => (
              <img key={logo} src={"/assets/logos/" + logo} height="100px" />
            ))}
          </div>
        </section>
        <section id="consultas" className={styles.mainSection}>
          <Forum></Forum>
        </section>
        <section id="faq" className={styles.mainSection}>
          <FAQ></FAQ>
        </section>
      </main>
        <Footer></Footer>
    </div>
  );
};

export default Home;
