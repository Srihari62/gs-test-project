import axios from "axios";

import { expect } from 'chai';
import { describe, it } from "mocha";

export const comGsReturn = () => {
  describe('com.gs.return', () => {
    it('should return 200 OK', async () => {
      const response = await axios.post('http://localhost:3000/return-fn/Hyderabad');
      expect(response.status).to.equal(200);
    });

    it('should return a specific message in the response body', async () => {
      const response = await axios.post('http://localhost:3000/return-fn/Hyderabad');
      expect(response.statusText).to.equal('OK');
    });

    it('should return city name as Hyderabad', async () => {
      const response = await axios.post('http://localhost:3000/return-fn/Hyderabad');
      expect(response.data.data.city).to.equal('Hyderabad');
    });

    it('should return type of the response body as object', async () => {
      const response = await axios.post('http://localhost:3000/return-fn/Hyderabad');
      expect(response.data.data).to.be.an('object');
    });

    it('should return type of the response body city variable value as string', async () => {
      const response = await axios.post('http://localhost:3000/return-fn/Hyderabad');
      expect(response.data.data.city).to.be.an('string');
    });
  });
}


