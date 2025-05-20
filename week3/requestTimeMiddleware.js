let totalTime = 0;
let requestCount = 0;

function requestTimer(req, res, next) {
  const start = process.hrtime(); // High-resolution time

  res.on('finish', () => {
    const diff = process.hrtime(start);
    const durationMs = diff[0] * 1000 + diff[1] / 1e6; // Convert to milliseconds

    totalTime += durationMs;
    requestCount++;

    const averageTime = totalTime / requestCount;
    console.log(`Request took ${durationMs.toFixed(2)} ms | Avg: ${averageTime.toFixed(2)} ms`);
  });

  next();
}

// Usage with Express
const express = require('express');
const app = express();

app.get('/', requestTimer, (req, res) => {
  setTimeout(() => res.send('Hello world!'), 50); // simulate delay
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});