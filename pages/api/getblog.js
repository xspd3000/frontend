import * as fs from 'fs'

export default function handler(req, res) {
    fs.readFile(`data/${req.query.slug}.json`, "utf-8", (err,data)=>{
        res.status(200).json(data)
    })
}