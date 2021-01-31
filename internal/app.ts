import { ValidateError } from '@tsoa/runtime';
import bodyParser from 'body-parser';
import express, {
  NextFunction,
  Request as ExRequest,
  Response as ExResponse,
} from 'express';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from '../dist/routes';
var cors = require('cors');

export const app = express();

// Enable CORs
app.use(cors());

// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Setup Swagger
app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUi.generateHTML(await import('../dist/swagger.json')));
});

RegisterRoutes(app);

// Global 404
app.use(function notFoundHandler(_req, res: ExResponse) {
  res.status(404).send({
    message: 'Not Found',
  });
});

// Global Error handler
app.use(function errorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: 'Validation Failed',
      details: err?.fields,
    });
  }

  if (err instanceof Error) {
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }

  next();
});
