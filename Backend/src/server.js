//import
const express = require ( 'express' );
const app = express();
// middleware untuk parsing json
app.use(express.json());

//app route
app.get('/', (req, res) => {
    res.send("Hello World!");
});

//port
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
