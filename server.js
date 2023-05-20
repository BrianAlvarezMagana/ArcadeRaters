require('dotenv').config();
const express = require('express');
const sequelize = require('./config/connection');

const PORT = process.env.DB_PORT;

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false }).then (() => {
    app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));
});
