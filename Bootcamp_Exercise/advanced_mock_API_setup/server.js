try {
  // #1 Declare variable to use Express function
  const Express = require("express");

  // #2 Declare other essential packages
  const Cors = require("cors");

  // #3 Requiring "dotenv" config to allow access to .env file
  require("dotenv").config();

  // #4 Declare app variable to allow in creating other essential functions
  const app = Express();

  /**
   * #5 Enable CORS
   * Cross-Origin Resource Sharing (CORS) is
   * an HTTP-header based mechanism that allows a server
   * to indicate any origins (domain, scheme, or port)
   * other than its own from which a browser should permit loading resources.
   */
  app.use(Cors());

  // #6 Declare a function to check API is online or offline
  app.all("*", (req, res) => res.send("<h1>API is online. Please specify your URL again.</h1>"));

  const PORT = process.env.PORT;

  app.listen(PORT, () => console.log("Server start on PORT " + PORT));
} catch (error) {
  console.log("Error message" + error);
}
