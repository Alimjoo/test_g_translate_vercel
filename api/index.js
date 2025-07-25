// const express = require('express');
// const path = require('path');
// const app = express();
// const { translate } = require('bing-translate-api');


// const port = 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // Serve static files from the root directory
// app.use(express.static(__dirname));

// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, '../public')));

// // Route to handle translation
// app.post('/translate', async (req, res) => {
//   try {
//     console.log(req.body);
//     const { text, fromLang, toLang } = req.body;
//     if (!text || !toLang || !fromLang) {
//       return res.status(400).json({ error: 'Text and target language are required' });
//     }

//     const result = await translate(text, fromLang, toLang);
//     res.json({ translation: result.translation });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Translation failed' });
//   }
// });


// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });



// api/index.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { translate } from 'bing-translate-api';
import { translate as XXXX } from '@vitalets/google-translate-api';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the root directory
app.use(express.static(__dirname));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Route to handle translation
app.post('/translate', async (req, res) => {
  try {
    console.log(req.body);
    const { text, fromLang, toLang } = req.body;
    if (!text || !toLang || !fromLang) {
      return res.status(400).json({ error: 'Text and target language are required' });
    }

    // const result = await translate(text, fromLang, toLang);
    // res.json({ translation: result.translation });
    const googleText = await XXXX(text , {from:'ug', to: 'en' });
    res.json({ translation: googleText.text });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Translation failed' });
  }
});

// // Test function for manual verification
// async function testTranslations() {
//   try {
//     const bingText = await translate('Привет, мир! Как дела?', 'ru', 'en');
//     console.log('Bing test:', bingText.translation);

//     const googleText = await XXXX('Привет, мир! Как дела?', { to: 'en' });
//     console.log('Google test:', googleText.text);
//   } catch (err) {
//     console.error('Test error:', err);
//   }
// }

// testTranslations();

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});






