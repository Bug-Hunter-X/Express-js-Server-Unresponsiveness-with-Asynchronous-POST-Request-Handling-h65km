const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', async (req, res) => {
  const data = req.body;
  try {
    await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate async operation
    console.log('Processing data:', data);
    res.send('Data received');
  } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).send('Error processing data');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));