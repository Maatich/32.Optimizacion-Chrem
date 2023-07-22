import winston from "winston";
import __dirname from "../../utils.js";
import path from "path";

const logger =winston.createLogger({
    transports:  [new winston.transports.Console({ level: "http"})],
    transports:  [new winston.transports.File({ filename: path.join (__dirname, "./error.log"), level: "warm"})],
});

export const addLogger = (req, res, next ) =>{
req.logger = logger;
req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleDateString}`);
next();
}
