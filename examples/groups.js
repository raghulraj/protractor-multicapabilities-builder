module.exports = {
configure:{
"Smoke":{
    "specs": [
        "../tests/smoke/search-test.js"
            ],
    "devices": [
        "iPhone-8.0/iOS",
        "Samsung Galaxy Nexus-4.3/Android"
            ]
      },
"Functional":{
      "specs": [
        "../tests/smoke/search-test.js",
        "../tests/smoke/homepage-test.js"
              ],
    "devices": [
        "iPhone-8.0/iOS",
        "Samsung Galaxy Nexus-4.3/Android",
        "Chrome-41/Windows 8.1",
        "Firefox-29.0/Windows 7",
        "Internet Explorer-10/Windows 8"
              ]
      }
}};
