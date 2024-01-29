import express from "express";
// import authorize from "../../helpers/authorize";
import userController from "./controller";

const userRoutes = express.Router();

// Private routes, only accessible by admin rights
// router.get('/me', authorize(['user']), userController.getUserWithToken);
userRoutes.get('/me', userController.getUserWithToken);
userRoutes.get('/byId', userController.getById);
userRoutes.get('/all', userController.getAll);

// Public routes
userRoutes.post('/authenticate', userController.authenticate);
userRoutes.post('/register', userController.register);

export default userRoutes;
