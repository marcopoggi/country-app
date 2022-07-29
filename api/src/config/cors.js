const { MODE } = process.env;

const ALLOWED_ORIGINS =
  MODE !== "dev"
    ? [
        "https://pi-countries-marco.vercel.app/",
        /https:\/\/pi-countries-.*-marcopoggi.vercel.app/,
      ]
    : [/http:\/\/localhost:([0-9]{4})/];

const OPTIONS = {
  origin: ALLOWED_ORIGINS,
  methods: ["GET", "POST", "PUT", "OPTIONS", "DELETE"],
  credentials: true,
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
};

module.exports = { OPTIONS };
