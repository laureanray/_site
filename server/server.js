const express = require('express');
const path = require('path');
let app = express();
let publicPath = path.join(__dirname, '../public');
let https_path = path.join(__dirname, '../.well-known');
let port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(express.static(https_path));



app.listen(port, () => {
    console.log(`Server is up and running in port ${port}`);
})