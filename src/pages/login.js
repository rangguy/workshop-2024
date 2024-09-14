import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/Button";
import { InputGroup } from "@/components/InputGroup";
import { useForm } from "react-hook-form";
import  { GetSignInErrorMessage, SignIn } from "@/configs/firebase"
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useRouter();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await SignIn(email, password);
      Swal.fire({
        title: "Berhasil Masuk!",
        text: `Selamat Datang ${email}`,
        icon: "success",
      });
      navigate.push("/produk");
    } catch (error) {
      const errorMessage = GetSignInErrorMessage(error.code);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${errorMessage}`
      });
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
            <form onSubmit={handleSubmit(onSubmit)}>
              {errors.login && (
                <div className="alert alert-error mb-4 mt-4">
                  <div>
                    <span>{errors.login}</span>
                  </div>
                </div>
              )}
              {/* Email Input */}
              <InputGroup
                id="email"
                className="form-control mt-4"
                label="Email"
                type="email"
                {...register("email", { required: "Email is required" })} // Register digunakan disini
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}

              {/* Password Input */}
              <InputGroup
                id="password"
                className="form-control mt-4"
                label="Password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })} // Register digunakan disini
              />
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
              <div className="form-control mt-6">
                <Button label="Login" type="submit" />
              </div>
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
