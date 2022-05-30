const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  const random = Math.floor(Math.random() * quotes.length);
  response.end(JSON.stringify(quotes[random].quoteText));
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

const quotes = [
  {
    quoteText:
      "Te amo Preciosa.",
    quoteAuthor: "",
  },
  
  {
    quoteText:
      "Te amo Hermosa.",
    quoteAuthor: "",
  },
  
  {
    quoteText:
      "Te amo Bonita.",
    quoteAuthor: "",
  },
  
  {
    quoteText:
      "Ti amo!! Eres el amor de mi vida.",
    quoteAuthor: "",
  },
  
  {
    quoteText:
      "Tu Qlo.",
    quoteAuthor: "",
  },
  
  {
    quoteText:
      "Quiero estar contigo siempre bb.",
    quoteAuthor: "",
  },
  
  {
    quoteText:
      "Te amo bbcita bblin.",
    quoteAuthor: "",
  },
  {
    quoteText:
      "Te amo Preciosa. Dice la daks que huevos",
    quoteAuthor: "",
  },
  {
    quoteText:
      "Te amo Preciosa. Con amor para ti bb",
    quoteAuthor: "",
  }
]
