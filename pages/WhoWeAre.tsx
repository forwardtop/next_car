import { Navbar, WeAreQwikio } from "@/components";
import Link from 'next/link';

const WhoWeAre: React.FC = () => {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <WeAreQwikio />
        {/* Other content */}
      </div>
    </>
  );
};

export default WhoWeAre;
