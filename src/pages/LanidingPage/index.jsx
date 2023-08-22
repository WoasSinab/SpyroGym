import React from "react";
import Navbar from "../../components/Navbar";
import Home from "../../components/Home";
import Category from "../../components/Category";
import Instructors from "../../components/Instructors";
import Download from "../../components/Download";
import Footer from "../../components/Footer";
import FeedBack from "../../components/FeedBack";
import ClassSec from "../../components/ClassSec/ClassSec";
import FitInf from "../../components/FitInf";
import QuestionBox from "../../components/QuestionBox"

const LandingPage = () => {
  return (
    <>
      <main className='w-full bg-[#18171A] overflow-hidden h-full 2xl:container mx-auto '>
        <Navbar />
        <Home />
        <Category />
        <FitInf />
        <ClassSec />
        <Instructors />
        <Download />
        <FeedBack />
        <QuestionBox />
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
