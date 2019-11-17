
module.exports = (err, req, res, next) => {
    const jerror = { error: err.message };
    console.log('Error de aplicacion', err.stack);
    res.status(500).json(jerror);
    next();
};
