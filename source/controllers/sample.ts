import {Request , Response , NextFunction } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'sample controller';
const NAMESPACE2 = 'sample controller 2';
const NAMESPACE3 = 'sample controller 3';
const NAMESPACE4 = 'sample controller 4';
const sampleHealthCheck = (req:Request, res:Response, next:NextFunction) => {
    logging.info(NAMESPACE,`sample health check route called.`);

    return res.status(200).json({
        message: 'pong'
    });
};

const name = (req:Request, res:Response, next:NextFunction) => {
    logging.info(NAMESPACE2,`name check route called.`);

    return res.status(200).json({
        message: 'Vandita Tiwari'
    });
}
const ID = (req:Request, res:Response, next:NextFunction) => {
    logging.info(NAMESPACE3,`ID check route called.`);

    return res.status(200).json({
        message: '21BCS9436'
    });
}
const salary= (req:Request, res:Response, next:NextFunction) => {
    logging.info(NAMESPACE4,`salary check route called.`);

    return res.status(200).json({
        message: '943600'
    });
}
export default {
    sampleHealthCheck,name,ID,salary
};
