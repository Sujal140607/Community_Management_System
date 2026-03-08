const app = require("./src/app")
require("dotenv").config()
const connectedToDataBase = require("./src/config/database")

connectedToDataBase()

app.listen(3000, () => {
  console.log("server  Is running on the port 3000")
})