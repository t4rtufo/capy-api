import express from 'express';
import capybaras from './capybaras.json';
const Router = express.Router();

//GET JSON file
Router.get('/', async (req, res) => {
  try {
    res.json(capybaras);
  } catch (error: any) {
    res.status(500).send(error?.message);
  }
});

export default Router;
