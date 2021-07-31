```
me@ME-MBP my_app % npm start

> prime-solo-project@0.1.0 start /Users/me/Developer/my_app
> node server/server.js


----------------------------

*** WARNING ***
Your application is not very secure.
You need to set SERVER_SESSION_SECRET to a better secret
Please follow the README and add a .env file

It should be
- longer than 8 characters
- not "superDuperSecret"

If this warning is showing on Heroku,
add or change your SERVER_SESSION_SECRET environment variable!

----------------------------
internal/modules/cjs/loader.js:888
  throw err;
  ^

Error: Cannot find module 'bcrypt'
Require stack:
- /Users/me/Developer/my_app/server/modules/encryption.js
- /Users/me/Developer/my_app/server/strategies/user.strategy.js
- /Users/me/Developer/my_app/server/server.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:885:15)
    at Function.Module._load (internal/modules/cjs/loader.js:730:27)
    at Module.require (internal/modules/cjs/loader.js:957:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.<anonymous> (/Users/me/Developer/my_app/server/modules/encryption.js:3:16)
    at Module._compile (internal/modules/cjs/loader.js:1068:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:933:32)
    at Function.Module._load (internal/modules/cjs/loader.js:774:14)
    at Module.require (internal/modules/cjs/loader.js:957:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/Users/me/Developer/my_app/server/modules/encryption.js',
    '/Users/me/Developer/my_app/server/strategies/user.strategy.js',
    '/Users/me/Developer/my_app/server/server.js'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! prime-solo-project@0.1.0 start: `node server/server.js`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the prime-solo-project@0.1.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/me/.npm/_logs/2021-07-30T22_20_35_809Z-debug.log
me@ME my_app % 
```

and / or 

`npm install`

=

