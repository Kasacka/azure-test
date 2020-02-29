const http = require("http");
const server = http.createServer((request, response) => {
	response.end("This is a Azure GitHub deployment test");
});
server.listen(8080);