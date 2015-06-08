var gulp = require('gulp');
var coffee = require('gulp-coffee');
var concat = require("gulp-concat");
var order = require("gulp-order");


gulp.task('coffee', function() {
  gulp.src([
      "coffee/_Constants.coffee",
      "coffee/_Messages.coffee",
      "coffee/_Ant.coffee",
      "coffee/_Driver.coffee",
      "coffee/_Stick.coffee",
      "coffee/_Sensor.coffee",
      "coffee/_PowerSensor.coffee",
      "coffee/_SpeedAndCadenceSensor.coffee",
      "coffee/node-ant.coffee"
    ])
    .pipe(coffee({bare: true}))
    //.pipe(order())
    .pipe(concat("node-ant.js"))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['coffee']);
