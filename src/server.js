const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3002;
const API_BASE_URL = "https://api.linkedin.com/v2/";

app.use(cors());

app.get("/linkedin/profile", async (req, res) => {
 const accessToken = req.header("Authorization");
 if (!accessToken) {
  return res.status(401).json({ error: "No access token provided" });
 }

 try {
  const config = {
   headers: {
    Authorization: accessToken,
   },
  };

  // Fetch the member's positions
  const positionsResponse = await axios.get(
   `${API_BASE_URL}people/(id:~)?projection=(id,positions*(id,startDate,endDate,title,company,location))`,
   config
  );

  console.log(positionsResponse.response);
  const positions = positionsResponse.data.positions.elements;

  res.json({ positions });
 } catch (error) {
  console.error("Error fetching LinkedIn data:", error.response);
  res.status(500).json({ error: error.message });
 }
});

app.listen(PORT, () => {
 console.log(`Server running at http://localhost:${PORT}`);
});
