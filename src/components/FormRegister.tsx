import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Card from "./Card"; // Import Card component

const registerFormSchema = z
  .object({
    username: z.string().min(3, { message: "Username Tidak Valid" }),
    password: z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/),
    email: z.string().email({ message: "Email Tidak Valid" }),
    confirmPassword: z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/),
    age: z.coerce.number().min(18).max(50),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password Dont Match",
    path: ["confirmPassword"],
  });

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState<RegisterFormSchema[]>([]); // State to store users

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleRegister = (values: RegisterFormSchema) => {
    setUsers((prevUsers) => [...prevUsers, values]); // Add new user to the state
    alert("Berhasil Didaftarkan");
  };

  return (
    <div className="bg-gray-100 h-screen flex">
      {/* Left Side: Display Cards */}
      <div className="w-1/2 bg-white p-8 overflow-y-auto">
        <h3 className="text-2xl font-semibold mb-6">Pengguna Terdaftar:</h3>
        <div className="space-y-4">
          {users.map((user, index) => (
            <Card
              key={index}
              username={user.username}
              email={user.email}
              age={user.age}
            />
          ))}
        </div>
      </div>

      {/* Right Side: Form Register */}
      <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Form Pendaftaran Akun
        </h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          {/* Username Field */}
          <div className="mb-4">
            <span className="text-red-500 italic transition">
              {errors.username?.message}
            </span>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("username")}
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <span className="text-red-500 italic transition">
              {errors.email?.message}
            </span>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("email")}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <span className="text-red-500 italic transition">
              {errors.password?.message}
            </span>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("password")}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <span className="text-red-500 italic transition">
              {errors.confirmPassword?.message}
            </span>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Konfirmasi Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("confirmPassword")}
            />
            <div>
              <input
                type="checkbox"
                id="showPassword"
                className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-3"
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <label htmlFor="showPassword" className="text-sm text-gray-700">
                Show Password
              </label>
            </div>
          </div>

          {/* Age Field */}
          <div className="mb-6">
            <span className="text-red-500 italic transition">
              {errors.age?.message}
            </span>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("age")}
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
