export default async function handler(req, res) {
  const targetUrl = 'https://thesystem.co.th/php/store/scan.php';
  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: req.method === 'POST' ? new URLSearchParams(await req.text()) : undefined
    });

    const data = await response.text();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
