import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';

// Config
const APP_PORT = 4000;

function loggingMiddleware(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  console.log('ip:', req.ip);
  next();
}

var root = {
  ip: function (args, request) {
    return request.ip;
  }
};

var app = Express();
app.use(loggingMiddleware);
app.use('/graphql', GraphHTTP({
  schema: Schema,
  rootValue: root,
  pretty: true,
  graphiql: true,
}));
app.listen(APP_PORT);
console.log('Running a GraphQL API server at localhost:4000/graphql');
