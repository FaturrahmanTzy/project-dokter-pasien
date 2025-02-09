import pasien  from './model.js';

const getPasien = (req, res) => {
    // const looping = dataPelanggan.forEach()
    // res.render(looping)
    res.render('pasien/pasien', { 
        judul : "Data Pasien" ,
        data : pasien
     })
}


export { getPasien }