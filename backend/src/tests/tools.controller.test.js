const tool = require("../controllers/tools.controller");
const user = require("../models/user.model");
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
    // start up db here
    pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
    });

    await pool.connect();

    //await userController.createUser('john')
    // also create a test user here
  });

  test("should create tool", async () => {
    // const request = createMockRequest('drill', 'some-id')

    //NOTE: getting stuck at user is unidentified
    await user.createUser("Tom", "Burin", "password");

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
});
