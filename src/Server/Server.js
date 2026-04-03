const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// ✅ CORS (aggiornato alla nuova porta React)
app.use(cors({
  origin: "https://serianacobras.com"
}));

// ✅ Upload config
const upload = multer({
  dest: "uploads/",
  limits: { fileSize: 20 * 1024 * 1024  }
});

// ✅ Endpoint
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

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "docserianacobras@gmail.com",
          pass: "erfb jrqb jsbr hrcl",
        },
      });

      await transporter.sendMail({
        from: req.body.email,
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

            --- FINE ISCRIZIONE ---`,
        attachments: Object.values(req.files).flat().map((file) => ({
          filename: file.originalname,
          path: file.path,
        })),
      });

      res.json({ success: true });

    } catch (error) {
      console.error(error);
      res.json({ success: false });
    }
  }
);

// 🔥 Porta nuova
app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});