const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const { Resend } = require("resend");

const app = express();

// 🔐 CORS
app.use(cors({
  origin: "https://serianacobras.com"
}));

// 🔑 Resend
const resend = new Resend('re_K7xmN83A_AkLcYVAJRTNeL5Z9mNmX3BC6');

// 📎 Upload config
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 3 * 1024 * 1024 } // 3MB per file
});

// 🧪 TEST SERVER
app.get("/test", (req, res) => {
  res.send("Server attivo 🚀");
});

// 📧 INVIO EMAIL
app.post(
  "/send-email",
  upload.fields([
    { name: "captain_medical" },
    { name: "player2_medical" },
    { name: "player3_medical" },
    { name: "player4_medical" },
    { name: "player5_medical" },
  ]),
  async (req, res) => {
    try {
      console.log("BODY:", req.body);
      console.log("FILES:", req.files);

      // 📎 Prepara allegati
      const attachments = Object.values(req.files || {})
        .flat()
        .map(file => ({
          filename: file.originalname,
          content: fs.readFileSync(file.path),
        }));

      // 📧 INVIO EMAIL
      await resend.emails.send({
        from: "torneo@serianacobras.com", // 🔥 poi puoi cambiarlo con dominio tuo
        to: "docserianacobras@gmail.com",
        subject: "Iscrizione torneo",
        text: `
--- ISCRIZIONE TORNEO ---

🏀 SQUADRA
Nome squadra: ${req.body.team_name}

👤 CAPITANO
Nome: ${req.body.captain_name}
Data di nascita: ${req.body.captain_birth}
Email: ${req.body.email}
Telefono: ${req.body.phone}

📝 NOTE
${req.body.notes || "Nessuna nota"}

👥 GIOCATORE 2
Nome: ${req.body.player2_name}
Data di nascita: ${req.body.player2_birth}

👥 GIOCATORE 3
Nome: ${req.body.player3_name}
Data di nascita: ${req.body.player3_birth}

👥 GIOCATORE 4
Nome: ${req.body.player4_name}
Data di nascita: ${req.body.player4_birth}

👥 GIOCATORE 5
Nome: ${req.body.player5_name}
Data di nascita: ${req.body.player5_birth}

✅ Privacy: ${req.body.privacy}
📸 Foto: ${req.body.photos}

--- FINE ISCRIZIONE ---
        `,
        attachments: attachments,
      });

      // 🧹 Cancella file dopo invio
      Object.values(req.files || {}).flat().forEach(file => {
        fs.unlinkSync(file.path);
      });

      res.json({ success: true });

    } catch (error) {
      console.error("ERRORE INVIO EMAIL:", error);
      res.json({ success: false });
    }
  }
);

// 🚀 AVVIO SERVER
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
