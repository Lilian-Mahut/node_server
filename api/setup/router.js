import express from "express";
// import eventRoutes from "../modules/event/routes";
import userRoutes from "../modules/user/routes";

const Router = (app) => {
    var apiRoutes = express.Router()

    // Home route
    app.get('/', function (req, res) {
        res.send('This Route is not yet defined.')
    });

    //User router
    app.use('/user', userRoutes);
    // app.use('/api/events', eventRoutes);
}

export default Router;
