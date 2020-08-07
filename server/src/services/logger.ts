import winston from 'winston'

const logger = winston.createLogger({
  format: winston.format.json(),
  level: 'debug',
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error', maxFiles: 2, maxsize: 10000 }),
    new winston.transports.File({ filename: 'combined.log', maxFiles: 2, maxsize: 10000 }),
  ],
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  )
}

export default logger
