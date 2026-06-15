import express from "express";
const app = express();
const port = process.env.PORT || 4000;

function gcd(a, b) {
  while(b !== 0n) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function parseNatural(value) {
  if (typeof value !== 'string') {
    return null;
  }

  const n = BigInt(value);

  if(n <= 0n) {
    return null;
  }

  return n;
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/kkaif0035_gmail_com', (req, res) => {
  const x = parseNatural(req.query.x);
  const y = parseNatural(req.query.y);

  if(x === null || y === null) {
    res.set("Content-Type", "text/plain");
    return res.send("NaN"); 
  }

  const lcm = (x * y) / gcd(x, y);

  res.set("Content-Type", "text/plain");
  res.send(lcm.toString());

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})