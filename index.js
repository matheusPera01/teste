const express = require('expresss');
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send("ola");
});

app.listen(PORT, () => {
    console.log(`rodando na porta: ${PORT}`);
})

