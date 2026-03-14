const Trip = require("../models/Trip");

exports.create = async (req, res) => {
  const trip = await Trip.create({ ...req.body, userId: req.user.userId });
  res.status(201).json(trip);
};

exports.getAll = async (req, res) => {
  const where = {};
  if (req.query.vehicleId) where.vehicleId = req.query.vehicleId;

  const trips = await Trip.findAll({ where });
  res.json(trips);
};

exports.getById = async (req, res) => {
  const trip = await Trip.findOne({
    where: { id: req.params.id, userId: req.user.userId },
  });
  if (!trip) return res.status(404).json({ error: "Trip not found" });
  res.json(trip);
};

exports.update = async (req, res) => {
  const trip = await Trip.findOne({
    where: { id: req.params.id, userId: req.user.userId },
  });
  if (!trip) return res.status(404).json({ error: "Trip not found" });

  await trip.update(req.body);
  res.json(trip);
};

exports.remove = async (req, res) => {
  const trip = await Trip.findOne({
    where: { id: req.params.id},
  });
  if (!trip) return res.status(404).json({ error: "Trip not found" });

  await trip.update({ isActive: false });
  res.json({ message: "Trip deactivated" });
};
