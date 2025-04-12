import UserService from "../services/UserService.js";

export default class UserController {
  constructor () {
    this.service = new UserService();
  }  

  register = async (req, res) => {
    try {
      const user = await this.service.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  login = async (req, res) => {
    try {
      const token = await this.service.login(req.body);
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  getUser = async (req, res) => {
    try {
      const user = await this.service.getUser(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  editUser = async (req, res) => {
    try {
      const user = await this.service.editUser(req.params.id, req.body, req.file);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  forgotPassword = async (req, res) => {
    try {
      const response = await this.service.forgotPassword(req.body.email);
      res.json(response);
    } catch (err) {
      res.status(err.status || 500).json({ message: err.message || 'Server error' });
    }
  };

  resetPassword = async (req, res) => {
    try {
      const response = await this.service.resetPassword(req.params.token, req.body.newPassword);
      res.json(response);
    } catch (err) {
      res.status(err.status || 500).json({ message: err.message || 'Server error' });
    }
  };

  verifyToken = async (req, res) => {
    try {
      const response = await this.service.verifyToken(req.headers.authorization?.split(' ')[1]);
      res.json(response);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}
