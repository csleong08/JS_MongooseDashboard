const {mongooses, makeMongoose, mongoose, newMongoose, editShow, editPost, destroy} = require("./controller.js");

function router(app)
{
    app.get("/", mongooses);
    app.get("/mongoose/new", newMongoose);
    app.get("/mongoose/:id", mongoose);
    app.post("/makeMongoose", makeMongoose);
    app.get("/edit/:id", editShow);
    app.post("/mongoose/:id", editPost);
    app.post("/mongoose/destroy/:id", destroy);
}

module.exports = router;