import { useContext } from "react";

import Header from "@/components/core/Header/Header";
import Footer from "@/components/core/Footer/Footer";
import Forum from "@/components/Sections/consultas/Forum";
import FAQ from "@/components/Sections/faq/FAQ";
import Services from "@/components/Sections/services/Services";
import Collaborators from "@/components/Sections/collaborators/Collaborators";
import Modal from "@/components/core/Modal/Modal";
import { ModalContext } from "@/contexts/modal";
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
        <section className="mainSection">
          <div style={{ display: "flex", gap: "3rem" }}>
            <div>
              <p style={{ textAlign: "center" }}>✔️</p>
              <p>
                Te ayudamos a seleccionar la opción que mejor se adapte a tus
                necesidades de entre las mejores aseguradoras del mercado.
              </p>
            </div>

            <div>
              <p style={{ textAlign: "center" }}>✔️</p>
              <p>
                Ponemos a tu disposición un equipo de profesionales con amplia
                experiencia en el sector.
              </p>
            </div>

            <div>
              <p style={{ textAlign: "center" }}>✔️</p>
              <p>
                Te acompañamos en la resolución de tus problemas y te damos
                soluciones alternativas en función a tus circunstancias.
              </p>
            </div>
          </div>
        </section>
        <Services></Services>
        <Forum></Forum>
        <FAQ></FAQ>
        <Contact></Contact>
        <Collaborators></Collaborators>
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
