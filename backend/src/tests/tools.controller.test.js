const findTools = require("../controllers/tools.controller");

// trying to test the first findTools controller

// test("the data is all tools", (done) => {
//   function findTools(error, data) {
//     if (error) {
//       done(error);
//       return;
//     }
//     try {
//       expect(data).toBe("This should be an array of objects of all the tools");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetchData(findTools);
// });

test("the data of all tools", () => 
  expect(findTools).toEqual(expect.arrayContaining([expect.objectContaining({id: 1}),
    expect.objectContaining({id: 2})])
));


//   test('the data is all tool', async () => {
//     const data = await fetchData();n
//     expect(data).toBe(an array of all the tools?);
//   });
