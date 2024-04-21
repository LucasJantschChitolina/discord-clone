"use strict";

const fs = require("fs");

function getHTML(url) {
  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      fs.writeFileSync("globo.html", html);
    });
}

getHTML("https://globoesporte.globo.com/futebol/brasileirao-serie-a");
