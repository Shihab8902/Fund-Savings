const middlewarePackages = require("./packages")

const applyMiddlewares = (app) => {
    middlewarePackages(app);
}



module.exports = applyMiddlewares;