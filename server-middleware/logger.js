export default function (req, res, next) {
    console.log(`server-middleware logger: ${req.url}`)
    next()
  }