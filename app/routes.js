module.exports = (router) => {
  // Existing code to pass the current date
  router.use('/', (req, res, next) => {
    res.locals.hostname = req.hostname;
    res.locals.secure = req.secure;
    
    var currentTime = new Date();
    res.locals.currentMonth = currentTime.getMonth() + 1;
    res.locals.currentDay = currentTime.getDate();
    res.locals.currentYear = currentTime.getFullYear();

    console.log("Date is " + res.locals.currentDay + " " + res.locals.currentMonth + " " + res.locals.currentYear);
    next();
  });

  // Route to render the advent calendar page
  router.get('/advent-calendar', (req, res) => {
    // Create an array of days (1 to 25)
    const days = Array.from({ length: 25 }, (_, i) => i + 1);
    
    // Filter out the days greater than currentDay
    const availableDays = days.filter(day => day <= res.locals.currentDay);

    // Pass available days to the template
    res.render('advent-calendar', { availableDays });
  });

  // Generate routes for individual days (1 to 25)
  for (let day = 1; day <= 25; day++) {
    router.get(`/advent-calendar/day${day}`, (req, res) => {
      if (day > res.locals.currentDay) {
        return res.status(403).send("This day is not yet available.");
      }
      res.render(`advent-calendar/day${day}`);
    });
  }

  // Default route
  router.get('/', (req, res) => {
    res.render('index');
  });
};

for (let day = 1; day <= 25; day++) {
  router.get(`/advent-calendar/day-${day}`, (req, res) => {
    // Example content for each day
    const dayContent = `This is the content for Day ${day}.`;

    res.render('advent-day', { 
      day: day, 
      content: dayContent 
    });
  });
}
