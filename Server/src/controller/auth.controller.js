const adminModel = require("../models/admin.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

async function registerController(req, res) {
  const {email, adminname, password } = req.body

  const isAdminAlreadyExists = await adminModel.findOne({
    $or:[
      {email},
      {adminname}
    ]
  })

  if(isAdminAlreadyExists){
    return res.status(409).json({
      message: "Admin Already Exists: " + (isAdminAlreadyExists.email == email ? "Email already exists" : "adminname already exists")
    })
  }

  const hash = await bcrypt.hash(password, 10)

  const admin = await adminModel.create({
    adminname,
    email,
    password: hash
  })

  /**
   * - admin's data
   * - data should be unique to the admin
   */
  const token = jwt.sign({
    id: admin._id,
    adminname: admin.adminname
  },
    process.env.JWT_SECRET,
    {expiresIn: "1d"}
  )

  res.cookie("token", token)
  res.status(201).json({
    message: "Admin Registered Successfully",
    admin: {
      email: admin.email,
      adminname: admin.adminname,
    }
  })

}

async function loginController(req, res) {
  const { adminname, email, password} = req.body

  const admin = await adminModel.findOne({
    $or:[
      {
        email: email
      },
      {
        adminname: adminname
      }
    ]
  })

  if(!admin){
    return res.status(404).json({
      message: "admin Not Found"
    })
  }

  const isPasswordValid = await bcrypt.compare(password, admin.password)
  
  if(!isPasswordValid){
    return res.status(401).json({
      message: "Invalid Password"
    })
  }

  const token = jwt.sign(
    { id: admin._id, adminname: admin.adminname },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  )

  res.cookie("token", token)

  res.status(200).json({
    message: "Admin Logged In Successfully",
    admin:{
      adminname: admin.adminname,
      email: admin.email,
      bio: admin.bio,
      profileImage: admin.profileImage
    }
  })
}

module.exports = {
  registerController,
  loginController
}