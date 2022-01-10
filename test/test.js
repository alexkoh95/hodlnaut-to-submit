const { expect } = require("chai");

//Dev dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
const app = require("../server.js");
let should = chai.should();

chai.use(chaiHttp);

/*
 This test tests for 4 things: 
 1. Status 200
 2. res.body should be an object
 3. res.body should have the required keys in view ("user_id", "holdings", "totalAccountValueInUSD")
 4. res.body.user_id to equal 1 (to check that req.params matches res.body.user_id)
 */

describe("Get Route Test", function () {
  it("Get back account value", function (done) {
    chai
      .request(app)
      .get("/getData/1")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        expect(res.body).to.have.keys([
          "user_id",
          "holdings",
          "totalAccountValueInUSD",
        ]);
        expect(res.body.user_id).to.equal("1");
        done();
      });
  });
});
