import HeaderBrand from "./HeaderBrand";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center justify-between">
          <HeaderBrand />
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Need help?</a>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1 flex items-center">
            <div className="w-full rounded-2xl border border-gray-200/80 bg-white/80 p-6 shadow-xl backdrop-blur-sm">
              {children}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative h-72 md:h-full rounded-2xl overflow-hidden border border-gray-200/80 bg-white/60 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 pointer-events-none" />
              <div className="p-8 h-full flex flex-col justify-end">
                <h2 className="text-3xl font-semibold text-gray-900">Welcome back</h2>
                <p className="mt-2 text-gray-600">Log in to access your dashboard, projects, and more.</p>
                <ul className="mt-6 space-y-3 text-gray-700">
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-500" /> Secure authentication</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-500" /> Project-driven workflow</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-500" /> AI-powered assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
