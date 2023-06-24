const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const htmlResponse = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
            text-align: center;
          }

          h1 {
            color: #333;
          }

          h3, h5 {
            color: #666;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <h1>Tugas Project 5 - Komputasi Awan A</h1>
        <h3>Anggota Kelompok:</h3>
        <h5>Rachmita Annisa Aulia - 5027201032</h5>
        <h5>Alvian Ghifari - 5027201035</h5>
        <h5>Achmad Aushaf Amrega Hisyam - 5027201036</h5>
        <h5>Afrida Rohmatin Nuriyah - 5027201037</h5>
        <h5>Axellino Anggoro Armandito - 5027201040</h5>
        <h5>Brilianti Puspita Sari - 5027201070</h5>
        <h5>Adinda Putri Audyna - 5027201073</h5>    
      </body>
    </html>
  `;
  res.send(htmlResponse);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
