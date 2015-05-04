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
