'use strict';

const {format}=require('winston')
const winston = require('winston'); require('winston-daily-rotate-file');
const CustomTransport = require('./customTransport');
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
            // filename: moment(moment.now()).format('DD-MM-YYYY') + '-logs.json',
            filename: 'logs.json',
            format:format.combine(format.timestamp(),format.json()),

            handleExceptions: true
        }),
        new (winston.transports.DailyRotateFile)({
            filename: 'logsarchive.json',
            datePattern: 'yyyy-MM-dd.',
            prepend: true,
            maxSize:'500m',
            zippedArchive:true,
            maxfile: '3d', 
            format:format.combine(format.timestamp(),format.json()),


          }),
    ],
});

const logger = winston.createLogger(logConfiguration);

exports.logger = logger;