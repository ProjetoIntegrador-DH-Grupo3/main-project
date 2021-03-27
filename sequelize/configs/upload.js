const multer = require("multer");
const path = require("path");

//configuração multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("public", "posts"));
  },
  filename: function (req, file, cb) {
    // data atual + nome do arquivo
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
