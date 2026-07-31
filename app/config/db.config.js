module.exports = {
  HOST: "ep-summer-leaf-ayihhe0t-pooler.c-5.us-east-2.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_Ix8NSOmCkD3Z",
  DB: "neondb",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};