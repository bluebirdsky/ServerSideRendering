require('zone.js/dist/zone-node');

console.log('starting universal server...');
import * as express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';

const {
  ServerAppModuleNgFactory
} = require('./dist-server/main.bundle');

const app = express();

app.engine(
  'html',
  ngExpressEngine({
    bootstrap: ServerAppModuleNgFactory,
  })
);

app.set('view engine', 'html');
app.set('views', __dirname);

app.use(express.static(__dirname + '/assets', { index: false }));
app.use(express.static(__dirname + '/dist', { index: false }));

app.get('/*', (req, res) => {
  console.log('GET: ${req.originalUrl}');
  res.render('./dist/index', {            /* dynamic server-side rendering */
  // res.render('./src/index', {            /* static server-side rendering */
    req: req,
    res: res
  });
  console.log('GET: ${req.originalUrl}');
});
console.log('starting on port: ' + process.env.PORT || 8080);
app.listen(process.env.PORT || 8080, () => {});
