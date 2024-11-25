//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// routes.js

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
