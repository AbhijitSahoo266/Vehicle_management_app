const Driver = require("../models/Driver");

// ➕ Create Driver
exports.create = async (req, res) => {
  try {
    const driver = await Driver.create(req.body);
    res.status(201).json(driver);
  } catch (err) {
    console.error("Create driver error:", err);
    res.status(500).json({ error: "Failed to create driver" });
  }
};

// 📄 Get All Drivers
exports.getAll = async (req, res) => {
  try {
    const data = await Driver.findAll({
      where: { isActive: true },
      order: [["createdAt", "DESC"]],
    });
    res.json(data);
  } catch (err) {
    console.error("Get drivers error:", err);
    res.status(500).json({ error: "Failed to fetch drivers" });
  }
};

// 📄 Get Driver by ID
exports.getById = async (req, res) => {
  try {
    const data = await Driver.findOne({
      where: { id: req.params.id, isActive: true },
    });
    if (!data) return res.status(404).json({ error: "Driver not found" });
    res.json(data);
  } catch (err) {
    console.error("Get driver error:", err);
    res.status(500).json({ error: "Failed to fetch driver" });
  }
};

// ✏️ Update Driver
exports.update = async (req, res) => {
  try {
    const driver = await Driver.findOne({
      where: { id: req.params.id, isActive: true },
    });
    if (!driver) return res.status(404).json({ error: "Driver not found" });

    await driver.update(req.body);
    res.status(200).json({message: "Driver updated"});
  } catch (err) {
    console.error("Update driver error:", err);
    res.status(500).json({ error: "Failed to update driver" });
  }
};

// ❌ Soft Delete Driver
exports.remove = async (req, res) => {
  try {
    const driver = await Driver.findOne({
      where: { id: req.params.id },
    });
    if (!driver) return res.status(404).json({ error: "Driver not found" });

    await driver.update({ isActive: false });
    res.json({ message: "Driver deactivated" });
  } catch (err) {
    console.error("Delete driver error:", err);
    res.status(500).json({ error: "Failed to delete driver" });
  }
};
