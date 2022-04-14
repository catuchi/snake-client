const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "10.0.0.168",
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

console.log("Connecting...");
// connect();

module.exports = {
  connect,
}