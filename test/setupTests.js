// requestAnimationFrame fallback for JSDOM
if (typeof requestAnimationFrame === 'undefined') {
  window.requestAnimationFrame = function(cb) {
    return setTimeout(cb, 0);
  };

  window.cancelAnimationFrame = function() {};
}

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

window.HTMLCanvasElement.prototype.getContext = () => ({
  font: '',
  measureText: () => ({ width: 0 })
});
