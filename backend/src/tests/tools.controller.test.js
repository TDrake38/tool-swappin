const tool = require("../controllers/tools.controller");
const user = require("../models/user.model");
const tools = require("../models/tools.model");
const { Pool } = require("pg");
const { config } = require("dotenv");

config();

describe("Tools controller test suite", () => {
  const express = require("express");
  const controller = tool;
  const app = express();
  let pool;
  //let user;

  beforeAll(async () => {
    //this should not equal your local test database ( can be anything else )
    pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
    });

    await pool.connect();
    await user.createUser("Tom", "Burin", "password");
  });

  test("should create tool", async () => {
    // const request = createMockRequest('drill', 'some-id')

    //NOTE: getting stuck at user is unidentified
    // await user.createUser("Tom", "Burin", "password");

    const resp = await controller.createTool({
      body: {
        photo: "",
        toolName: "drill",
        area: "",
      },
      user: {
        id: 1,
      },
    });
    resp[0].id = "30";
    expect(resp).toEqual([
      {
        area: "",
        borrowed: null,
        borrower_id: null,
        deposit: null,
        id: "30",
        is_available: null,
        name: "drill",
        owner_id: 1,
        photo: "",
        returned: null,
      },
    ]);
  });

  test("should search for a tool", async () => {
    await controller.createTool({
      body: {
        photo: "",
        toolName: "drill",
        area: ""
      },
      user: {
        id: 1,
      },
    });

    const resp = await controller.toolSearch({
      body: {
        searchBar: "drill",
      }
    });
    const toolConvert = resp[0].name.toLowerCase();
    const success = toolConvert.includes("drill");
    expect(success).toEqual(true);
  });

  test('this should delete a tool', async () => {
    await controller.createTool({
      body: {
        photo: "",
        toolName: "drill",
        area: ""
      },
      user: {
        id: 1,
      },
    });
    // resp[0].id = "30";
    // const deletedTool = resp[0]
    const resp = await controller.deleteTool({

    })
    //make the deletedTool a boolean and then check to see if it is there?
});
