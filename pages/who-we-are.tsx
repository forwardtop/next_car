// pages/who-we-are.tsx
import { Navbar, WeAreQwikio } from "../components";
import "styles/globals.css";

const WhoWeAre: React.FC = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="">
          <Navbar />
        </div>
        <div className="flex items-center justify-center">
          <div className="">
            {/* Center the content both horizontally and vertically */}
            <WeAreQwikio />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
