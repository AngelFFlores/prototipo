import { useForm } from "react-hook-form"
import usercircle from "../assets/user_circle.svg"

export const RegisterPage = (() => {
  const { register, handleSubmit } = useForm()
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-gray-200 rounded-full p-3">
            <img src={usercircle} alt="icono de usaurio" />
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">Crea una cuenta nueva</h2>
        <p className="text-gray-600 text-center mb-6">Introduce tus datos para registrarte..</p>

        <form onSubmit={handleSubmit((values) => { console.log(values) })}>
          <div class="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Nombre de usuario *</label>
            <input className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required type="text" {...register("username", { required: true })} />
          </div>
          <div class="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Correo electornico *</label>
            <input className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required type="email" {...register("email", { required: true })} />
          </div>
          <div class="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Contraseña *</label>
            <input className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required type="password" {...register("password", { required: true })} />
            <p class="text-gray-600 text-xs mt-1">Debe contener mínimo 6 caracteres.</p>
          </div>

          <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Registrar
          </button>
        </form>
      </div>
    </div>
  )
})