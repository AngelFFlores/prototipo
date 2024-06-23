import { useForm } from "react-hook-form"
import usercircle from "../assets/user_circle.svg"
import { useAuth } from "../context/AuthContext.jsx"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

export const RegisterPage = (() => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signup, isAuthenticated, errors: RegisterErros } = useAuth()
  const navigation = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigation('/')
    }
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async (values) => {
    signup(values)
  })

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full mx-4 sm:mx-0">
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-gray-200 rounded-full p-3">
            <img src={usercircle} alt="icono de usaurio" />
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">Crea una cuenta nueva</h2>
        <p className="text-gray-600 text-center mb-6">Introduce tus datos para registrarte.</p>
        {
          RegisterErros.map((error, i) => (
            <div className="font-medium py-1 px-2 rounded-md text-red-700 bg-red-100 border border-red-300 my-2" key={i}>
              {error}
            </div>
          ))
        }
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Nombre de usuario *</label>
            <input className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required type="text" {...register("username", { required: true })} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Correo electronico *</label>
            <input className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required type="email" {...register("email", { required: true })} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Contraseña *</label>
            <input className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required type="password" {...register("password", { required: true })} />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Registrar
          </button>
        </form>
        <p className="text-gray-600 text-center mt-6">¿Ya tienes una cuenta?
          <Link className="text-blue-600 transition duration-200 hover:underline dark:text-blue-400" to="/login"> Login</Link>
        </p>
      </div>
    </div>
  )
})