module.exports = ({ env }) => ({
  host: env("HOST"),
  port: env.int("PORT"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "acd0e1abc7b133f63357c91d9a33b568"),
    },
  },
});
