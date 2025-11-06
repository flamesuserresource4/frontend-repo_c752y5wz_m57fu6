import { useState } from "react";
import AuthLayout from "./components/AuthLayout";
import HeaderBrand from "./components/HeaderBrand";
import LoginForm from "./components/LoginForm";
import SocialSignIn from "./components/SocialSignIn";

function App() {
  const [message, setMessage] = useState("");

  const handleLogin = ({ email }) => {
    setMessage(`Welcome back, ${email.split("@")[0]}!`);
  };

  return (
    <AuthLayout>
      <div className="space-y-6">
        <HeaderBrand />
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Sign in</h1>
          <p className="mt-1 text-sm text-gray-600">Enter your details to access your account</p>
        </div>
        <LoginForm onSubmit={handleLogin} />
        <SocialSignIn />
        {message && (
          <div className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700 border border-emerald-200">
            {message}
          </div>
        )}
        <div className="text-sm text-gray-600">
          By continuing you agree to our <a className="text-indigo-600 hover:underline" href="#">Terms</a> and <a className="text-indigo-600 hover:underline" href="#">Privacy Policy</a>.
        </div>
      </div>
    </AuthLayout>
  );
}

export default App;
