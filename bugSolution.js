const http = require('http');

const server = http.createServer((req, res) => {
  try {
    const data = someAsyncOperation();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(JSON.stringify(data));
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

function someAsyncOperation() {
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  } else {
    return { message: 'Success!' };
  }
}

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // Exit the process with an error code
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});