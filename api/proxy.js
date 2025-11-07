export default async function handler(req, res) {
  const targetUrl = encodeURIComponent("http://thesystem.co.th/php/store/scan.php?" + new URLSearchParams(req.query));
  const proxyUrl = `https://api.allorigins.win/get?url=${targetUrl}`;

  try {
    const response = await fetch(proxyUrl);
    const data = await response.json();

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(data.contents);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
}
