 import { PlusIcon, UploadCloudIcon } from "lucide-react";
import React from "react";

const Dashboard = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
 