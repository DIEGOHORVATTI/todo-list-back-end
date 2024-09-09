import { HTTPError } from './httpError'

export const isHttpError = (err) =>
  err instanceof HTTPError ||
  (typeof (err).status === 'number' && typeof (err).message === 'string')
