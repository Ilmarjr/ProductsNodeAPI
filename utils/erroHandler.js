// Middleware to handle errors
function errorHandler(err, req, res, next) {
    console.error("❌ Erro capturado:", err);

    res.status(err.statusCode || 500).json({
        status: "error",
        message: err.message || "Internal Server Error"
    });
}

module.exports = errorHandler;
