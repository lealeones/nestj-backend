
export const renameFile = (req , file : Express.Multer.File, callback) => { 
const name = file.filename




callback(null,`${name}-upload.pdf`)
}