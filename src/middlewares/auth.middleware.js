const createError = require("http-errors");
const koderUseCase = require("../useCases/koders.usecase");
const jwt = require("../lib/jwt");

async function auth(request, response, next){
    try{
        const token = request.headers.authorization;

        if(!token){
            throw createHttpError(401, "JWT is required");
        
        }

        jwt.verify(token);

        const user =  await koderUseCase.getById(payload.id);

        request.user = user;

        next();

    }catch(error){
        response.status(401);
        response.json({
            sucess:false,
            error: error.message,
        });

    }
}

module.exports = auth;