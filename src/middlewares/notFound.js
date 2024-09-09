export const notFound = (req, res, next) => {
  next(new Error('Not found'))
}
