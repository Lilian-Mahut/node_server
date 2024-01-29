import userServices from './service';

const userController = {
  getUserWithToken: (req, res) => {
    userServices
      .getUserWithToken(req)
      .then(result => res.status(result.status).send(result.payload));
  },
  getAll: (req, res) => {
    userServices.getAll(req, result => {
      // Will be executed once the service is finished
      result.success
        ? res.status(200).send(result)
        : res.status(404).send(result);
    });
  },
  getById: (req, res) => {
    userServices.getById(req.params.id, result => {
      // Will be executed once the service is finished
      result.success
        ? res.status(200).send(result)
        : res.status(404).send(result);
    });
  },
  authenticate: (req, res) => {
    userServices.authenticate(req.body).then(result => {
      res.cookie('token', result.payload.data.token, {
        maxAge: 900000,
        httpOnly: true,
        secure: false,
      });
      res.status(result.status).send(result.payload);
    });
  },
  register: (req, res) => {
    userServices
      .register(req.body)
      .then(result => res.status(result.status).send(result.payload));
  },
};

export default userController;
