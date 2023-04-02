import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyparser from "body-parser";
import path from 'path';
import router from './routes/router.js'

import connection from './database/connection.js';

dotenv.config( { path : '.env'} )

!async function () {
    const app = express();
    const PORT = process.env.PORT || 8080

    const __dirname = path.resolve();

    app.use(morgan('tiny'));
    app.use(bodyparser.urlencoded({ extended : true}))

    await connection();


    app.set("view engine", "ejs")

    app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
    app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
    app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

    app.use('/', router)

    app.listen(PORT, ()=> { console.log(`Server is running on ${PORT}`)});
}()