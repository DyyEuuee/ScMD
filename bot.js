const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input");

const apiId = 22453675;
const apiHash = "2db059fbe358e804244b8c8a7ca07a04";
const stringSession = new StringSession(""); // kosongin dulu

(async () => {
  console.log("Memulai login...");
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });

  await client.start({
    phoneNumber: async () => await input.text("Nomor telepon: "),
    password: async () => await input.text("Password 2FA (jika ada): "),
    phoneCode: async () => await input.text("Kode OTP: "),
    onError: (err) => console.log(err),
  });

  console.log("Login berhasil!");
  console.log("Session string kamu:");
  console.log(client.session.save());
})();
