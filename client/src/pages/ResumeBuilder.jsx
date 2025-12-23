import React, { useEffect, useState } from "react";
import { Link,   } from "react-router-dom";
import { dummyResumeData } from "../assets/assets";
const ResumeBuilder = () => {
  const { resumeID } = useParams();
  const [resumeData, setResumeDat] = useState({
    _id: "",
    title: "",
    personal_info: {},
    professional_summary: "",
    experiencee: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
  });

  const loadExistingResume = async () => {
    const resume = dummyResumeData.find((resume) => resume._id === resumeID);
    if (resume) {
      setResumeDat(resume);
      document.title = resume.title;
    }
  };
  useEffect(() => {
    loadExistingResume();
  }, []);

  return <div>
    <div>
      <Link></Link>
    </div>
  </div>;
};

export default ResumeBuilder;
