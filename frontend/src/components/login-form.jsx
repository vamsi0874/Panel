// import React, { useContext, useState, useTransition } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import {useNavigate} from 'react-router-dom'
// import { Link } from "react-router-dom"; // Correct import
// import { LoginSchema } from "../schemas/";
// import { useForm, Controller } from "react-hook-form"; // Ensure useForm is imported correctly
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "./ui/form";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { FormError } from "./form-error";
// import { FormSuccess } from "./form-success";
// import AuthContext from "../contexts/authContext";

// export const LoginForm = () => {
//   const [isPending, startTransition] = useTransition();
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const { login , user} = useContext(AuthContext);
//   const navigate = useNavigate()
//   const form = useForm({
//     resolver: zodResolver(LoginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit =  (values) => {
//     startTransition(async () => {
      
//         await login(values).then((data) => {
//             console.log('data',data)
//           setError(data?.error);
//           setSuccess(data?.success);
//           if(data?.success){
//             navigate('/')
//           }
//         });
//       });
//   };

//   return (
//     <div className="bg-gray-50 p-2 rounded-lg shadow-md max-w-md mx-auto">
//       <Form {...form}>
//         {/* Ensure the form handleSubmit is correctly used */}
//         <form onSubmit={form.handleSubmit(onSubmit)}>
//           <div className="">
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       placeholder="Enter your email"
//                       type="email"
//                       className="border-gray-300"
//                       disabled={isPending}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       placeholder="••••••••"
//                       type="password"
//                       className="border-gray-300"
//                       disabled={isPending}
//                     />
//                   </FormControl>
//                   <div className="text-right mt-2">
//                     <Button variant="link" asChild>
//                       <Link to="/auth/reset" className="text-blue-600 hover:underline">
//                         Forgot password?
//                       </Link>
//                     </Button>
//                   </div>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <FormError message={error} />
//           <FormSuccess message={success} />

//           <div className="mt-6">
//             <Button
//               type="submit"
//               className="w-full hover:bg-blue-700"
//               disabled={isPending}
//             >
//               Login
//             </Button>
//           </div>
//         </form>
//       </Form>
//     </div>
//   );
// };

import React, { useContext, useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { LoginSchema } from "../schemas/";
import { useForm } from "react-hook-form";
import AuthContext from "../contexts/authContext";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    startTransition(async () => {
      await login(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
        if (data?.success) {
          navigate("/");
        }
      });
    });
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-md mx-auto">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...form.register("email")}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            disabled={isPending}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            {...form.register("password")}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            disabled={isPending}
          />
          <div className="text-right mt-2">
            <Link to="/auth/reset" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>

        <FormError message={error} />
        <FormSuccess message={success} />

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400"
            disabled={isPending}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

