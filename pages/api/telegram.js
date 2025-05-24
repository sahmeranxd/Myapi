import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    res.status(400).json({ error: "Kullanıcı adı yaz." });
    return;
  }

  const cleanUsername = username.startsWith('@') ? username.slice(1) : username;
  const url = `https://t.me/${cleanUsername}`;

  try {
    const response = await fetch(url);
    const html = await response.text();
    const root = parse(html);

    const result = {
      telegram: 'https://t.me/stabilsystem',
      author: 'Stabil System',
      api_ismi: 'Telegram Sorgu'
    };

    // Takma Adı
    const titleEl = root.querySelector('.tgme_page_title span[dir="auto"]');
    if (titleEl) result.TakmaAdi = titleEl.text.trim();

    // Kullanıcı Adı
    const extraEl = root.querySelector('.tgme_page_extra');
    if (extraEl) result.KullaniciAdi = extraEl.text.trim();

    // Biyografi
    const descEl = root.querySelector('.tgme_page_description');
    if (descEl) {
      // Linkleri temizle
      let bio = descEl.innerHTML.replace(/<a href="[^"]+">([^<]+)<\/a>/g, '$1');
      bio = bio.replace(/\n/g, '');
      result.Biografi = bio.trim();
    }

    // Profil Fotoğrafı
    const imgEl = root.querySelector('.tgme_page_photo_image');
    if (imgEl) {
      const imgUrl = imgEl.getAttribute('src');
      const imgResp = await fetch(imgUrl);
      const buffer = await imgResp.arrayBuffer();
      result.ProfilFotografi = Buffer.from(buffer).toString('base64');
    }

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(200).json(result);

  } catch (err) {
    res.status(500).json({ error: "Hata oluştu", detay: err.message });
  }
}
