const supertest = require('supertest');
const request = supertest(process.env.Base_URL);
const faker = require("faker");

    const CreateUserNormal = (args) => {
        return request
           .post(args.path || '/public/v2/users')
           .set(args.PayloadHeader)
           .send(args.PayloadBody)
    }


    
module.exports = {
    CreateUserNormal,
}