import styles from "@/styles/Home.module.scss";

import { useContext } from "react";

import Header from "@/components/core/Header/Header";
import Footer from "@/components/core/Footer/Footer";
import Forum from "@/components/Sections/consultas/Forum";
import FAQ from "@/components/Sections/faq/FAQ";
import About from "@/components/Sections/about/About";
import Services from "@/components/Sections/services/Services";
import Collaborators from "@/components/Sections/collaborators/Collaborators";
import Modal from "@/components/core/Modal/Modal";
import { ModalContext } from "@/contexts/modal";
import Link from "next/link";
import Button from "@/components/Shared/Button";
import { UserContext } from "@/contexts/user";

const Home = () => {
  const { isVisible } = useContext(ModalContext);
  const { hasAuth } = useContext(UserContext);
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
      {hasAuth() && (
        <Link href="/administracion" className="admin-btn">
          <Button isMain={false} text="Admin" action={() => {}}></Button>
        </Link>
      )}
    </div>
  );
};

export default Home;
