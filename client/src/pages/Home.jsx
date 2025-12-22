 import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* NAV / HEADER */}
      <Outlet /> 
    </div>
  );
};

export default Home;
