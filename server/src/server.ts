import express from 'express';
import rootRoute from './routers/snow';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use (
    cors({
        origin: 'http://localhost:3000',
    })
)

rootRoute(app);
app.listen(8080, () => {
    console.log('Server running on port 8080');
})
 