module.exports.home = function(req,res){
    //return res.end('<h1> Express is up in running codeial!</h1>');
    return res.render('home',{
        title:"Home"
    });
}

// module.exports.text = function(req,res){
//     res.end('<p1> i m beautiful</p>');
// }