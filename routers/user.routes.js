// const express = require("express")
// const { registerUser, getUserProfile, registerOperator, verifyUser, getUserByOperator, loginUser, updateUser } = require("../controllers/user.controller")
// const { verify } = require("jsonwebtoken")

// const router = express.Router()


// router.post("/register", registerUser)

// router.post("/login", loginUser)

// // router.post("/operator/login", loginOperator)

// router.get("/profile", verifyUser, getUserProfile)

// router.post("/register-operator", registerOperator)

// router.get("/users/:userId", verifyUser, getUserByOperator)

// router.patch("/user/:id", verifyUser, updateUser)

// module.exports=router


const express= require("express")
const { registerUser, registerOperator, verifyUser, getUser, getUserByOperator, loginUser, updateUser, resolveAccount } = require("../controllers/user.controller")
const router = express.Router()


router.post("/register", registerUser)
router.post("/registerOperator", registerOperator)
router.get("/user", verifyUser, getUser)
router.get("/user/:userId", verifyUser, getUserByOperator)
router.post("/login", loginUser)
router.patch("/user/:id", verifyUser, updateUser)
router.get("/user/:accountNumber", verifyUser, resolveAccount)


module.exports=router