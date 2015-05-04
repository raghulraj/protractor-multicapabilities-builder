var fs = require('fs');
var path = require('path');

        exports.generate = function (groupsFile,reportFile,testtype) {
        var config_reader = require(path.join(__dirname, '../../'+groupsFile));
        var tests = config_reader.configure[testtype]["specs"];
        var devices = config_reader.configure[testtype]["devices"];
        device_builder(tests,devices,reportFile);
        };

    function device_builder (tests,devices,reportFile) {
        var deviceFull = [];
        for ( var i in devices) {
        var obj = devices[i];
        var browser = obj.split("-")[0];
        var version = obj.split("-")[1];
        var deviceArray = device_switcher(tests,browser,version);
        for(var x in deviceArray){
        deviceFull.push(deviceArray[x]);
        }
        }
        var deviceconfiguration = JSON.stringify(deviceFull);
        fs.writeFileSync(path.join(__dirname, '../../'+reportFile), "module.exports = {multiCapabilities:");
        fs.appendFileSync(path.join(__dirname, '../../'+reportFile), deviceconfiguration);
        fs.appendFileSync(path.join(__dirname, '../../'+reportFile), "};");
        }

    function device_switcher(tests,browser,version) {
	switch(true){
	case browser === "Chrome" || browser === "Firefox" || browser === "Internet Explorer":
	var desktopArray = new Array();
	desktopArray.push({
        	browserName: browser,
                version: version,
		specs: tests
	});	
	return desktopArray;
	break;
	case browser === "iPhone":
        var mobileArray = new Array();
        mobileArray.push({
                browserName: browser,
                version: version,
		specs: tests,
		app: "safari",
		deviceName: "iPhone Simulator",
		nonSyntheticWebClick: "false",
		"appium-version" : "1.3.7"

        });
        return mobileArray;
        break;
	case browser === "Samsung Galaxy Nexus":
                var mobileArray = new Array();
                mobileArray.push({
                    browserName: "android",
                    version: version,
		    specs: tests,
                    deviceName: "Samsung Galaxy Nexus Emulator",
                    platform: "Linux"
                });
                return mobileArray;
                break;
	}
	}
