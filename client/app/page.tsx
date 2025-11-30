"use client";
import React, { FC, useState } from "react";
import Heading from "@/utils/Heading";
import Header from "../components/Header";
import Hero from "../components/Routes/Hero";
interface Props {
  prp: string;
}

const Page: FC<Props> = (prop) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="EduSphere"
        description="A  Sphere of Knowledge for Everyone."
        keywords="Programming,MERN,Redux,AI/ML"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        route={route}
        setRoute={setRoute}
      />
      <Hero />
    </div>
  );
};

export default Page;
