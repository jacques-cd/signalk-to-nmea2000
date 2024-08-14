const _ = require('lodash')

module.exports = (app, plugin) => {
  var lastUpdate = null

  return {
    title: 'COG & SOG, Rapid Update (129026)',
    optionKey: 'COG_SOGv2',
    keys: ["navigation.courseOverGroundTrue", "navigation.speedOverGround"],
    callback: (course, speed) => {
      try {
        return [
          {
            pgn: 129026,
            'COG Reference': 0,
            COG: course || 0, // This is a problem, because we really need to be receiving the COG, not assuming north.
            SOG: speed
          }
        ]
      } catch (err) {
        console.error(err)
      }
    },
    tests: [{
      input: [2.1, 9],
      expected: [{
        "prio": 2,
        "pgn": 129026,
        "dst": 255,
        "fields": {
          "COG Reference": "True",
          "COG": 2.1,
          "SOG": 9
        }
      }]
    }]
  }
}
