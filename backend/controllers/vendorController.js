const addVendor = async (req, res) => {
    try {
      console.log("Adding vendor:", req.body);
      const vendor = new Vendor(req.body);
      await vendor.save();
      res.status(201).json(vendor);
    } catch (error) {
      console.error("Error adding vendor:", error.message);
      res.status(400).json({ message: error.message });
    }
  };
  
  const getVendors = async (req, res) => {
    console.log("Fetching vendors...");
    try {
      const vendors = await Vendor.find();
      res.json(vendors);
    } catch (error) {
      console.error("Error fetching vendors:", error.message);
      res.status(500).json({ message: "Server error" });
    }
  };
  