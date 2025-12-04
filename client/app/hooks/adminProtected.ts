import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { useSelector } from "react-redux";

interface ProtectedProps {
  children: ReactNode;
}

const useProtected = ({ children }: ProtectedProps) => {
  const { user } = useSelector((state: any) => state.auth);

  if (user) {
    const admin = user?.role === "admin";

    return admin ? children : redirect("/");
  }
};

export default useProtected;
