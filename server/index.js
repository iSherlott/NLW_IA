import cors from "cors"
import express from "express"

import { download } from "./download.js"

const app = express()
const PORT = 3333

app.use(cors())
app.get("/summary/:id", (req, res) => {
  const { id } = req.params

  download(id)

  res.send("ID do vídeo: " + id)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
