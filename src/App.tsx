import "./App.css";
import { useForm } from "react-hook-form";

type RegisterFormSchema = {
  username: string;
  password: string;
  email: string;
  confirmPassword: string;
};

function App() {
  const { register, handleSubmit } = useForm<RegisterFormSchema>();

  const handleRegister = (value: RegisterFormSchema) => {
    console.log(value.confirmPassword);
  };

  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-6">
            Form Pendaftaran Akun
          </h2>
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="mb-4">
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
                required
              />
            </div>

            <div className="mb-4">
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
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                {...register("password")}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Konfirmasi Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                {...register("confirmPassword")}
                required
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Daftar
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm">
              Sudah punya akun?{" "}
              <a href="login.html" className="text-indigo-500 hover:underline">
                Masuk di sini
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
