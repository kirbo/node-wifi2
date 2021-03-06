import 'jest';

import wifi from '../src/wifi';
import { needToInitialise } from './_helpers';

describe('wifi.disconnect()', () => {
  it('should not be initialised', async () => {
    try {
      expect(await wifi.disconnect()).toThrowError(Error);
    } catch (error) {
      expect(error.message).toBe(needToInitialise);
    }
  });

  it('should be initialised', async () => {
    expect(wifi.init()).toBeTruthy();
    expect(await wifi.disconnect()).toBeTruthy();
  });
});
