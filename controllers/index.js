const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//html routes -is all views - all handlebars

//http://localhost:3001/
router.use('/', homeRoutes);



//api routes - CRUD

router.use('/api', apiRoutes);

module.exports = router;
