"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login with", { email, password });
    } else {
      console.log("Register with", { name, email, password });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-light-background dark:bg-dark-background">
      <div className="w-full max-w-md p-8 bg-light-border dark:bg-dark-border shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6 text-center">
          {isLogin ? "ورود به حساب کاربری" : "ثبت‌نام"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">
                نام کامل
              </label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="نام کامل خود را وارد کنید"
                className="w-full"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">
              ایمیل
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="ایمیل خود را وارد کنید"
              className="w-full"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">
              رمز عبور
            </label>
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="رمز عبور خود را وارد کنید"
              className="w-full"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 left-2 top-[35%] flex items-center text-gray-500 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary"
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-light-primary text-white rounded-lg hover:bg-light-secondary transition-all dark:bg-dark-primary dark:hover:bg-dark-secondary text-lg font-medium"
          >
            {isLogin ? "ورود" : "ثبت‌نام"}
          </button>
        </form>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 text-light-primary dark:text-dark-primary hover:underline text-sm text-center w-full"
        >
          {isLogin
            ? "حساب کاربری ندارید؟ ثبت‌نام کنید"
            : "حساب کاربری دارید؟ وارد شوید"}
        </button>
      </div>
    </div>
  );
}

export default AuthForm;
