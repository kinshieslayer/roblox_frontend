import { Button } from "@/components/ui/button";
import ImageSlider from "./ImageSlider";

const GameHeader = () => {
  return (
  <div className="relative w-full overflow-x-hidden">
      {/* Responsive Navigation Bar */}
      <nav className="bg-gray-800 text-white px-2 py-2 flex items-center overflow-x-auto whitespace-nowrap md:px-4">
        <div className="flex items-center w-full">
          <img src="/store-images/roblox-logo.jpg" alt="Roblox Logo" className="h-6 w-6 mr-2 rounded-sm object-contain" />
          <span className="mr-4 md:mr-6 text-sm md:text-base cursor-pointer">Charts</span>
          <span className="mr-4 md:mr-6 text-sm md:text-base cursor-pointer">Marketplace</span>
          <span className="text-sm md:text-base cursor-pointer">Robux</span>
        </div>
      </nav>

      {/* Responsive Main Content */}
      <div className="max-w-4xl mx-auto w-full px-2 md:px-0">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          <div className="w-full md:w-2/3">
            <ImageSlider />
          </div>

          <div className="w-full md:w-1/3 p-2 md:p-4 bg-white mt-2 md:mt-0 rounded-md shadow-sm">
            <div className="mb-4">
              <h1 className="text-2xl md:text-3xl font-bold">Brookhaven 🏡 RP</h1>
              <p className="text-gray-600 text-sm md:text-base">By Wolfpaq Games</p>
              <p className="text-gray-600 text-sm md:text-base">Maturity: Minimal</p>
            </div>

            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded mb-4 text-base md:text-lg">
              <span className="mr-2">▶</span> Play
            </Button>

            <div className="flex flex-col sm:flex-row justify-between text-center gap-2">
              <div className="flex-1">
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <span className="text-xs md:text-sm">Favorite</span>
              </div>
              <div className="flex-1">
                <div className="text-xs md:text-sm font-bold">9M+</div>
                <span className="text-xs md:text-sm">Likes</span>
              </div>
              <div className="flex-1">
                <div className="text-xs md:text-sm font-bold">1M+</div>
                <span className="text-xs md:text-sm">Dislikes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;
