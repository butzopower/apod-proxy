const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const guid = process.env.CF_INSTANCE_GUID;
    res.send(guid);
});

module.exports = router;
