#protractor-multicapabilities-builder
=========

A utility to dynamically build multicapabilities config file for protractor with basic test group functionalities.

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
    "Tests": [
        "../tests/smoke/search-test.js"
            ],
    "devices": [
        "iPhone-8.0",
        "Samsung Galaxy Nexus-4.3"
            ]
      },
"Functional":{
      "Tests": [
        "../tests/smoke/search-test.js",
        "../tests/smoke/homepage-test.js"
              ],
    "devices": [
        "iPhone-8.0",
        "Samsung Galaxy Nexus-4.3",
        "Chrome-41",
        "Firefox-29",
        "IE-11"
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
        "name": "iPhone",
        "runningversion": "8.0",
        "specs": [
            "../tests/smoke/search-test.js"
        ],
        "browserName": "iPhone",
        "version": "8.0",
        "app": "safari",
        "deviceName": "iPhone Simulator",
        "nonSyntheticWebClick": "false",
        "appium-version": "1.3.7"
    },
    {
        "name": "Samsung Galaxy Nexus",
        "runningversion": "4.3",
        "specs": [
            "../tests/smoke/search-test.js"
        ],
        "browserName": "android",
        "version": "4.3",
        "deviceName": "Samsung Galaxy Nexus Emulator",
        "platfomr": "Linux"
    }
]
};
```

## Release History

* 0.1.0 Initial release
