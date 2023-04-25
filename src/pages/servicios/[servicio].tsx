import Footer from "@/components/Footer/_footer";
import Header from "@/components/Header/_header";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { serviceData } from "@/utils/servicesData";

const Service = () => {
  const router = useRouter();
  const { servicio } = router.query;

  const [data, setData] = useState(undefined);
  useEffect(() => {
    const searchData = serviceData.find((v) => v.id === servicio);
    if (searchData === undefined) router.push("/");
    setData(searchData);
  }, [servicio]);
  return (
    <>
      <Header></Header>
      <main>
        <h2>{data?.name}</h2>
        <p>{data?.description}</p>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Service;
