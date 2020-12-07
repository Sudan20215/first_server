const router = require("express").Router();
router.get("/",(req,res)=>{
    console.log("this route has been hit");
    res.json({
        msg: "hello",
        status: 200,
        data: { user: "Sudan", title: "student" },
    });
   

});
router.get("/issudan",(req,res)=>{
    console.log("this route has been hit");
    res.json({
        msg: "hello",
        status: 200,
        data: { user: true, title: "mr" },
    });
    console.log("we have been hit");
    res.json({msg:"success"})

});
router.put("/puteg",(req,res)=>{
    console.log(req.body);
    const id=req.body.id
    res.json({
        msg: "hello1",
        status: 200,
        data:{id:id},
    });
    

});
router.post("/posteg",(req,res)=>{
    console.log(req.query);
   
    res.json(req.query);
    

});
router.patch("/parameter/:hash",(req,res)=>{
    console.log(req.params);
    res.json({msg:"Hey there"});
})
module.exports = router;
