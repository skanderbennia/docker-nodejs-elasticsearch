const express    = require("express")
const routes     = express.Router()
const controller = require("../controllers")

routes.route("/").get(controller.getQuotes)
routes.route("/new").post(controller.addQuote)

module.exports = routes