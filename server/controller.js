module.exports = 
{
    mongooses: allMongooses,
    newMongoose: NewMongoose,
    mongoose: Mongoose,
    makeMongoose: MakeMongoose,
    editShow: EditMongoose,
    editPost: EditPost,
    destroy: Destroy
}

const Mongooses = require("./model.js");

function allMongooses (req,res)
{
    console.log("hit root route");
    Mongooses.find({}, function(errs, data)
    {
        console.log(data);
        if(errs)
        {
            console.log(errs)
        }
        res.render("index", {data:data.reverse()});
    });
}

function MakeMongoose(req,res)
{
    console.log("make mongoose");
    console.log(req.body);
    Mongooses.create(req.body, (errs, results)=>
    {
        if(errs)
        {
            console.log("opps i did it again");
            console.log(errs);
            for (var key in errs.errors)
            {
                console.log(errs.errors[key].message);
                req.flash("registration", errs.errors[key].message);
            }
            res.redirect('/mongoose/new');
        }else{
            console.log(results);
            res.redirect("/");
        }
    });
}

function NewMongoose(req,res)
{
    console.log("new mongoose route");
    res.render("newMongoose");
}

function Mongoose(req,res)
{
    console.log("mongoose route");
    console.log(req.params.id);
    Mongooses.find({_id : req.params.id}, function(errs,data)
    {
        if (errs)
        {
            console.log(errs);
        }else{
            console.log(data);
        }
        res.render("mongoose", {data:data});
    });
}

function EditMongoose(req,res)
{
    console.log("Edit Mongoose route");
    console.log(req.params);
    Mongooses.find({_id: req.params.id}, function(errs, data)
    {
        console.log(req.params.id);
        console.log(data);
        
        if (errs)
        {
            console.log("opps I did it again");
            res.redirect("/");
        }else{
            res.render("editShow", {data:data});
        }
    });
}

function EditPost(req,res)
{
    console.log("edit post route");
    console.log(req.params);
    Mongooses.update({_id: req.params.id}, 
        {name: req.body.name,
        age: req.body.age}, 
        function(errs, data)
    {
        if (errs)
        {
            console.log("opps I did it again");
            res.redirect("/editShow");
        }else{
            res.redirect("/mongoose/" + req.params.id);
        }
    });
}

function Destroy(req,res)
{
    console.log("destroy route");
    console.log(req.params.id);
    Mongooses.deleteOne({_id: req.params.id}, function(errs,results)
    {
        if(errs)
        {
            console.log("opps I did it again");
            console.log(errs);
        }else{
            console.log(results);
        }
        res.redirect("/");
    });
}