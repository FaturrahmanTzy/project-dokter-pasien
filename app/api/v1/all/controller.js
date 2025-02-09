import {dokter, pasien}  from './model.js';

const getAll = (req, res) => {
    // const looping = dataPelanggan.forEach()
    // res.render(looping)
    res.render('dokter/dokter', { 
        judul : "Data Dokter" ,
        data : dokter
    });

    res.render('pasien/pasien', { 
        judul : "Data Pasien" ,
        data : pasien
    })
}


export { getAll }