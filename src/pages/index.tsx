import styles from "@/styles/Home.module.scss";

import { useContext, } from "react";

import Header from "@/components/core/Header/Header";
import Footer from "@/components/core/Footer/Footer";
import Forum from "@/components/Sections/consultas/Forum";
import FAQ from "@/components/Sections/faq/FAQ";
import About from "@/components/Sections/about/About";
import Services from "@/components/Sections/services/Services";
import Collaborators from "@/components/Sections/collaborators/Collaborators";
import Modal from "@/components/core/Modal/Modal";
import { ModalContext } from "@/contexts/modal";

const Home = () => {
  const { isVisible } = useContext(ModalContext);
  return (
    <div className="layout">
      <Header></Header>
      <main>
        <section className={styles.mainSection}>
          <Services></Services>
        </section>
        <section className={styles.mainSection}>
          <Collaborators></Collaborators>
        </section>
        <section id="consultas" className={styles.mainSection}>
          <Forum></Forum>
        </section>
        <section id="faq" className={styles.mainSection}>
          <FAQ></FAQ>
        </section>
        <section className={styles.mainSection}>
          <About></About>
        </section>
      </main>
      <Footer></Footer>
      {isVisible && <Modal></Modal>}
    </div>
  );
};

export default Home;
