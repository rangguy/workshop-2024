import Head from "next/head";
import Link from "next/link";
import { InputGroup } from "@/components/InputGroup";
import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import { SignUp } from "@/services/firebase";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function Register() {
  const navigate = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await SignUp(email, password);
      Swal.fire({
        title: "Berhasil Mendaftar dan Masuk!",
        text: `Selamat Datang ${email}`,
        icon: "success",
      });
      navigate("/produk");
    } catch (error) {
      console.log(error);
    }
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
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email Input */}
              <InputGroup
                id="email"
                className="form-control mt-4"
                label="Email"
                type="email"
                {...register("email", { required: "Email is required" })}
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
                })}
              />
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}

              {/* Submit Button */}
              <div className="form-control mt-6">
                <Button label="Register" type="submit" />
              </div>
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
