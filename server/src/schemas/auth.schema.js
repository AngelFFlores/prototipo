import { z } from 'zod'

export const registerSchema = z.object({
  username: z.string({
    required_error: 'Username is requiered'
  }),
  email: z.string({

  }).email({
    message: 'Invalid email'
  }).optional(),
  password: z.string({
    required_error: 'Password is requiered'
  }).min(6,{
    message: "password must be at least 6 characters"
  })
})

export const loginSchema = z.object({
  username: z.string({
    required_error: 'Username is requiered'
  }),
  email: z.string({

  }).email({
    message: 'Invalid email'
  }).optional(),
  password: z.string({
    required_error: 'Password is requiered'
  }).min(6,{
    message: "password must be at least 6 characters"
  })

})