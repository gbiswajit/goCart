const router =require("express").Router();

router.get("/usertest", (req, res)=>{
    res.send("User test is successful");
});

router.post("/userposttest", (req, res)=>{
    const username=req.body.username
    res.send("Your UserName is: "+username)
})

module.exports = router;