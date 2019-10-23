const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.0.103',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write("Name: SRG")
    //conn.write("Move: up");
    //setInterval(() => {conn.write("Move: up");}, 50); 

  });
  return conn;
}


module.exports = {connect};