const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(),'data','karyawan.json');

module.exports = async(req,res)=>{

    const data = JSON.parse(
        fs.readFileSync(filePath)
    );


    if(req.method === 'GET'){
        return res.status(200).json(data);
    }


    if(req.method === 'POST'){

        const body = req.body;

        data.push(body);

        fs.writeFileSync(
            filePath,
            JSON.stringify(data,null,2)
        );

        return res.status(201).json({
            message:'Karyawan berhasil ditambahkan'
        });
    }
}