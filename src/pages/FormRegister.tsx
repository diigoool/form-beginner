import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  RegisterFormSchema,
  registerFormSchema,
} from "../utils/validationSchemas";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleRegister = (values: RegisterFormSchema) => {
    localStorage.setItem("user", JSON.stringify(values));
    toast.success("Berhasil Didaftarkan");
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Daftar Akun
        </h2>
        <form
          onSubmit={handleSubmit(handleRegister)}
          onError={() => {
            Object.values(errors).forEach((error) => {
              toast.error(error?.message || "Terjadi kesalahan pada form");
            });
          }}
        >
          {[
            { label: "Username", type: "text", name: "username" },
            { label: "Email", type: "email", name: "email" },
            {
              label: "Password",
              type: showPassword ? "text" : "password",
              name: "password",
            },
            {
              label: "Konfirmasi Password",
              type: showPassword ? "text" : "password",
              name: "confirmPassword",
            },
          ].map(({ label, type, name }) => (
            <div className="mb-4" key={name}>
              <label className="block text-gray-700">{label}</label>
              <input
                type={type}
                {...register(name as keyof RegisterFormSchema)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder={label}
              />
              {errors[name as keyof RegisterFormSchema] && (
                <p className="text-red-500 text-sm">
                  {errors[name as keyof RegisterFormSchema]?.message}
                </p>
              )}
            </div>
          ))}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            <label className="text-sm text-gray-700">Tampilkan Password</label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Daftar
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Masuk
          </Link>
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default FormRegister;
