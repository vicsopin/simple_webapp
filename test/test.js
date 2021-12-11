const request = require("supertest");
const app = require("../index");

// making a GET request to the app
describe("GET /", () => {
    it("App working correctly", (done) => {
        request(app).get("/").expect("App Working!", done);
    })
});
