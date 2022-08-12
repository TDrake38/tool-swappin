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





// const findTools = require("../controllers/tools.controller");

// // trying to test the first findTools controller

// // test("the data is all tools", (done) => {
// //   function findTools(error, data) {
// //     if (error) {
// //       done(error);
// //       return;
// //     }
// //     try {
// //       expect(data).toBe("This should be an array of objects of all the tools");
// //       done();
// //     } catch (error) {
// //       done(error);
// //     }
// //   }

// //   fetchData(findTools);
// // });

// test("the data of all tools", () => 
//   expect(findTools.findTools).toEqual(expect.arrayContaining([expect.objectContaining({id: 1}),
//     expect.objectContaining({id: 2})])
// ));


// //   test('the data is all tool', async () => {
// //     const data = await fetchData();n
// //     expect(data).toBe(an array of all the tools?);
// //   });
