import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { REGISTRATION_INPUT } from "@/configs/form";
import { InputGroup } from "@/components/InputGroup";
import { Button } from "@/components/Button";

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
              {REGISTRATION_INPUT.map((input) => (
                <InputGroup key={input.id} {...input} />
              ))}
              <div className="form-control mt-6">
                <Button label="Register" />
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
