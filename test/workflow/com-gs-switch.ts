import axios from "axios";
import { expect } from "chai";
import { describe, it } from "mocha";

export const comGsSwitch = () => {
  describe("com.gs.switch", function () {
    it("testing switch", async function () {
      await axios
        .post("http://localhost:3000/test/switch", { condition: "FIRST" })
        .then((response) => {
          expect(response.status).to.be.equal(200);
          expect(response.status).to.not.equal(500);
          expect(response.data).to.be.equal('sukumar');
        });
    });
    it("testing switch", async function () {
      await axios
        .post("http://localhost:3000/test/switch", { condition: "SECOND" })
        .then((response) => {
          expect(response.status).to.be.equal(200);
          expect(response.status).to.not.equal(500);
          expect(response.data).to.be.equal('yaswanth');
        });
    });
    it("testing switch", async function () {
      await axios
        .post("http://localhost:3000/test/switch", { condition: "THIRD" })
        .then((response) => {
          expect(response.status).to.be.equal(200);
          expect(response.status).to.not.equal(500);
          expect(response.data).to.be.equal('pavan');
        });
    });
    it("testing switch", async function () {
      await axios
        .post("http://localhost:3000/test/switch", { condition: "DEFAULT" })
        .then((response) => {
          expect(response.status).to.be.equal(200);
          expect(response.status).to.not.equal(500);
          expect(response.data).to.be.equal('all');

        });
    });
  });


}