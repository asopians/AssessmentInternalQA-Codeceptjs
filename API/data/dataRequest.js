const faker = require("faker");


function headerRequest(args){
    data = {
         "Authorization": args.authorization || "Bearer "+process.env.Token,
            }
        return data;
    }

    function CreateUser(args){
        data = {
            "name": args.createname || faker.name.findName(),
            "gender": args.creategender || faker.random.arrayElement(["male", "female"]),
            "email": args.createemail || faker.internet.email(),
            "status": "active"
            }    
            return data;
    }
    
        function UpdateUser(args){
            data = {
                "name": args.nameupdate || faker.name.findName(),
                "gender": args.genderupdate || faker.random.arrayElement(["male", "female"]),
                "email": args.emailupdate || faker.internet.email(),
                "status": "active"
            }    
            return data;
    }

    function DetailUser(args){
        data = {}    
        return data;
 }

module.exports = {
    headerRequest,
    DetailUser,
    CreateUser,
    UpdateUser,
  
}