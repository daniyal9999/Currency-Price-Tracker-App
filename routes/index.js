const axios = require('axios');
var express = require('express');
var router = express.Router();
const api_url = 'https://api.coingecko.com/api/v3/exchange_rates';

/* GET home page. */
router.get('/', async function(req, res, next) {
  var api = await axios.get(api_url)
  // console.log(api.data)
  res.render('index',{articles: api.data});
    
});
router.get('/crypto', async function(req, res, next) {
    res.render('crypto');    
});
router.post('/crypto',async function(req, res, next) {
    var api = await axios.get(api_url)
    const crp = req.body.crypto
    console.log(crp)
    res.render('crypto',{crp:crp, articles: api.data});
});
router.get('/price', function(req, res, next) {
  res.render('home');
});
router.get('/currencies', async function(req, res, next) {
  var api = await axios.get(api_url)
  res.render('currencies',{currencies: api.data});
});
router.get('/contact', function(req, res, next) {
  res.render('error');
});

module.exports = router;
