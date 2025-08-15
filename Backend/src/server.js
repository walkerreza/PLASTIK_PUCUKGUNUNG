//import
require ( 'dotenv' ).config();
const express = require ( 'express' );
const cors = require ( 'cors' );
const app = express();
// middleware untuk parsing json
app.use(cors());
app.use(express.json());

//app route
app.get('/', (req, res) => {
    res.send("Hello World!");
});
// health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'backend', time: new Date().toISOString() });
});

//port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
