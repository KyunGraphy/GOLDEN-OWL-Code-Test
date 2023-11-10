import express from 'express';

const app = express();

app.listen(8800, () => {
  // connect();
  console.log(`Connecting to server port ${8800}`);
});