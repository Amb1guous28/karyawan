const fs = require('fs');
const path = require('path');

module.exports = async(req,res)=>{

    const karyawan = JSON.parse(
        fs.readFileSync(
            path.join(process.cwd(),'data','karyawan.json')
        )
    );

    const penilaian = JSON.parse(
        fs.readFileSync(
            path.join(process.cwd(),'data','penilaian.json')
        )
    );

    const hasil = [];


    karyawan.forEach(k => {

        const nilai = penilaian.filter(p =>
            p.nama === k.nama
        );

        let total = 0;

        nilai.forEach(n => {
            total += Number(n.nilai) * Number(n.bobot);
        });

        hasil.push({
            nama:k.nama,
            total:total.toFixed(2)
        });
    });


    hasil.sort((a,b)=>b.total-a.total);

    return res.status(200).json(hasil);
}