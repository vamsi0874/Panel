
import React, { useContext, useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../schemas";
import AuthContext from "../contexts/authContext";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { CardWrapper } from "./CardWrapper";

export const SignUp = () => {
  const { signup } = useContext(AuthContext);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    startTransition(async () => {
      console.log("Submitted values:", values);
      await signup(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <div>
      <CardWrapper
        headerLabel="Create an account"
        backButtonLabel="Already have an account"
        backButtonHref="http://localhost:5173/login"
      >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              {...form.register("name")}
              type="text"
              placeholder="Name"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              disabled={isPending}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...form.register("email")}
              type="email"
              placeholder="Email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              disabled={isPending}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              {...form.register("password")}
              type="password"
              placeholder="*****"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              disabled={isPending}
            />
          </div>

          <FormError message={error} />
          <FormSuccess message={success} />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400"
            disabled={isPending}
          >
            Register
          </button>
        </form>
      </CardWrapper>
    </div>
  );
};
