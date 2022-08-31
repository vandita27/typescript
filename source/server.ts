import http, { METHODS, request } from 'http';
import express, { response } from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import { type } from 'os';
import exampleRoutes from './routes/example';
const NAMESPACE = 'Server';
const router = express();

/** logging the request */
router.use((req,res,next) => {
    logging.info(NAMESPACE,` METHOD -[${req.method}], URL - [${req.url}, IP - [${req.socket.remoteAddress}]`);

    res.on('finish', () =>{
        logging.info(NAMESPACE,`METHOD -[${req.method}], URL - [${req.url}, IP - [${req.socket.remoteAddress}] ,STATUS-[${res.statusCode}]`);
    });

    next();
});
/**parse the request */
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

/**rules of our API */
router.use((req,res,next) => {
    res.header('access-controler-allow-origin', '*');
    res.header('access-controler-allow-header', 'origin ,x-request-with , content-type, accept,authorizarion');
if (req.method=='OPTIONS')
{
   res.header('access-control-allow-methods','get patch delete post put');
   return res.status(200).json({});
}
next();

});

/** routes*/
router.use('/example', exampleRoutes);
/** error handling */
router.use(( req,res,next) => {
    const error = new Error('not found');

    return res.status(404).json({
        message: error.message

    });
});

/**create the server */
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`));
