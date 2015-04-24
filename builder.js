var fs = require('fs');
    
	exports.generate = function (groupsFile,reportFile,testtype) {
	var config_reader = require(groupsFile);
	var tests = config_reader.configure[testtype]["Tests"];
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
	fs.writeFileSync(reportFile, "module.exports = {multiCapabilities:");
	fs.appendFileSync(reportFile, deviceconfiguration);
	fs.appendFileSync(reportFile, "};");
        }

    function device_switcher(tests,browser,version) {
	switch(true){
	case browser === "Chrome" || browser === "Firefox" || browser === "IE":
	var desktopArray = new Array();
	desktopArray.push({
                name: browser,
		runningversion: version,
        	specs: tests,
		browserName: browser,
		version: version
	});	
	return desktopArray;
	break;
	case browser === "iPhone":
        var mobileArray = new Array();
        mobileArray.push({
                name: browser,
                runningversion: version,
                specs: tests,
                browserName: browser,
                version: version,
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
                    name: browser,
                    runningversion: version,
                    specs: tests,
                    browserName: "android",
                    version: version,
                    deviceName: "Samsung Galaxy Nexus Emulator",
                    platform: "Linux"
                });
                return mobileArray;
                break;
	}
	}
//module.exports = Builder;	
