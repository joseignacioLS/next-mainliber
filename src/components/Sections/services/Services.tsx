import React, { DOMElement, useEffect, useState } from "react";
import Decesos from "./Individual/Decesos";
import Salud from "./Individual/Salud";
import Automovil from "./Individual/Automovil";
import Hogar from "./Individual/Hogar";
import Vida from "./Individual/Vida";

import styles from "./Services.module.scss";
import ServiceCard from "./ServiceCard";
import Button from "@/components/Shared/Button";

const serviceData: { key: string; title: string; icon: string; modal: any }[] =
  [
    {
      key: "decesos",
      title: "Decesos",
      icon: "/assets/iconos/test.png",
      modal: <Decesos />,
    },
    {
      key: "salud",
      title: "Salud",
      icon: "/assets/iconos/test.png",
      modal: <Salud />,
    },
    {
      key: "automovil",
      title: "Automovil",
      icon: "/assets/iconos/test.png",
      modal: <Automovil />,
    },
    {
      key: "hogar",
      title: "Hogar",
      icon: "/assets/iconos/test.png",
      modal: <Hogar />,
    },
    {
      key: "vida",
      title: "Vida",
      icon: "/assets/iconos/test.png",
      modal: <Vida />,
    },
  ];

const Services = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [services, setServices] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setServices(document.querySelector("#services") as HTMLElement);
  }, []);

  useEffect(() => {
    services?.addEventListener("scroll", (e) => {
      const currentTarget = e?.currentTarget as HTMLElement;
      const scroll = currentTarget?.scrollLeft;
      const width = currentTarget?.offsetWidth;
      if (!scroll || !width) return;
      const current = Math.round(scroll / width);
      setSelectedCardIndex(current);
    });
  }, [services]);

  const handleScroll = (target: number) => {
    if (!services) return;
    if (target >= serviceData.length) target -= serviceData.length;
    if (target < 0) target += serviceData.length;
    services?.scrollTo({ left: target * services.offsetWidth });
  };

  return (
    <section id="servicios" className="mainSection">
      <h2>Nuestros Servicios</h2>
      <div className={styles.servicesWrap}>
        <Button action={() => handleScroll(selectedCardIndex - 1)}>Prev</Button>
        <div className={styles.services} id="services">
          {serviceData.map((data) => {
            return <ServiceCard {...data} />;
          })}
        </div>
        <Button action={() => handleScroll(selectedCardIndex + 1)}>Next</Button>
      </div>
    </section>
  );
};

export default Services;
