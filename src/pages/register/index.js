import Head from "next/head";
import Input from "../components/Input";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [errors, setErrors] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    let validationErrors = {};

    if (!name) validationErrors.name = "Please enter a name";
    if (!email) validationErrors.email = "Please enter an email";
    if (!password) validationErrors.password = "Please enter a password";
    if (password !== confPassword)
      validationErrors.confPassword = "Passwords do not match";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    router.push("/login");
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen light:bg-gray-100">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Register</h2>
            <form onSubmit={handleSubmit}>
              <Input
                Form="form-control"
                title="Name"
                name="name"
                type="name"
                placeholder="Enter your name"
                autoComplete="name-new"
                className="input input-bordered"
                onChange={(event) => setName(event.target.value)}
                errorDiv={errors.name ? "text-red-500 mt-2 text-sm" : "d-none"}
                errorMsg={errors.name}
              />
              <Input
                Form="form-control mt-4"
                title="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email-new"
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
                autoComplete="password-new"
                className="input input-bordered"
                onChange={(event) => setPassword(event.target.value)}
                errorDiv={errors.password ? "text-red-500 mt-2 text-sm" : "d-none"}
                errorMsg={errors.password}
              />
              <Input
                Form="form-control mt-4"
                title="Confirmation Password"
                name="password"
                type="password"
                placeholder="Enter your confirmation password"
                autoComplete="conf-password-new"
                className="input input-bordered"
                onChange={(event) => setConfPassword(event.target.value)}
                errorDiv={errors.confPassword ? "text-red-500 mt-2 text-sm" : "d-none"}
                errorMsg={errors.confPassword}
              />
              <Input
                Form="form-control mt-6"
                type="submit"
                className="btn btn-primary"
                value="Register"
              />
              <div className="mt-4 text-center">
                <Link href="/login" className="text-sm text-primary">
                  Already have an account?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
