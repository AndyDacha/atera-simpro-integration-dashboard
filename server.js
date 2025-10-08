const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'", "https://cdn.jsdelivr.net"],
    },
  },
}));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'atera-simpro-dashboard-secret-key-2024',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Password protection
const DASHBOARD_PASSWORD = process.env.DASHBOARD_PASSWORD || 'DachaSSI2024!';
const hashedPassword = bcrypt.hashSync(DASHBOARD_PASSWORD, 10);

// Authentication middleware
const requireAuth = (req, res, next) => {
  if (req.session.authenticated) {
    return next();
  }
  res.status(401).json({ error: 'Authentication required' });
};

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { password } = req.body;
  
  if (!password) {
    return res.status(400).json({ error: 'Password required' });
  }
  
  try {
    const isValid = await bcrypt.compare(password, hashedPassword);
    if (isValid) {
      req.session.authenticated = true;
      res.json({ success: true, message: 'Authentication successful' });
    } else {
      res.status(401).json({ error: 'Invalid password' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Authentication error' });
  }
});

// Logout endpoint
app.post('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Logout error' });
    }
    res.json({ success: true, message: 'Logged out successfully' });
  });
});

// Check authentication status
app.get('/api/auth-status', (req, res) => {
  res.json({ authenticated: !!req.session.authenticated });
});

// Serve static files from client build
app.use(express.static(path.join(__dirname, 'client/build')));

// Protected API routes
app.get('/api/integration-status', requireAuth, (req, res) => {
  res.json({
    status: 'operational',
    version: '4.0.0',
    lastUpdated: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    features: {
      webhookProcessing: true,
      duplicateDetection: true,
      slaCalculation: true,
      bidirectionalSync: true,
      costCentreAssignment: true
    }
  });
});

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Integration Dashboard running on port ${PORT}`);
  console.log(`🔒 Password protection enabled`);
  console.log(`🌐 Access: http://localhost:${PORT}`);
});



