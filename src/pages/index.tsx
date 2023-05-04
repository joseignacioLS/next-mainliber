import styles from "@/styles/Home.module.scss";

import { useContext } from "react";

import Header from "@/components/core/Header/Header";
import Footer from "@/components/core/Footer/Footer";
import Forum from "@/components/Sections/consultas/Forum";
import FAQ from "@/components/Sections/faq/FAQ";
import Services from "@/components/Sections/services/Services";
import Collaborators from "@/components/Sections/collaborators/Collaborators";
import Modal from "@/components/core/Modal/Modal";
import { ModalContext } from "@/contexts/modal";
import Link from "next/link";
import Button from "@/components/Shared/Button";
import { UserContext } from "@/contexts/user";
import Contact from "@/components/Sections/contact/Contact";

const Home = () => {
  const { isVisible } = useContext(ModalContext);
  const { userData } = useContext(UserContext);
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
        <section id="contacto" className={styles.mainSection}>
          <Contact></Contact>
        </section>
      </main>
      <Footer></Footer>
      {isVisible && <Modal></Modal>}
      {userData.isAdmin && (
        <div className="admin-btn">
          <Button
            mode="secondaryButton"
            redirect="/administracion"
            action={() => {}}
          >
            Admin
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;
