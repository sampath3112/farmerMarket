import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    phone: 9999999999,
    email: 'admin@example.com',
    password: bcrypt.hashSync('Sampath@9088', 10),
    isAdmin: true,
    isFarmer: false,
  },
  // {
  //   name: 'John Doe',
  //   phone: 8888888888,
  //   email: 'john@example.com',
  //   password: bcrypt.hashSync('123456', 10),
  //   isFarmer: false,
  // },
  // {
  //   name: 'Jane Doe',
  //   phone: 7777777777,
  //   email: 'jane@example.com',
  //   password: bcrypt.hashSync('123456', 10),
  //   isFarmer: true,
  // },
]

export default users
