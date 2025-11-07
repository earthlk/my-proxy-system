export default async function handler(req, res) {
  const targetUrl = "http://thesystem.co.th/php/store/scan.php";

  try {
    // อ่านค่าที่ส่งมาจาก Apps Script
    const body = req.body; 
    const params = new URLSearchParams(body);

    // ส่งต่อไปยังเว็บปลายทาง
    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0",
      },
      body: params.toString(),
    });

    const text = await response.text();
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
}
