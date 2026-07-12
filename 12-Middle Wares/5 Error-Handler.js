const express = require("express");
const app = express();

app.get("/product/:id", (req, res, next) => {
    const product = null;
    if (!product) {
        const err = new Error("Product Not Found");
        err.status = 404;
        return next(err);
    }
    res.send(product);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message);
});

app.listen(3000);