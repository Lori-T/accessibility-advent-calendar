//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// routes.js

// GET DATE - for opening advent 
router.use('/', (req, res, next) => {
  res.locals.hostname = req.hostname //gets hostname for absolute urls - will not work for localhost 

  res.locals.secure = req.secure;
  // console.log(res.locals.hostname)

  var currentTime = new Date()

  // returns the month (from 0 to 11)
  res.locals.currentMonth = currentTime.getMonth() + 1
  
  // returns the day of the month (from 1 to 31)
  res.locals.currentDay = currentTime.getDate() 
  
  // returns the year (four digits)
  res.locals.currentYear = currentTime.getFullYear()

  console.log("Date is " + res.locals.currentDay + " " + res.locals.currentMonth +   " " + res.locals.currentYear);
  next();
});



module.exports = (router) => {
  router.get('/', (req, res) => {
    res.render('index');
  });




  for (let day = 1; day <= 25; day++) {
    router.get(`/advent-calendar/day${day}`, (req, res) => {
      res.render(`advent-calendar/day${day}`);
    });
  }
};
