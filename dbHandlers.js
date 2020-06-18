var insert = (data,tableName)=>{
    console.log("Insert into table: ",tableName," successfull. \nData is ",data);
    //perform db operations when you have one lol!
}

var update = (data,tableName)=>{
    console.log("Update successfull. data is ",data);
}

var remove = (data,tableName)=>{
    console.log("Remove successfull. data is ",data);
}

var read = (username)=>{
    //searches db for password corresponding to this username
    return "monu";
}

module.exports = {insert,update,remove,read};