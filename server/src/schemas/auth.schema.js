import { z } from 'zod'

export const registerSchema = z.object({
  username: z.string({
    required_error: 'Se requiere nombre de usuario'
  }),
  email: z.string({
    required_error: 'Se requiere Email'
  }).email({
    message: 'Correo electronico es invalido'
  }),
  password: z.string({
    required_error: 'Se requiere contraseña'
  }).min(6,{
    message: "La contraseña debe tener al menos 6 caracteress"
  })
})

export const loginSchema = z.object({
  username: z.string({
    // required_error: 'Username is requiered'
  }).optional(),
  email: z.string({
    required_error: 'Se requiere Correo electronico'
  }).email({
    message: 'Correo electronico  es invalido'
  }),
  password: z.string({
    required_error: 'Se requiere contraseña'
  }).min(6,{
    message: "La contraseña debe tener al menos 6 caracteres"
  })

})