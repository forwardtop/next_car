// pages/who-we-are.tsx
import { Navbar, WeAreQwikio } from "../components";
import "styles/globals.css";

const WhoWeAre: React.FC = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-gray-300">
        <div className="sticky top-0">
          <Navbar />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-4xl mx-auto p-4">
            {/* Center the content both horizontally and vertically */}
            <WeAreQwikio />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
