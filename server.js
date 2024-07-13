const http = require('http');
const app = require('./app/app');

http.createServer(app).listen(8001, () => {
  console.log(`\n🔥🔥🔥 - SERVER IS RUNNING ON PORT : 8001 🔥🔥🔥\n`);
});
