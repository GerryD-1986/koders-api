const express = require('express');
const koderUseCase = require("../useCases/koders.usecase");
const auth = require("../middlewares/auth.middleware");
const router = express.Router();

//GET /koders
router.get("/", auth, async (request, response)=>{

      try{
        const koders = await koderUseCase.getAll();
        response.json({
            sucess: true,
            data:{koders},
        });
      }catch(error){
        response.status(error.status || 500);
        response.json({
            sucess:false,
            error: error.message,
        });
      }
});

//POST /koders
router.post("/", async (request,response)=>{
    try{
        const koderCreated = await koderUseCase.create(request.body);
        response.json({
            sucess: true,
            data: {koder: koderCreated},
        });

    }catch(error){
        response.status(error.status || 500);
        response.json({
            sucess:false,
            error: error.message,
        });
    }
});

//get /koders/:id
router.get("/:id",auth, async (request, response)=>{
    try{
     // const {id} =request.params;
     const id = request.params.id;
     const koder = await koderUseCase.getById(id);
     response.json({
        sucess: true,
        data: {koder},
     });
    }catch(error){
        response.status(error.status || 500);
        response.json({
            sucess:false,
            error: error.message,
        });  
    }
});

//delete /koders/:id
router.delete("/:id",auth, async (request,response)=>{
    try{
      const {id}=request.params;
      const koderDeleted = await koderUseCase.deleteById(id);
      response.json({
        sucess: true,
        data:{koder: koderDeleted},
      });
    }catch(error){
        response.status(error.status || 500);
        response.json({
            sucess:false,
            error: error.message,
        });  
    }
});

// patch /koders/:id
router.patch("/:id",auth, async (request, response)=>{
 try{
  const {id} = request.params;
  const koderUpdate = await koderUseCase.updateById(id, request.body);
  response.json({
    sucess: true,
    data: {koder: koderUpdate},
  });
 }catch(error){
    response.status(error.status || 500);
        response.json({
            sucess:false,
            error: error.message,
        });  
 }
});

module.exports = router;

