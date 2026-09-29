const express = require("express");
const serverless = require("serverless-http");
const app = require("../../app.js"); // App.js ka path

module.exports.handler = serverless(app);