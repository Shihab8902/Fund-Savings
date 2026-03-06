const router = require("express").Router();
const registerUser = require("../controllers/auth/registerUser");
const checkServerHealth = require("../controllers/health/checkServerHealth");


//Test Routes
router.get("/api/health", checkServerHealth);
//Auth Routes
router.post("/api/user/register", registerUser);




module.exports = router;

