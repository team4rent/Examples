const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling GET request to /product"
    });
});

router.post("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling POST request to /product"
    });
});

router.post("/:id", (req, res, next) => {
    const id = req.params.id;

    res.status("200").json({
        message: "You passed ID",
        id: id

    })
});

router.put("/:id", (req, res, next) => {
    const id = req.params.id;
    
    res.status("200").json({
        message: "You updated ID",
        id: id 
    })     
});

router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    
    res.status("200").json({
        message: "You deleted ID",
        id: id
    })     
});

module.exports = router;