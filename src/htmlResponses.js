const fs = require('fs');

const getFile = (request, response, relPath) => {
  const file = fs.readFileSync(`${__dirname}${relPath}`);

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(file);
  response.end();
};

const getIndex = (request, response) => {
  getFile(request, response, '/../client/client.html');
};

const getPage2 = (request, response) => {
  getFile(request, response, '/../client/client2.html');
};

const getPage3 = (request, response) => {
  getFile(request, response, '/../client/client3.html');
};

module.exports = {
  getIndex, getPage2, getPage3,
};
