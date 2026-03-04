const Trip = require("../models/Trip");
const { fn, col } = require("sequelize");
const Trip = require("../models/Trip");
const Vehicle = require("../models/Vehicle");
exports.overview = async (req, res) => {
  const data = await Trip.findOne({
    attributes: [
      [fn("SUM", col("fareAmount")), "totalEarnings"],
      [fn("SUM", col("maintenanceCost")), "totalMaintenance"],
      [fn("SUM", col("fuelCost")), "totalFuel"],
      [fn("SUM", col("otherCost")), "totalOther"],
    ],
    raw: true,
  });

  const earnings = Number(data.totalEarnings || 0);
  const maintenance = Number(data.totalMaintenance || 0);
  const fuel = Number(data.totalFuel || 0);
  const other = Number(data.totalOther || 0);

  const profit = earnings - (maintenance + fuel + other);

  res.json({ earnings, maintenance, fuel, other, profit });
};


exports.earnings = async (req, res) => {
  const now = new Date();

  const monthly = await Trip.sum("fareAmount", {
    where: {
      tripDate: {
        $gte: new Date(now.getFullYear(), now.getMonth(), 1),
      },
    },
  });

  const yearly = await Trip.sum("fareAmount", {
    where: {
      tripDate: {
        $gte: new Date(now.getFullYear(), 0, 1),
      },
    },
  });

  res.json({ monthly, yearly });
};


exports.profit = async (req, res) => {
  const trips = await Trip.findAll({ raw: true });

  let fare = 0, fuel = 0, maint = 0, other = 0;

  trips.forEach(t => {
    fare += Number(t.fareAmount || 0);
    fuel += Number(t.fuelCost || 0);
    maint += Number(t.maintenanceCost || 0);
    other += Number(t.otherCost || 0);
  });

  res.json({
    totalProfit: fare - (fuel + maint + other),
  });
};




exports.activeVehicleCount = async (req, res) => {
  const count = await Vehicle.count({ where: { isActive: true } });
  res.json({ activeVehicles: count });
};




exports.vehicleSummary = async (req, res) => {
  const vehicles = await Vehicle.findAll({ where: { isActive: true }, raw: true });

  const summaries = await Promise.all(
    vehicles.map(async v => {
      const trips = await Trip.findAll({ where: { vehicleId: v.id }, raw: true });

      let earning = 0, fuel = 0, maint = 0;

      trips.forEach(t => {
        earning += Number(t.fareAmount || 0);
        fuel += Number(t.fuelCost || 0);
        maint += Number(t.maintenanceCost || 0);
      });

      return {
        vehicleId: v.id,
        name: v.name,
        registrationNumber: v.registrationNumber,
        totalTrips: trips.length,
        earning,
        fuel,
        maintenance: maint,
        profit: earning - (fuel + maint),
      };
    })
  );

  res.json(summaries);
};
