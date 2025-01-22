import { createConnection } from 'mongoose'

import { mongoUrl } from '../config'

export const mongoConnection = createConnection(mongoUrl, {
  maxPoolSize: 10
})

mongoConnection.on('connecting', () => console.log('Connecting to the database'))
mongoConnection.on('error', err => console.error('🔴 Error connecting to the database', err))
mongoConnection.on('disconnected', () => console.log('🔴 Disconnected from the database'))
