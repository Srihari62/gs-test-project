import axios from "axios";
import { expect } from 'chai';
import { describe, it } from "mocha";




export const comTranform = () => {
  describe("com.gs.transform", () => {
    it('should return the expected message', () => {
      return axios.get('http://localhost:3000/transform?world=World')
        .then((response) => {
          expect(response.data)
            .to
            .deep
            .equal("HelloWorld");
        });
    });
  });
}

