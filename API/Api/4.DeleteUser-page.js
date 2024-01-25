const supertest = require('supertest');
const request = supertest(process.env.Base_URL);
const faker = require("faker");

    const DeleteNormal = (args) => {
        return request
           .delete(args.path || '/public/v2/users')
           .set(args.PayloadHeader)
           .send(args.PayloadBody)
    }

    const DeleteUserMethodeSelainDelete = (args) => {
        return request
           .put(args.path || '/public/v2/users')
           .set(args.PayloadHeader)
           .send(args.PayloadBody)
    }
    
module.exports = {
    DeleteNormal,
    DeleteUserMethodeSelainDelete
}