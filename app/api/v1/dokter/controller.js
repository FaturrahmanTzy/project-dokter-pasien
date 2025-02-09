import dokter  from './model.js';

const getDokter = (req, res) => {
    // const looping = dataPelanggan.forEach()
    // res.render(looping)
    res.render('dokter/dokter', { 
        judul : "Data Dokter" ,
        data : dokter
     })
}


export { getDokter }