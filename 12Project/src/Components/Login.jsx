import React, { useState } from "react";
import { Login as authLogin } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService, { AuthService } from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const { register, handleSubmit } = useForm();
  const login = async (data) => {
    console.log(data, "Login component ");
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        console.log(userData.$id, "userData");
        if (userData.$id) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center ">
      <div
        className="mx-auto w-full mx-w-lg bg-gray-100 rounded-xl p-10 border border-black/10"
        style={{ width: "auto" }}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" height="100%" />
          </span>
        </div>
        <h2 className=" text-center text-2xl font-bold leading-tight">
          Sign in to Your Account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account ?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            signup
          </Link>
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              type="email"
              label="Email :-"
              placeholder="Enter Your Email "
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) => {
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                      value
                    ) || "Email address must be valid Address";
                  },
                },
              })}
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter Password "
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              signin
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
