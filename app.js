// INI SERVER
import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
//konfigurasi pertama untuk template yang ada di dalam directory public
import path from 'path';
import { fileURLToPath } from 'url';
import router from './app/api/v1/files/router.js';

//cek path directory saat ini 
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
app.set('view engine', 'ejs')
app.use(expressEjsLayouts)
app.set('layout', './template/index')
//agar file css dan js terbaca maka gunakan express.static()
app.use(express.static(path.join(__dirname, '/public/admin')))

//default express js tidak bisa membaca langsung file css dan library js
//oleh karena itu perlu dilakukan terlebih dahulu konfigurasi
// agar file css dan js yang ada didalam folder publicdapat terbaca di semua file
//yang ada didalam projek

app.use('/dashboard', router)

app.listen(3000, () => {
    console.log('Server is running...')
})