import express from 'express';

//import morgan from 'morgan';
//import cors from 'cors';
import routes from './capybaras.routes';
// Settings
const app = express();
app.set('port', process.env.PORT || 4000);

//app.use(cors());
//app.use(morgan('dev'));
app.use(express.json());

// Route
app.use('/', routes);

// Run server
app.listen(app.get('port'), () => {
  console.log(`Server running on: ${app.get('port')}`);
  console.log(`http://localhost:${app.get('port')}`);
});
