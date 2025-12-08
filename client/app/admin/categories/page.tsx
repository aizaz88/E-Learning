"use client";
import React from "react";
import AdminSidebar from "../../../components/admin/sidebar/AdminSidebar";
import Heading from "../../../utils/Heading";
import DashboardHeader from "../../../components/admin/sidebar/DashboardHeader";
import EditCategories from "../../../components/admin/Customization/EditCategories";

const Page = () => {
  return (
    <div>
      <Heading
        title="Create Course - Admin"
        description="Create a new course on ELearning platform."
        keywords="ELearning, create course, online learning, education, courses, tutorials, training"
      />
      <div className="flex ">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <EditCategories />
        </div>
      </div>
    </div>
  );
};

export default Page;
