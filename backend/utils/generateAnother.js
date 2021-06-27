import jwt from 'jsonwebtoken'

const generateToken2 = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET2, {
    expiresIn: '30d',
  })
}

export default generateToken2
