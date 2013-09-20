cordova-cli-wrapper
===================

### Install Instructions

    git clone https://github.com/mmocny/cordova-cli-wrapper.git
    cd cordova-cli-wrapper
    npm install


### Usage

Just use `cordova-cli-wrapper.js` exactly as you would `cordova`.  Some things don't work yet in the early version, but enought works to give it a shot.

* If run from a global context, the only command it supports is "create".
* If run from within a workspace, it expects that you have a local cordova npm module and uses that.
  * This way, you can manage the versions of each local workspace separately, which is the whole point.

Note: this will not work with existing workspaces / workspaces created with `cordova create` directly, unless you `npm install cordova` manually inside there.


### Limitations

* Would like to support `cordova-cli-wrapper.js create ... --link` which `npm link`s cordova to a globally installed version.
  * This would mean that all your `--link`ed workspaces upgrade `cordova-cli` versions at the same time.
  * You would still need to run the `update` step on each one manually.
    * We should warn if using a new `cordova-cli` version and an update was not done yet.
* Would like to support `--version` `--help` etc when run from global context, but to say the same thing as `cordova-cli` does.
