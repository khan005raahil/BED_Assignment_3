const helmet = require('helmet');

const apiHelmet = helmet({
  
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,

  hsts: {
    maxAge: 60 * 60 * 24 * 30, 
    includeSubDomains: true,
    preload: false,
  },
});

function addCustomApiHeaders(req, res, next) {
  
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  res.setHeader('X-Frame-Options', 'DENY');
  
  res.setHeader('Referrer-Policy', 'no-referrer');
  
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=()');
  next();
}

module.exports = {
  apiHelmet,
  addCustomApiHeaders,
};
