import AuthWrapper from "../components/AuthWrapper";
import Companies from "../components/Landing/Companies";
import Everything from "../components/Landing/Everything";
import TaskKarBusiness from "../components/Landing/TaskKarBusiness"; 
import HeroBanner from "../components/Landing/HeroBanner";
import JoinTaskKar from "../components/Landing/JoinTaskKar";
import PopularServices from "../components/Landing/PopularServices";
import Services from "../components/Landing/Services";
import { useStateProvider } from "../context/StateContext";
import React from "react";

function Index() {
  const [{ showLoginModal, showSignupModal }] = useStateProvider();

  return (
    <div>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <TaskKarBusiness />
      <JoinTaskKar />
      {(showLoginModal || showSignupModal) && (
        <AuthWrapper type={showLoginModal ? "login" : "signup"} />
      )}
    </div>
  );
}

export default Index;
