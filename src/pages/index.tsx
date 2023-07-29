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
        <Services></Services>
        <Collaborators></Collaborators>
        <Forum></Forum>
        <FAQ></FAQ>
        <Contact></Contact>
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
