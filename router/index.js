const express = require("express")
const router = express.Router()
const messagesRoute = require("./routes/messages")
const userRoute = require("./routes/users")

router.use("/messages", messagesRoute)
router.use("/users", userRoute)

module.exports =router
