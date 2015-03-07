var fs = require('fs')

  , installed = false;

function install(options) {
  if (installed) {
    return;
  }

  options = options || {};

  require.extensions[options.extension || '.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, {encoding: 'utf8'});
  };

  installed = true;
};

module.exports = {
  install : install
};
