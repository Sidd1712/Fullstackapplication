module.exports = {
  db: {
    port: 8081,
    database: "sneaker-db",
    user: "root",
    password: "root",
    options: {
      dialect: "sqlite",
      host: "localhost",
      storage: "./sneaker-db.sqlite",
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || "secret",
  },
};
