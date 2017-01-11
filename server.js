let express = require('express')
let app = express();
let router = express.Router();  
let port = process.env.PORT || 8081;    

app.use('/employee',router);
app.listen(port);

router.get('/name/:name', function (req, res) {
  res.send(req.params);
})