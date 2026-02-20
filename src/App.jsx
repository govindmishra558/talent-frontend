import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Header/Navbar/Navbare.jsx";
import Footer from "./Components/Header/Footer/Footer";

// Pages
import Home from "./Components/Pages/Home/Home.jsx";
import AssessmentTypes from "./Components/Pages/AssessmentTypes/AssessmentTypes";
import QuestionStyles from "./Components/Pages/QuestionStyles/QuestionStyles.jsx";
import Skills from "./Components/Pages/Skills/Skills.jsx";
import Cognitive from "./Components/Pages/Cognitive/Cognitive.jsx";
import Behavioral from "./Components/Pages/Behavioral/Behavioral.jsx";
import PopularAssessments from "./Components/Pages/PopularAssessments/PopularAssessments.jsx";
import Simulation from "./Components/Pages/Simulation/Simulation.jsx";
import Video from "./Components/Pages/Video/Video.jsx";
import Customization from "./Components/Pages/Customization/Customization.jsx";
import Dedicatedassessment from "./Components/Pages/Dedicatedassessment/Dedicatedassessment.jsx";
import AssessmentLibrary from "./Components/Pages/AssessmentLibrary/AssessmentLibrary.jsx";

// ✅ NEW: Exam Start Page
import Examcode from "./Exams/TalentExamCode/Examcode.jsx";
import Scheduledexam from "./Exams/Scheduledexam/Scheduledexam.jsx";
import StartExam from "./Exams/Startexam/StartExam.jsx";
import SuccessPage from "./Exams/SuccessPage/SuccessPage.jsx";
import Studentdemo from "./Components/Pages/Studentdemo/Studentdemo.jsx";
import AttendancePage from "./Exams/Attendance/Attendence.jsx";
import Reporting from "./Components/Pages/Reporting/Reporting.jsx";
import Proctoring from "./Components/Pages/Proctoring/Proctoring.jsx";
import Security from "./Components/Pages/Security/Security.jsx";
import Manufacturing from "./Components/Pages/Industries/Manufacturing/Manufacturing.jsx";
import Healthcare from "./Components/Pages/Industries/Healthcare/Healthcare.jsx";
import Construction from "./Components/Pages/Industries/Construction/Construction.jsx";
import FinancialServices from "./Components/Pages/Industries/FinancialServices/FinancialServices.jsx";
import Education from "./Components/Pages/Industries/Education/Education.jsx";
import CallCenters from "./Components/Pages/Industries/CallCenters/CallCenters.jsx";
import Retail from "./Components/Pages/Industries/Retail/Retail.jsx";
import FederalState from "./Components/Pages/Industries/FederalState/FederalState.jsx";
import Engineering from "./Components/Pages/Industries/Engineering/Engineering.jsx";
import UtilitiesEnergy from "./Components/Pages/Industries/UtilitiesEnergy/UtilitiesEnergy.jsx";
import UnderDevelopment from "./Components/UnderDevelopment/UnderDevelopment.jsx";
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton.jsx";

const App = () => {
  const location = useLocation();

  /*
  |--------------------------------------------------------------------------
  | Routes where Navbar & Footer should be hidden
  |--------------------------------------------------------------------------
  */
  const hideLayoutRoutes = ["/studentdemo"];

  // hide layout also for exam code routes
  const hideLayout =
    hideLayoutRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/startexam") ||
    location.pathname.startsWith("/scheduledexam") ||
    location.pathname.startsWith("/exam/");

  return (
    <>
      {/* ✅ Navbar */}
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AssessmentTypes" element={<AssessmentTypes />} />
        <Route path="/QuestionStyles" element={<QuestionStyles />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Cognitive" element={<Cognitive />} />
        <Route path="/Behavioral" element={<Behavioral />} />
        <Route path="/PopularAssessments" element={<PopularAssessments />} />
        <Route path="/Simulation" element={<Simulation />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Customization" element={<Customization />} />
        <Route path="/Dedicatedassessment" element={<Dedicatedassessment />} />
        <Route path="/AssessmentLibrary" element={<AssessmentLibrary />} />
        
        {/* ❌ No Navbar/Footer */}
        <Route path="/studentdemo" element={<Studentdemo />} />
        <Route path="examcode/" element={<Examcode />} />
        <Route path="/scheduledexam/:examCode" element={<Scheduledexam />} />
        <Route path="/startexam/:examCode" element={<StartExam />} />
        <Route path="/Reporting" element={<Reporting />} />
        <Route path="/Proctoring" element={<Proctoring />} />
        <Route path="/Security" element={<Security />} />
        <Route path="/Manufacturing" element={<Manufacturing />} />
        <Route path="/Healthcare" element={<Healthcare />} />
        <Route path="/Construction" element={<Construction />} />
        <Route path="/FinancialServices" element={<FinancialServices />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/CallCenters" element={<CallCenters />} />
        <Route path="/Retail" element={<Retail />} />
        <Route path="/FederalState" element={<FederalState />} />
        <Route path="/Engineering" element={<Engineering />} />
        <Route path="/UtilitiesEnergy" element={<UtilitiesEnergy />} />

        {/* underdevelopment pages start */}
        
        <Route path="/Transport" element={<UnderDevelopment />} />
        <Route path="/Staffing" element={<UnderDevelopment />} />
        <Route path="/Hospitality" element={<UnderDevelopment />} />
        <Route path="/LegalServices" element={<UnderDevelopment />} />

        {/* underdevelopment pages end */}

        <Route path="/successPage" element={<SuccessPage />} />

        <Route path="/Attendence" element={<AttendancePage />} />
      </Routes>

      {/* ✅ Footer */}
      {!hideLayout && <Footer />}
      <ScrollToTopButton />
    </>
  );
};

export default App;
