import Footer from "@/components/Footer/_footer";
import Header from "@/components/Header/_header";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { serviceData, IServiceData } from "@/utils/servicesData";

const initialData = {
  id: "",
  name: "",
  description: "",
} as IServiceData;

const Service = () => {
  const router = useRouter();
  const { servicio } = router.query;

  const [data, setData] = useState(initialData);

  useEffect(() => {
    const searchData = serviceData.find((v) => v.id === servicio);
    if (searchData === undefined) router.push("/");
    setData(searchData as IServiceData);
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
