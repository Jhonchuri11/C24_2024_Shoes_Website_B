import morgan from 'morgan';
const express = require('express')
const cors = require('cors')

// Routes of Product
import ProdudctosRoutes from './routes/Productos.routes';

const app = express()



// Settings
app.set('port', 5000)

// Middlewares
app.use(cors())

app.use(morgan('dev'));

// Routes
app.use("/api/productos", ProdudctosRoutes);

export default app;