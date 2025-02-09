
import express from "express"
import routerDokter from './app/api/v1/dokter/router.js'
import routerPasien from './app/api/v1/pasien/router.js'
import expressEjsLayouts from "express-ejs-layouts";
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express()
app.set("view engine", "ejs")
app.use(expressEjsLayouts)
app.set("layout", "./template/app")
app.use(express.static(path.join(__dirname ,"public")))


app.use("/dashboard", routerDokter)
app.use("/dashboard", routerPasien)


app.listen(3000, () => {
    console.log('Server is running...')
})