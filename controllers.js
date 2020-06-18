var dbHandler = require('./dbHandlers');

var showHomePage = (req,res)=>{
    res.status(200).send("Welcome to our home page.");
}

var signup = (req,res)=>{
    console.log("req is ",req);
    var username = req.body.username;
    var password = req.body.password;
    var name = req.body.name;
    var data = {
        username,
        password,
        name
    };
    var tableName = "signupInfo";
    dbHandler.insert(data,tableName);
    return res.status(200).send("Sign up successfull.");
}

var sendMessage = (req,res)=>{
    return res.status(200).send("Message sent.");
}

var sessionValidator = (req,res,next)=>{

    // var token = req.headers.token;
    // var username = req.headers.username;

    // var tokenDetails = dbHandler.findToken(username);
    // var correctToken = tokenDetails.token;
    // var expiryTime = tokenDetails.expiryTime;
    // var currentTime = new Date();
    // if(expiryTime<currentTime)
    //     return res.send("token expired please login again");
    // else{
    //     if(token == correctToken)
    //         next();
    //     else    
    //         return res.send("Invalid token");
    // }

    next();
}

var login = (req,res)=>{
    var username = req.body.username;
    var password = req.body.password;
    var actualPassword = dbHandler.read(username);
    if(actualPassword == password){
        //var newToken = generateToken();
        return res.status(200).send("Login successfull.");
    }else{
        return res.status(200).send("Credentials incorrect!");
    }
}

module.exports = {showHomePage,signup,login,sessionValidator,sendMessage};
