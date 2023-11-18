import express from "express";
import"dotenv/config";
import router from './router/index.js';

const app = express();
const port = process.env.PORT || 3003;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);

app.listen(port, (err, res) => {
    console.log(`app listening on ${port}`);
});