```
zme@ME my_app % npm i
npm WARN deprecated bcrypt@3.0.8: versions < v5.0.0 do not handle NUL in passwords properly
npm WARN deprecated axios@0.17.1: Critical security vulnerability fixed in v0.21.1. For more information, see https://github.com/axios/axios/pull/3410
npm WARN deprecated node-pre-gyp@0.14.0: Please upgrade to @mapbox/node-pre-gyp: the non-scoped node-pre-gyp package is deprecated and only the @mapbox scoped package will recieve updates in the future
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
⸨ ░░░░░░░░░░░░░░░░░⸩ ⠙ fetchMetadata: sill pacote range manifest for proxy-addr@~2.0.5 fetched in 145ms
npm WARN deprecated debug@3.2.6: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)
npm WARN deprecated popper.js@1.16.1: You can find the new Popper v2 at @popperjs/core, this package is dedicated to the legacy v1
npm WARN deprecated babel-eslint@9.0.0: babel-eslint is now @babel/eslint-parser. This package will no longer receive updates.
npm WARN deprecated eslint-loader@2.1.1: This loader has been deprecated. Please use eslint-webpack-plugin
npm WARN deprecated html-webpack-plugin@4.0.0-alpha.2: please switch to a stable version
npm WARN deprecated fsevents@1.2.4: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated core-js@2.6.12: core-js@<3.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated core-js@2.6.4: core-js@<3.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.
npm WARN deprecated node-pre-gyp@0.10.3: Please upgrade to @mapbox/node-pre-gyp: the non-scoped node-pre-gyp package is deprecated and only the @mapbox scoped package will recieve updates in the future
npm WARN deprecated core-js@1.2.7: core-js@<3.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.
npm WARN deprecated joi@11.4.0: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm WARN deprecated sane@2.5.2: some dependency vulnerabilities fixed, support for node < 10 dropped, and newer ECMAScript syntax/features added
npm WARN deprecated kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).
npm WARN deprecated hoek@4.2.1: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated topo@2.0.2: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated left-pad@1.3.0: use String.prototype.padStart()
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.5: this library is no longer supported

> fsevents@1.2.13 install /Users/me/Developer/my_app/node_modules/chokidar/node_modules/fsevents
> node install.js

No receipt for 'com.apple.pkg.CLTools_Executables' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLILeo' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLI' found at '/'.

gyp: No Xcode or CLT version detected!
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:351:16)
gyp ERR! stack     at ChildProcess.emit (events.js:376:20)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:277:12)
gyp ERR! System Darwin 19.6.0
gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /Users/me/Developer/my_app/node_modules/chokidar/node_modules/fsevents
gyp ERR! node -v v14.17.0
gyp ERR! node-gyp -v v5.1.0
gyp ERR! not ok 

> fsevents@1.2.4 install /Users/me/Developer/my_app/node_modules/fsevents
> node install

node-pre-gyp WARN Tried to download(404): https://fsevents-binaries.s3-us-west-2.amazonaws.com/v1.2.4/fse-v1.2.4-node-v83-darwin-x64.tar.gz 
node-pre-gyp WARN Pre-built binaries not found for fsevents@1.2.4 and node@14.17.0 (node-v83 ABI, unknown) (falling back to source compile with node-gyp) 
No receipt for 'com.apple.pkg.CLTools_Executables' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLILeo' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLI' found at '/'.

gyp: No Xcode or CLT version detected!
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:351:16)
gyp ERR! stack     at ChildProcess.emit (events.js:376:20)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:277:12)
gyp ERR! System Darwin 19.6.0
gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "configure" "--fallback-to-build" "--module=/Users/me/Developer/my_app/node_modules/fsevents/lib/binding/Release/node-v83-darwin-x64/fse.node" "--module_name=fse" "--module_path=/Users/me/Developer/my_app/node_modules/fsevents/lib/binding/Release/node-v83-darwin-x64" "--napi_version=8" "--node_abi_napi=napi"
gyp ERR! cwd /Users/me/Developer/my_app/node_modules/fsevents
gyp ERR! node -v v14.17.0
gyp ERR! node-gyp -v v5.1.0
gyp ERR! not ok 
node-pre-gyp ERR! build error 
node-pre-gyp ERR! stack Error: Failed to execute '/usr/local/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --module=/Users/me/Developer/my_app/node_modules/fsevents/lib/binding/Release/node-v83-darwin-x64/fse.node --module_name=fse --module_path=/Users/me/Developer/my_app/node_modules/fsevents/lib/binding/Release/node-v83-darwin-x64 --napi_version=8 --node_abi_napi=napi' (1)
node-pre-gyp ERR! stack     at ChildProcess.<anonymous> (/Users/me/Developer/my_app/node_modules/fsevents/node_modules/node-pre-gyp/lib/util/compile.js:83:29)
node-pre-gyp ERR! stack     at ChildProcess.emit (events.js:376:20)
node-pre-gyp ERR! stack     at maybeClose (internal/child_process.js:1055:16)
node-pre-gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:288:5)
node-pre-gyp ERR! System Darwin 19.6.0
node-pre-gyp ERR! command "/usr/local/bin/node" "/Users/me/Developer/my_app/node_modules/fsevents/node_modules/node-pre-gyp/bin/node-pre-gyp" "install" "--fallback-to-build"
node-pre-gyp ERR! cwd /Users/me/Developer/my_app/node_modules/fsevents
node-pre-gyp ERR! node -v v14.17.0
node-pre-gyp ERR! node-pre-gyp -v v0.10.0
node-pre-gyp ERR! not ok 
Failed to execute '/usr/local/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --module=/Users/me/Developer/my_app/node_modules/fsevents/lib/binding/Release/node-v83-darwin-x64/fse.node --module_name=fse --module_path=/Users/me/Developer/my_app/node_modules/fsevents/lib/binding/Release/node-v83-darwin-x64 --napi_version=8 --node_abi_napi=napi' (1)

> bcrypt@3.0.8 install /Users/me/Developer/my_app/node_modules/bcrypt
> node-pre-gyp install --fallback-to-build

node-pre-gyp WARN Using request for node-pre-gyp https download 
node-pre-gyp WARN Tried to download(404): https://github.com/kelektiv/node.bcrypt.js/releases/download/v3.0.8/bcrypt_lib-v3.0.8-node-v83-darwin-x64-unknown.tar.gz 
node-pre-gyp WARN Pre-built binaries not found for bcrypt@3.0.8 and node@14.17.0 (node-v83 ABI, unknown) (falling back to source compile with node-gyp) 
No receipt for 'com.apple.pkg.CLTools_Executables' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLILeo' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLI' found at '/'.

gyp: No Xcode or CLT version detected!
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:351:16)
gyp ERR! stack     at ChildProcess.emit (events.js:376:20)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:277:12)
gyp ERR! System Darwin 19.6.0
gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "configure" "--fallback-to-build" "--module=/Users/me/Developer/my_app/node_modules/bcrypt/lib/binding/bcrypt_lib.node" "--module_name=bcrypt_lib" "--module_path=/Users/me/Developer/my_app/node_modules/bcrypt/lib/binding" "--napi_version=8" "--node_abi_napi=napi" "--napi_build_version=0" "--node_napi_label=node-v83"
gyp ERR! cwd /Users/me/Developer/my_app/node_modules/bcrypt
gyp ERR! node -v v14.17.0
gyp ERR! node-gyp -v v5.1.0
gyp ERR! not ok 
node-pre-gyp ERR! build error 
node-pre-gyp ERR! stack Error: Failed to execute '/usr/local/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --module=/Users/me/Developer/my_app/node_modules/bcrypt/lib/binding/bcrypt_lib.node --module_name=bcrypt_lib --module_path=/Users/me/Developer/my_app/node_modules/bcrypt/lib/binding --napi_version=8 --node_abi_napi=napi --napi_build_version=0 --node_napi_label=node-v83' (1)
node-pre-gyp ERR! stack     at ChildProcess.<anonymous> (/Users/me/Developer/my_app/node_modules/node-pre-gyp/lib/util/compile.js:83:29)
node-pre-gyp ERR! stack     at ChildProcess.emit (events.js:376:20)
node-pre-gyp ERR! stack     at maybeClose (internal/child_process.js:1055:16)
node-pre-gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:288:5)
node-pre-gyp ERR! System Darwin 19.6.0
node-pre-gyp ERR! command "/usr/local/bin/node" "/Users/me/Developer/my_app/node_modules/.bin/node-pre-gyp" "install" "--fallback-to-build"
node-pre-gyp ERR! cwd /Users/me/Developer/my_app/node_modules/bcrypt
node-pre-gyp ERR! node -v v14.17.0
node-pre-gyp ERR! node-pre-gyp -v v0.14.0
node-pre-gyp ERR! not ok 
Failed to execute '/usr/local/bin/node /usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js configure --fallback-to-build --module=/Users/me/Developer/my_app/node_modules/bcrypt/lib/binding/bcrypt_lib.node --module_name=bcrypt_lib --module_path=/Users/me/Developer/my_app/node_modules/bcrypt/lib/binding --napi_version=8 --node_abi_napi=napi --napi_build_version=0 --node_napi_label=node-v83' (1)
npm WARN @babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.14.5 requires a peer of @babel/core@^7.13.0 but none is installed. You must install peer dependencies yourself.
npm WARN @babel/plugin-proposal-class-static-block@7.14.5 requires a peer of @babel/core@^7.12.0 but none is installed. You must install peer dependencies yourself.
npm WARN @babel/helper-define-polyfill-provider@0.2.3 requires a peer of @babel/core@^7.4.0-0 but none is installed. You must install peer dependencies yourself.
npm WARN react-css-themr@2.1.2 requires a peer of react@^0.14.0 || ^15.0.0-0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 install: `node install`
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: Exit status 1

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! bcrypt@3.0.8 install: `node-pre-gyp install --fallback-to-build`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the bcrypt@3.0.8 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/me/.npm/_logs/2021-07-31T19_29_46_213Z-debug.log
```

This was the key line for me: `No Xcode or CLT version detected!`

Fix:

Remove xcode cli tools: `sudo rm -r -f /Library/Developer/CommandLineTools`

Reinstall: `xcode-select --install`

Then, delete node modules. Manually or with `rm -rf node_modules`

Should be good to go:
`npm install`
`npm start`