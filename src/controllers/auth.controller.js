import User from '../models/user.model.js'

export const register = async (req, res) => {
  const { username, password } = req.body

  try {
    const newUser = new User({
      username,
      password
    })

    await newUser.save()
  } catch (error) {
    console.log(error)
  }
  res.send('Registrado')
}
export const login = (re, res) => { res.send('login!!') }