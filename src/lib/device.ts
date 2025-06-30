import { UAParser } from 'ua-parser-js';

export const parseUserAgent = (userAgent: string) => {
  const parser = new UAParser(userAgent);
  const result = parser.getResult();

  return {
    device: result.device.type || 'desktop',
    os: result.os.name,
    browser: result.browser.name,
  };
};