require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const partyRoutes = require("./routes/partyRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const authRoutes = require("./routes/authRoutes");

connectDB();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/parties", partyRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/auth", authRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
