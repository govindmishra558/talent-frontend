import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import { User, Languages, PlayCircle } from "lucide-react";
import "./scheduled.css";

const ScheduledExam = () => {
  const { examCode } = useParams();
  const navigate = useNavigate();

  const [exam, setExam] = useState(null);
  const [language, setLanguage] = useState("");

  // ✅ candidate states
  const [candidateName, setCandidateName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [mobile, setMobile] = useState("");

  /* FETCH EXAM */
  useEffect(() => {
    axios
      .get(`https://talent-backend-i83x.onrender.com/api/scheduled-exam/${examCode}`)
      .then((res) => setExam(res.data.data))
      .catch(() => alert("Failed to load exam details"));
  }, [examCode]);

  const startExam = () => {
    // ✅ validation
    if (!candidateName || !fatherName || !mobile) {
      alert("Please fill all candidate details");
      return;
    }

    if (mobile.length !== 10) {
      alert("Enter valid 10 digit mobile number");
      return;
    }

    // ✅ store in localStorage
    localStorage.setItem(
      "candidateInfo",
      JSON.stringify({
        candidate_name: candidateName,
        father_name: fatherName,
        mobile_number: mobile,
      })
    );

    navigate(`/startexam/${examCode}?lang=${language}`);
  };

  if (!exam) {
    return (
      <div className="loading">
        <Spinner />
        <p>Loading exam details...</p>
      </div>
    );
  }

  return (
    <div className="exam-page">
      <Container>

        {/* CANDIDATE INFO */}
        <div className="candidate-section">
          <div className="candidate-header">
            <User size={20} />
            <h5>Candidate Information</h5>
          </div>

          <Row className="g-3">
            <Col md={4}>
              <input
                placeholder="Candidate Name"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                required
              />
            </Col>

            <Col md={4}>
              <input
                placeholder="Father Name"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                required
              />
            </Col>

            <Col md={4}>
              <input
                placeholder="Mobile Number"
                maxLength={10}
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                required
              />
            </Col>
          </Row>
        </div>

        {/* LANGUAGE */}
        <div className="language-section">
          <Languages size={18} />
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="">Select language</option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
            <option value="ta">Tamil</option>
            <option value="te">Telugu</option>
          </select>
        </div>

        {/* ACTION */}
        <div className="action">
          <Button
            disabled={!language}
            onClick={startExam}
            className="start-btn"
          >
            <PlayCircle size={18} /> Start Exam
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ScheduledExam;
