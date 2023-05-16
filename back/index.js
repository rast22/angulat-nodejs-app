const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const router = require('./routes/index');
const sequelize = require('./db');
const models = require('./models/models');
require('dotenv').config();


const app = express();
const port = 5500;

app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use('/api', router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync()    ;
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (e) {
    console.log(e)
  }
}
start()
