const model = require('../models/model');

async function showAllUsers(req, res, next){
    try{
        const users = await model.getAllUsers();

        return res.render('users.ejs', {
            users: users,
        });

    }catch(err){
        next(err);
    }
}

async function showMainPage(req, res, next){
    try{
        return res.render('main.ejs');
    }catch(err){
        next(err);
    }
}

async function showAboutPage(req, res, next){
    try{
        return res.render('about.ejs');
    }catch(err){
        next(err);
    }
}

// async function showAllUsers(req, res, next){
//     try{

//     }catch(err){
//          next(err);
//     }
// }

module.exports = {
    showMainPage,
    showAboutPage,
    showAllUsers,

}