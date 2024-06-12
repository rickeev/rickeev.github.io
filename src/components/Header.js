import { Button } from "./ui/button";

const Header = () => {
  return (
  <nav>
    <div className="max-w-7xl pt-4 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="hidden flex-shrink-0 text-3xl text-[#102732]">
            <h1>My Logo</h1>
          </div>
        </div>
        <div className="ml-10 space-x-4">
          <Button alt="Resume Button, click it to open the PDF file of my resume in a new tab">
            <a href="/RickeeVangResume.pdf" target="_blank">Resume</a>
          </Button>
      </div>
      </div>
    </div>
  </nav>
  );
};

export default Header;
