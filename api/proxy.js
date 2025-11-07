import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Proxy is working! Use POST /proxy to forward data.");
});

app.post("/proxy", async (req, res) => {
  try {
    const resp = await fetch("http://thesystem.co.th/php/store/scan.php", {
      method: "POST",
      body: new URLSearchParams(req.body),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const text = await resp.text();
    res.send(text);
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));

