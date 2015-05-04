#protractor-multicapabilities-builder
=========

A utility to dynamically build multicapabilities config file for sauce - protractor with basic test group functionalities.

## Installation

 ```
 npm install protractor-multicapabilities-builder
 ```

## Usage

```
var builder = require('protractor-multicapabilities-builder');
builder.generate('./groups.js','./output.js','Smoke');
```

## Configuration

```
params: (inputFile,outputFile,testtype)
```
## Sample configuration file
```
module.exports = {
configure:{
"Smoke":{
    "specs": [
        "../tests/smoke/search-test.js"
            ],
    "devices": [
        "iPhone-8.0",
        "Samsung Galaxy Nexus-4.3"
            ]
      },
"Functional":{
      "specs": [
        "../tests/smoke/search-test.js",
        "../tests/smoke/homepage-test.js"
              ],
    "devices": [
        "iPhone-8.0",
        "Samsung Galaxy Nexus-4.3",
        "Chrome-41",
        "Firefox-29",
        "Internet Explorer-11"
              ]
      }
}};
```

##Output file

```
module.exports = {
multiCapabilities:
[
    {
        "browserName": "iPhone",
        "version": "8.0",
	"specs": [
            "../tests/smoke/search-test.js"
        ],
        "app": "safari",
        "deviceName": "iPhone Simulator",
        "nonSyntheticWebClick": "false",
        "appium-version": "1.3.7"
    },
    {
        "browserName": "android",
        "version": "4.3",
	"specs": [
            "../tests/smoke/search-test.js"
        ],
        "deviceName": "Samsung Galaxy Nexus Emulator",
        "platform": "Linux"
    }
]
};
```

## Release History

* 0.0.1 Initial release
* 0.0.2 Fixed path issue
* 0.0.3 Updated Readme.MD
* 0.0.4 Updated Readme.MD
* 0.0.5 Changes Tests group node to specs and added examples
