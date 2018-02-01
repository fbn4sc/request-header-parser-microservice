const express = require("express");
const app = express();
const PORT = process.argv[2] || 3000;

app.get("/", (req, res) => {
  const acceptLanguage = req.headers["accept-language"];
  const language = acceptLanguage.substring(0, acceptLanguage.indexOf(","));
  const ipaddress = req.ip;
  const software = req.headers["user-agent"];

  res.json({
    ipaddress,
    software,
    language
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
