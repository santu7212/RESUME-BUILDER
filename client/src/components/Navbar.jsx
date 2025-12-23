import { Link, useNavigate } from "react-router-dom";

const user = { name: "Santu Pramanik" };

// const logOutUSer = () => {
//   navigate("/");
// };

const Navbar = () => {
  return (
    <div className="shadow bg-white">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all">
        {/* LOGO */}
        <Link to="/">
          <svg
            width="200"
            height="50"
            viewBox="0 0 270 70"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="resumaiGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#5B44F6" />
                <stop offset="50%" stopColor="#4A6CF7" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>

            <text
              x="5"
              y="48"
              fontFamily="Poppins, sans-serif"
              fontSize="44"
              fontWeight="600"
              fill="#111827"
              letterSpacing="1px"
            >
              Resum
            </text>

            <text
              x="160"
              y="48"
              fontFamily="Poppins, sans-serif"
              fontSize="44"
              fontWeight="700"
              fill="url(#resumaiGrad)"
              letterSpacing="1px"
              style={{
                filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.15))",
              }}
            >
              AI
            </text>
          </svg>
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <p className="max-sm:hidden">
            Hi, <span className="font-medium">{user.name}</span>
          </p>

          <button className="bg-white hover:bg-red-200 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all">
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
