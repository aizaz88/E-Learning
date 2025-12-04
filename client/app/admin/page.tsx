"use client";
import Heading from "../../utils/Heading";
import React from "react";
import AdminProtected from "../hooks/adminProtected";
import AdminSidebar from "../../components/admin/sidebar/AdminSidebar";
import DashboardHero from "../../components/admin/sidebar/DashboardHero";

const Page = () => {
  return (
    <AdminProtected>
      <Heading
        title="Admin - EduSphere"
        description="EduSphere is a platform for online learning and education."
        keywords="EduSphere, online learning, education, courses, tutorials, training"
      />
      <div className="flex h-[200vh]">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHero />
        </div>
      </div>
    </AdminProtected>
  );
};

export default Page;
