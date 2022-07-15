const {
  findTools,
  createTool,
  deleteTool,
  getTools,
  toolSearch,
} = require("../controllers/tools.controller");

const registerTool = (app) => {
  app.get("/findTools", findTools);
  app.post("/tool", createTool);
  app.post("/search", toolSearch);
  app.delete("/deleteTool/:id", deleteTool);
  app.get("/getTools", getTools);
};

module.exports = registerTool;
