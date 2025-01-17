const {
  MultipleArgumentsError,
  ArgumentNotFoundError,
  FileNotReadableError,
  FileNotFoundError } = require('./errors')

function handle(error) {
  switch (error.name) {
    case MultipleArgumentsError.name:
      console.log(error.message)
      break;

    case ArgumentNotFoundError.name:
      console.log(error.message)
      break;

    case FileNotFoundError.name:
      console.log(error.message)
      break;

    case FileNotReadableError.name:
      console.log(error.message)
      break;

    default:
      throw error
  }
}

module.exports = handle;