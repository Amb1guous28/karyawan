const fs = require('fs');
const path = require('path');

module.exports = async(req,res)=>{

    const filePath = path.join(process.cwd(),'data','users.json');

    const users = JSON.parse(fs.readFileSync(filePath));

    if(req.method === 'POST'){

        const body = req.body;

        const user = users.find(u =>
            u.username === body.username &&
            u.password === body.password
        );

        if(user){
            return res.status(200).json({
                success:true
            });
        }

        return res.status(401).json({
            success:false,
            message:'Login gagal'
        });
    }
}