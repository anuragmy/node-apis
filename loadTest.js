const wrk = require('wrk');

let conns = 1;
let results = [];

function benchmark() {
  if (conns === 100) {
    return console.log(results);
  }
  conns++;
  wrk({
    threads: 1,
    connections: conns,
    duration: '10s',
    printLatency: true,
    headers: { cookie: 'JSESSIONID=abcd' },
    url: 'http://localhost:3001/api/analysis'
  }, (err, out) => {
    results.push(out);
    benchmark();
  });
}
benchmark();