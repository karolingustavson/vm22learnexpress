const express = require('express');
const router = express.Router();
router.get('/register',async (req, res) =>{
    res.render('auth/register.njk')
});
router.post('/register',async (req, res) =>{
    let user = await User.findOne({
    where: {
            email:req.body.email
    }
    });
    if(req.body.pasword !== req.body.password_confirm || user){
        res.redirect('/register');
    } else{
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.redirect('/')
    }
});
module.exports = router;