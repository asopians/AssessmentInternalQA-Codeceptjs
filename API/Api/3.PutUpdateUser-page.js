const supertest = require('supertest');
const request = supertest(process.env.Base_URL);
const faker = require("faker");

    const UpdateUserNormal = (args) => {
        return request
           .put(args.path || '/public/v2/users')
           .set(args.PayloadHeader)
           .send(args.PayloadBody)
    }

    const UpdateUserEmailKosong = (args) => {
        return request
           .put(args.path || '/public/v2/users')
           .set(args.PayloadHeader)
           .send(args.PayloadBody)
    }

    const UpdateUserGenderlKosong = (args) => {
        return request
           .put(args.path || '/public/v2/users')
           .set(args.PayloadHeader)
           .send(args.PayloadBody)
    }

    const MethodeSelainPut = (args) => {
        return request
           .post(args.path || '/public/v2/users')
           .set(args.PayloadHeader)
           .send(args.PayloadBody)
    }

    
module.exports = {
    UpdateUserNormal,
    UpdateUserEmailKosong,
    UpdateUserGenderlKosong,
    MethodeSelainPut
}