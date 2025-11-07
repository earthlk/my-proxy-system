export default async function handler(req, res) {
  const targetUrl = "http://thesystem.co.th/php/store/scan.php"; // เว็บต้นทาง
  const params = new URLSearchParams(req.query); // รับ query จาก Apps Script

  try {
    const response = await fetch(`${targetUrl}?${params.toString()}`, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const text = await response.text();
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
}
