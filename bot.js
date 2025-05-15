// File: bot.js

const { StringSession } = require('telegram/sessions');
const { TelegramClient } = require('telegram');
const input = require('input');

const apiId = 22453675; // Ganti dengan API ID kamu
const apiHash = '2db059fbe358e804244b8c8a7ca07a04'; // Ganti dengan API Hash kamu
const sessionString = ''; // Kosong untuk login pertama kali

(async () => {
  console.log('Memulai koneksi ke Telegram...');
  const client = new TelegramClient(new StringSession(sessionString), apiId, apiHash, {
    connectionRetries: 5,
  });

  await client.start({
    phoneNumber: async () => await input.text('Nomor telepon: '),
    password: async () => await input.text('Password 2FA (jika ada): '),
    phoneCode: async () => await input.text('Kode OTP: '),
    onError: (err) => console.log(err),
  });

  console.log('Berhasil login! Simpan session string ini:');
  console.log(client.session.save()); // Simpan session string dan ganti di file selanjutnya
})();
