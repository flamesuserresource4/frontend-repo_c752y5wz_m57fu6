import { Rocket } from "lucide-react";

export default function HeaderBrand() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30">
        <Rocket size={20} />
      </div>
      <div>
        <p className="text-xl font-semibold tracking-tight text-gray-900">Vibe</p>
        <p className="text-xs text-gray-500 -mt-1">Sign in to continue</p>
      </div>
    </div>
  );
}
