import express from "express";
import controller from '../controllers/sample';

const router = express.Router();
router.get('/ping',controller.sampleHealthCheck);
router.get('/name',controller.name);
router.get('/ID',controller.ID);
router.get('/salary',controller.salary);
export = router;


