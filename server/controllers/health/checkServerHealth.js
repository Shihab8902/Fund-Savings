const checkServerHealth = (req, res) => {
    res.status(200).send({
        status: "ok",
        message: "The server is up and running..."
    })
}


module.exports = checkServerHealth;