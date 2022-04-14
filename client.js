const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "10.0.0.168",
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('connect', () => {
    conn.write('Name: MPJ')
  })

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