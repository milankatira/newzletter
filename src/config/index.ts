const _config = {
  mongoUrl: process.env.NEXT_PUBLIC_MONGO_URL,
  jwt_key: process.env.NEXT_PUBLIC_JWT_KEY,
}

export const getConfig = (key: keyof typeof _config) => {
  if (key in _config) {
    return _config[key]
  } else {
    console.error(`Key "${key}" not found in configuration.`)
    return null
  }
}
