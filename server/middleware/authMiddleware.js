const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        console.log('❌ No token found');
        return res.status(401).json({ error: 'Not authorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log('❌ Invalid token', err.message);
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = { id: decoded.id }; // ✅ FIXED LINE
        next();
    });
};

module.exports = protect;
