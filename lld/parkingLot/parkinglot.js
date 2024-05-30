function createParkingSlot(slotId, type) {
  return {
    slotId: slotId,
    type: type,
    isOccupied: false,
    vehicle: null,
  };
}

function createVehicle(license, type) {
  return {
    license,
    type,
  };
}

function createParkingLot() {
  const slots = [];
  return {
    addSlot: function (slotId, type) {
      slots.push(createParkingSlot(slotId, type));
    },
    findAvailableSlot: function (vehicletype) {
      return slots.find(
        (slot) => !slot.isOccupied && slot.type === vehicletype
      );
    },
    parkVehicle: function (vehicle) {
      const slot = this.findAvailableSlot(vehicle.type);
      if (slot) {
        slot.isOccupied = true;
        slot.vehicle = vehicle;
        return `Vehicle ${vehicle.license} parked in slot ${slot.slotId}`;
      } else {
        return "No available slot for this type of vehicle";
      }
    },
    unparkVehicle: function (license) {
      const slot = slots.find(
        (slot) => slot.isOccupied && slot.vehicle.license === license
      );
      if (slot) {
        slot.isOccupied = false;
        const vehicle = slot.vehicle;
        slot.vehicle = null;
        return `Vehicle ${vehicle.license} unparked from slot ${slot.slotId}`;
      }
    },
    displayParkingLot: function () {
      slots.forEach((slot) => {
        if (slot.isOccupied) {
          console.log(
            `Slot ${slot.slotId} (${slot.type}) - Occupied by ${slot.vehicle.license}`
          );
        } else {
          console.log(`Slot ${slot.slotId} (${slot.type}) - Available`);
        }
      });
    },
  };
}

const parkingLot = createParkingLot();
parkingLot.addSlot(1, "car");
parkingLot.addSlot(2, "car");
parkingLot.addSlot(3, "bike");
parkingLot.addSlot(4, "truck");

const car1 = createVehicle("CAR123", "car");
const truck1 = createVehicle("TRUCK123", "truck");

console.log(parkingLot.parkVehicle(car1));
console.log(parkingLot.parkVehicle(truck1));

parkingLot.displayParkingLot();

parkingLot.unparkVehicle("CAR123");

parkingLot.displayParkingLot();
