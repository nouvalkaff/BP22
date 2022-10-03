const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayStationSchema = new Schema(
  {
    typeId: {
      type: Schema.ObjectId,
      required: false,
      ref: "Type",
    },
    madeIn: {
      type: String,
      default: null,
    },
    prodDate: {
      type: Date,
      default: Date.now(),
    },
    bidder: {
      type: Array,
      default: [],
    },
    transactionDetail: [
      new Schema({
        customerId: { type: Schema.ObjectId, default: null },
        age: { type: Number, default: null },
        time: { type: Date, default: Date.now() },
      }),
    ],
    specDetail: [
      {
        processorId: { type: Schema.ObjectId, default: null },
        RAM: { type: Number, default: null },
        serial: { type: String, default: "" },
      },
    ],
    createdBy: {
      type: Schema.ObjectId,
      ref: "Customer",
    },
    createdDate: {
      type: Date,
      default: Date.now(),
    },
    updatedBy: {
      type: Schema.ObjectId,
      ref: "Customer",
    },
    updatedDate: {
      type: Date,
      default: Date.now(),
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
    stockAvl: {
      type: String,
      enum: ["full", "half-full", "empty"],
    },
    receiveDetail: {
      type: Object,
    },
    /**
    receiveDetail: {
      receive_name: string,
      phone_number: string,
      receive_date: date,
    }
     */
    cashierDetail: {
      cashierId: Schema.ObjectId,
      name: String,
      contractDate: Date,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "packageManagement" }
);
const PackageManagement = mongoose.model("PackageManagement", packageManagementSchema);
module.exports = PackageManagement;
