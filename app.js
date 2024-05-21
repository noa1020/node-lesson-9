const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authenticateUser = require('./middlewares/auth.middleware');
const userRouter = require('./routers/userRouter');
const categoryRouter = require('./routers/categoryRouter');
const productRouter = require('./routers/productRouter');
const connectToDatabase = require('./db');
const app = express();
const port = process.env.PORT;

// Middleware for parsing JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware for logging each request
app.use((req, res, next) => {
  console.log(`Call to the system at ${new Date().toLocaleString()} to ${req.url}`);
  next();
});

// Middleware for ensuring PUT/POST requests have a body
app.use((req, res, next) => {
  if ((req.method === 'PUT' || req.method === 'POST') && Object.keys(req.body).length === 0) {
    res.status(400).json({ error: "Request body is required for PUT and POST requests" });
  } else {
    next();
  }
});

// Middleware for authentication
app.use(authenticateUser);

// Routes
app.use('/user', userRouter);
app.use('/products', productRouter);
app.use('/categories', categoryRouter);

// Middleware for enabling CORS
app.use(cors());

// Middleware for handling errors
app.use((err, req, res, next) => {
  console.error(err); // Log the error to the console
  res.status(500).json({ error: "An error occurred on the server. Please try again later." });
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
});

// Middleware for handling 404 errors
app.get("*", (req, res) => {
  res.status(404).send('You have an error: Page not found');
});

// Connect to database
connectToDatabase();
