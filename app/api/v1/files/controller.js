import { dokter, pasien } from './model.js';

const getData = (req, res) => {
    // const looping = dataPelanggan.forEach()
    // res.render(looping)
    res.render('template/index', { dokter })
}

export { getData }