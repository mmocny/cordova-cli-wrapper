//usr/bin/env node $0 $*; exit $?

'use strict';

function ensureDirExistsSync(d) {
  var fs = require('fs');
  if (fs.existsSync(d))
    return;
  fs.mkdirSync(d);
}

function create(dirname) {
  var fs = require('fs');
  var npm = require('npm');
  var path = require('path');

  ensureDirExistsSync(dirname);
  process.chdir(dirname);

  ensureDirExistsSync('node_modules');
  npm.load({}, function() {
    npm.install('cordova', function() {
      process.chdir('..');

      var CLI = require(path.join(process.cwd(), dirname, 'node_modules/cordova/src/cli'));
      new CLI(process.argv);
    });
  });
}

function forward() {
  var path = require('path');
  var CLI = require(path.join(process.cwd(), 'node_modules/cordova/src/cli'));
  new CLI(process.argv);
}

function main() {
  var argv = require('optimist').argv;

  var commands = Object.create(null);
  commands['create'] = create;

  var command = argv._[0];
  var args = argv._.splice(1);

  if (command in commands) {
    return commands[command].apply(null, args)
  } else {
    return forward();
  }
}

if (require.main === module) {
    main();
}

