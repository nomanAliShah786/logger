'use strict';

const {format}=require('winston')
const winston = require('winston');
const CustomTransport = require('./CustomTransport');
const moment = require('moment');

// const logConfiguration = {
//     format: winston.format.json(),
//     'transports': [
//         new winston.transports.Console(),
//         new winston.transports.File({
//             filename:'mrBotLogsWinston.json',
//             format:format.combine(format.timestamp(),format.json())
//         })
//     ]
// };



const logConfiguration = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new CustomTransport({
            filename: moment(moment.now()).format('DD-MM-YYYY') + '-logs.json',
            handleExceptions: true
        })
    ],
});

const logger = winston.createLogger(logConfiguration);

exports.logger = logger;