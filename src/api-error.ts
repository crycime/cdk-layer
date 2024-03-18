class APIError extends Error {
  statusCode: number | undefined

  isOperational: boolean

  constructor(message = '', statusCode = 400) {
    super()
    this.message = message
    this.isOperational = true
    if (statusCode) {
      this.statusCode = statusCode
    }
  }
}

export { APIError }
