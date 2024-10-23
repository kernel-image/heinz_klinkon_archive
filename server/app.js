import express from 'express'
import cors from 'cors'
import { router } from './routes/route.js'

const app = express()

app.use(cors()) //todo: provide approved domain options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use((err, req, res, next) => {
    console.log("***************************ERROR*******************************")
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});
const port = 4000
app.listen(port, () => {
    console.log(`heinz db interface listening on port ${port}`)
})