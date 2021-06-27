import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      min:[999999999,'Enter 10 digit phone number'],
      max:9999999999,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      match:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      minlength:[5,'Password length should be of minimum 5 characters'],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    isFarmer: {
      type: Boolean,
      required: false
    },
  },
  {
    timestamps: true,
  }
)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User