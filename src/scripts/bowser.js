import Bowser from 'bowser';

const userAgent = Bowser.parse(window.navigator.userAgent);

const bowser = { 
  // Categorically exclude Internet Explorer
  isStupidBrowser() {
    if (userAgent.browser.name === 'Internet Explorer') {
      return true;
    }
  },

  // Categorically exclude landscape mode on (small) mobile devices
  isStupidMode() {
    if (userAgent.platform.type === 'mobile' && window.innerHeight < window.innerWidth) {
      return true;
    } else if (window.location.href.indexOf('mode') > -1) {
      return false;
    }
  },
};

export default bowser;
