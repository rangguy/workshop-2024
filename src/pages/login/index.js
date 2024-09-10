import Head from "next/head";
import Input from "../components/Input";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    let validationErrors = {};

    if (!email) validationErrors.email = "Please enter an email";
    if (!password) validationErrors.password = "Please enter a password";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    if (email === "admin@123.com" && password === "admin") {
      router.push("/");
    } else {
      setErrors({ login: "Invalid email or password" });
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen light:bg-gray-100">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <form onSubmit={handleSubmit}>
              {errors.login && (
                <div className="alert alert-error mb-4 mt-4">
                  <div>
                    <span>{errors.login}</span>
                  </div>
                </div>
              )}
              <Input
                Form="form-control"
                title="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                onChange={(event) => setEmail(event.target.value)}
                errorDiv={errors.email ? "text-red-500 mt-2 text-sm" : "d-none"}
                errorMsg={errors.email}
              />
              <Input
                Form="form-control mt-4"
                title="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                onChange={(event) => setPassword(event.target.value)}
                errorDiv={
                  errors.password ? "text-red-500 mt-2 text-sm" : "d-none"
                }
                errorMsg={errors.password}
              />
              <Input
                Form="form-control mt-6"
                type="submit"
                className="btn btn-primary"
                value="Login"
              />
              <div className="mt-4 text-center">
                <Link href="/register" className="text-sm text-primary">
                  Doesn't have an account?
                </Link>
              </div>
              <div className="mt-4 text-center">
                <a href="/#!" className="text-sm text-primary">
                  Forgot password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
