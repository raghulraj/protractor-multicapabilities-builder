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
