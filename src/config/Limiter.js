const rateLimit = require("express-rate-limit");

const Authlimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10
});

const Storelimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10
});

const Driverlimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10
});

const PasswordLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 1
});

module.exports = {
    Authlimiter,
    Driverlimiter,
    Storelimiter,
    PasswordLimiter
}