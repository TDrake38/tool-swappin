const tool = require("../controllers/tools.controller");
const user = require("../controllers/user.controller")
const { Pool } = require('pg');
const { config } = require('dotenv');

config();

describe('Tools controller test suite', () => {
    const express = require('express')
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
            password: process.env.DB_PASSWORD
        })
    
        await pool.connect()

        //await userController.createUser('john')
        // also create a test user here
    })

    test('should create tool', async () => {
        // const request = createMockRequest('drill', 'some-id')

        await user.createUser({body: {
            username: 'Tom',
            area: 'Burin',
            password: 'password'
        }})

        const resp = await controller.createTool({body: {
            photo: '',
            toolName: 'drill',
            area: '',
            },
            user: {
                id: 1
            }
        })
        expect(resp).toEqual(200)
    })

});