var express = require('express');
var router = express.Router();
var usuariosController = require("../controller/usuariosController");
const multer = require('multer');
  
/* GET users listing. */
router.get('/', usuariosController.register);

router.post("/", usuariosController.save);

var upload = multer({storage: storage});

router.post('/', upload.any() , (req,res,next)=>{
    let user = {
        avatar: req.files[0].filename,
    }
});

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "/public/images/avatars")
    },
    filename: (res, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
  });
  




module.exports = router;
