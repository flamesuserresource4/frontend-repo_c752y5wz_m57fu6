import { Github, Mail, Chrome } from "lucide-react";

export default function SocialSignIn() {
  const providers = [
    { name: "Google", icon: Chrome, color: "text-red-500" },
    { name: "GitHub", icon: Github, color: "text-gray-800" },
    { name: "Email Link", icon: Mail, color: "text-indigo-600" },
  ];

  return (
    <div className="space-y-3">
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-gray-200" />
        <span className="mx-4 text-xs uppercase tracking-wider text-gray-400">or continue with</span>
        <div className="flex-grow border-t border-gray-200" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {providers.map(({ name, icon: Icon, color }) => (
          <button
            key={name}
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/60 py-2.5 text-sm font-medium text-gray-700 hover:border-gray-300 hover:bg-white transition"
            type="button"
          >
            <Icon size={18} className={color} />
            <span className="hidden sm:inline">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
