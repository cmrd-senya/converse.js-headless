import Converse from 'converse.js/src/headless.js'

export default Converse;

var ConverseInternal = {
};

export {
  Converse,
  ConverseInternal
}

Converse.plugins.add('expose-internal', {
  initialize: function () {
    ConverseInternal._converse = this._converse;

    var handler = ConverseInternal.pluginsInitialized;
    if (handler) {
      this._converse.on('pluginsInitialized', handler);
    }
  }
});
