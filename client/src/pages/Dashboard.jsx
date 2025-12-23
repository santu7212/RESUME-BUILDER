import {
  FilePenLineIcon,
  PencilIcon,
  PlusIcon,
  Trash,
  UploadCloudIcon,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";

const Dashboard = () => {
  const color = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];

  const [allResume, setAllResume] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(true);
  const [showUploadResume, setShowUploadResume] = useState(true);

  const loadAllResume = async () => {
    setAllResume(dummyResumeData);
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
                  <div className="absolute top-1 right-1 group-hover:flex items-center hidden">
                    <Trash
                      className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 
                    transition-colors"
                    />
                    <PencilIcon
                      className="size-7 p-1.5 hover:bg-white/50 rounded 
                    text-slate-700 transition-colors"
                    />
                  </div>
                </button>
              );
            })}
          </div>

        </div>
        {showCreateResume&&(
          <form className="fixed inset-0 bg-black-70 backdrop-blur 
          bg-opacity-50 z-10 flex items-center justify-center" action="">
            <div>
              <h2>Create a Resume</h2>
              <input type="text" placeholder="Enter resume title"  className="w-full px-4
               py-2 mb-4 focus:border-blue-600 ring-blue-600 " required/>
               <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors ">Create Resume</button>
               <X className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 
               cursor-pointer transition-colors" onClick={()=>{setShowCreateResume(false); }}/>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

export default Dashboard;
