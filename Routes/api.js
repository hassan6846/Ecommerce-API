const express=require('express');// expxress router
const { api, apiTesting } = require('../controller/api');

//////////////////////// defined all the routes
router.route("/").get(api)
router.route("/api").get(apiTesting)
module.exports=router