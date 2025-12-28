import {
  FilePenLineIcon,
  PencilIcon,
  PlusIcon,
  Trash,
  UploadCloud,
  UploadCloudIcon,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../configs/api";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { user, token } = useSelector((state) => state.auth);

  const color = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];

  const [allResume, setAllResume] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeID, setEditResumeID] = useState("");
  const navigate = useNavigate();

  const loadAllResume = async () => {
    setAllResume(dummyResumeData);
  };

  const createResume = async (event) => {
    // setShowCreateResume(false);
    // navigate(`/app/resume-builder/res123`);
    try {
      event.preventDefault();
      const { data } = await api.post(
        "/api/resume/create-resume",
        { title },
        { headers: { Authorization: token } }
      );
      setAllResume([...allResume, data.resume]);
      setTitle("");
      setShowCreateResume(false);
      navigate(`/app/resume-builder/${data.resume._id}`);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };
  const uploadResume = async (event) => {
    event.preventDefault();
    setShowUploadResume(false);
    navigate(`/app/resume-builder/res123`);
  };
  const editTitle = async (event) => {
    event.preventDefault();
  };
  const deleteResume = async (resumeID) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      setAllResume((prev) => prev.filter((resume) => resume._id !== resumeID));
    }
  };
  useEffect(() => {
    loadAllResume();
  }, []);
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p
          className="text-xl font-medium mb-6 
          bg-gradient-to-r from-slate-700 to-slate-900 
          bg-clip-text text-transparent sm:hidden"
        >
          Welcome, Santu Pramanik
        </p>

        <div className="flex gap-4">
          {/* Create Resume */}
          <button
            onClick={() => setShowCreateResume(true)}
            className="
              w-full sm:max-w-36 h-48
              flex flex-col items-center justify-center
              rounded-xl gap-3
              bg-indigo-50
              text-slate-700
              border border-dashed border-indigo-300
              group
              hover:bg-indigo-100
              hover:border-indigo-500
              hover:shadow-md
              transition-all duration-300
              cursor-pointer
            "
          >
            <PlusIcon
              className="
                size-11 p-2.5 rounded-full
                bg-gradient-to-br from-indigo-600 to-indigo-500
                text-white
                shadow-sm
                group-hover:scale-105
                transition-all duration-300
              "
            />
            <p className="text-sm font-medium group-hover:text-indigo-700 transition-all">
              Create Resume
            </p>
          </button>

          {/* Upload Resume */}
          <button
            onClick={() => setShowUploadResume(true)}
            className="
              w-full sm:max-w-36 h-48
              flex flex-col items-center justify-center
              rounded-xl gap-3
              bg-purple-50
              text-slate-700
              border border-dashed border-purple-300
              group
              hover:bg-purple-100
              hover:border-purple-500
              hover:shadow-md
              transition-all duration-300
              cursor-pointer
            "
          >
            <UploadCloudIcon
              className="
                size-11 p-2.5 rounded-full
                bg-gradient-to-br from-purple-600 to-purple-500
                text-white
                shadow-sm
                group-hover:scale-105
                transition-all duration-300
              "
            />
            <p className="text-sm font-medium group-hover:text-purple-700 transition-all">
              Upload Resume
            </p>
          </button>
        </div>
        <div>
          <hr className="border-slate-300 my-6 sm:w-[305px]" />
          <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
            {allResume.map((resume, index) => {
              const baseColor = color[index % color.length];
              return (
                <button
                  onClick={() => navigate(`/app/resume-builder/${resume._id}`)}
                  key={index}
                  className="relative
w-full
sm:max-w-36
h-48
flex
flex-col
items-center
justify-center
rounded-lg
gap-2
border
group
hover:shadow-lg
transition-all
duration-300
cursor-pointer
"
                  style={{
                    background: `linear-gradient(135deg, ${baseColor}10,${baseColor}40)
`,
                    borderColor: baseColor + "40",
                  }}
                >
                  <FilePenLineIcon
                    className="size-7 group-hover:scale-105 transition-all"
                    style={{ color: baseColor }}
                  />
                  <p
                    className="text-sm group-hover:scale-105 transition-all px-2 text-center"
                    style={{ color: baseColor }}
                  >
                    {resume.title}
                  </p>
                  <p
                    className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 
                  transition-all duration-300 px-2 text-center"
                    style={{ color: baseColor + "90" }}
                  >
                    Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                  </p>
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-1 right-1 group-hover:flex items-center hidden"
                  >
                    <Trash
                      onClick={() => deleteResume(resume._id)}
                      className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 
                    transition-colors"
                    />
                    <PencilIcon
                      onClick={() => {
                        setEditResumeID(resume._id);
                        setTitle(resume.title);
                      }}
                      className="size-7 p-1.5 hover:bg-white/50 rounded 
                    text-slate-700 transition-colors"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        {showCreateResume && (
          <form
            onSubmit={createResume}
            onClick={() => setShowCreateResume(false)}
            className="fixed inset-0 bg-black-70 backdrop-blur 
          bg-opacity-50 z-10 flex items-center justify-center"
            action=""
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border shadow-md rounded-lg w-full
            max-w-sm p-6"
            >
              <h2 className="text-xl font-bold mb-4">Create a Resume</h2>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Enter resume title"
                className="w-full px-4
               py-2 mb-4 focus:border-blue-600 ring-blue-600 "
                required
              />
              <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors ">
                Create Resume
              </button>
              <X
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 
               cursor-pointer transition-colors"
                onClick={() => {
                  setShowCreateResume(false);
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}
        {showUploadResume && (
          <form
            onSubmit={uploadResume}
            onClick={() => setShowUploadResume(false)}
            className="fixed inset-0 bg-black-70 backdrop-blur 
          bg-opacity-50 z-10 flex items-center justify-center"
            action=""
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border shadow-md rounded-lg w-full
            max-w-sm p-6"
            >
              <h2 className="text-xl font-bold mb-4">Upload Resume</h2>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Enter resume title"
                className="w-full px-4
               py-2 mb-4 focus:border-blue-600 ring-blue-600 "
                required
              />
              <div>
                <label
                  className="block text-sm text-slate-700"
                  htmlFor="resume-input"
                >
                  Select resume file
                  <div
                    className="flex flex-col items-center justify-center gap-2
border group text-slate-400 border-slate-400 border-dashed
rounded-md p-4 py-10 my-4
hover:border-blue-500 hover:text-blue-700
cursor-pointer transition-colors
"
                  >
                    {resume ? (
                      <p>{resume.name}</p>
                    ) : (
                      <>
                        <UploadCloudIcon className="size-14 stroke-1" />
                        <p>Upload resume</p>
                      </>
                    )}
                  </div>
                </label>
                <input
                  onChange={(e) => setResume(e.target.files[0])}
                  type="file"
                  id="resume-input"
                  accept=".pdf"
                  hidden
                />
              </div>
              <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors ">
                Upload Resume
              </button>
              <X
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 
               cursor-pointer transition-colors"
                onClick={() => {
                  setShowUploadResume(false);
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}

        {editResumeID && (
          <form
            onSubmit={editTitle}
            onClick={() => setEditResumeID("")}
            className="fixed inset-0 bg-black-70 backdrop-blur 
          bg-opacity-50 z-10 flex items-center justify-center"
            action=""
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border shadow-md rounded-lg w-full
            max-w-sm p-6"
            >
              <h2 className="text-xl font-bold mb-4">Edit resume title</h2>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Enter resume title"
                className="w-full px-4
               py-2 mb-4 focus:border-blue-600 ring-blue-600 "
                required
              />
              <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors ">
                Update
              </button>
              <X
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 
               cursor-pointer transition-colors"
                onClick={() => {
                  setEditResumeID("");
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
