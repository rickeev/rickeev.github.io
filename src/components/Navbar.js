import { Button } from "../components/ui/button";

const Navbar = () => {
  return (
  <nav className="bg-slate-400">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0 text-3xl text-[#102732]">
            <h1>kee</h1>
          </div>
        </div>
          <div className="hidden md:block">
            <div className="ml-10 space-x-4">
            <Button>
              <a href="/Rickee_Vang_CV.pdf" target="_blank">Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
