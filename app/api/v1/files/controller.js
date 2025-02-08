import { dokter, pasien } from './model.js';

const getDokter = (req, res) => {
    // const looping = dataPelanggan.forEach()
    // res.render(looping)
    res.render('orang/dokter', { dokter, pasien })
}

const getPasien = (req, res) => {
    // const looping = dataPelanggan.forEach()
    // res.render(looping)
    res.render('orang/pasien', { dokter, pasien })
}

export { getDokter, getPasien }