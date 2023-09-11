import axios from 'axios';
import { expect } from 'chai';
import { describe, it } from 'mocha'; // Import from 'mocha'

export const comGsIfElse = () => {
  describe('com.gs.if', () => {
    it('should return Hello pavan', async () => {
      try {
        const response = await axios.get('http://localhost:3000/greet?greet=pavan');
        expect(response.data).to.equal('Hello pavan');
      } catch (error) {
        throw error;
      }
    });

    it('should return Hello Hari', async () => {
      try {
        const response = await axios.get('http://localhost:3000/greet?greet=hari');
        expect(response.data).to.equal('Hello Hari');
      } catch (error) {
        throw error;
      }
    });

    it('should return Hello!', async () => {
      try {
        const response = await axios.get('http://localhost:3000/greet?greet=hello');
        expect(response.data).to.equal('Hello!');
      } catch (error) {
        throw error;
      }
    });

    it('should return "Hi developer"', async () => {
      try {
        const response = await axios.get('http://localhost:3000/greet?greet=ksksks');
        expect(response.data).to.equal('Hi developer');
      } catch (error) {
        throw error;
      }
    });
  });
}
