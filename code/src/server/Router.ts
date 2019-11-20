import * as express from 'express';


export abstract class Router{

abstract applyRoutes(aplication:express.Application):any;

}