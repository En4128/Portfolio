import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import Contact from './data.js';

// Load environment variables
dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);


app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://elango-alpha.vercel.app/'
  ],
  methods: ['GET', 'POST'],
}));

app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:admin%40123@cluster0.wjmf3kg.mongodb.net/myProject?retryWrites=true&w=majority');
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.log('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    console.log('📨 Received contact form submission:', req.body);

    const { name, email, message } = req.body;

    // Validation
    if (!name || !name.trim()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please share your name.' 
      });
    }

    if (!email || !/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Use a valid email.' 
      });
    }

    if (!message || message.trim().length < 2) {
      return res.status(400).json({ 
        success: false, 
        message: 'Add a bit more context.' 
      });
    }

    // Save to MongoDB
    const newContact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim()
    });

    const savedContact = await newContact.save();
    console.log('✅ Message saved to database:', savedContact._id);

    // Send email notification via Resend
    try {
      const emailData = await resend.emails.send({
        from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
        to: process.env.TO_EMAIL || 'your-email@gmail.com',
        subject: `New Portfolio Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="color: #666; font-size: 12px; border-top: 1px solid #f0f0f0; padding-top: 10px;">
              Received on: ${new Date().toLocaleString()}
            </div>
          </div>
        `
      });
      
      console.log('✅ Email sent successfully:', emailData.data?.id);
    } catch (emailError) {
      console.log('⚠️ Email failed to send:', emailError);
      // Don't fail the request if email fails
    }

    // Success response
    res.status(201).json({
      success: true,
      message: 'Thanks! Your message is in my inbox.'
    });

  } catch (error) {
    console.error('❌ Server error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running smoothly!',
    timestamp: new Date().toISOString()
  });
});

// Get all messages (optional)
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: messages
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch messages'
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Contact endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`❤️  Health check: http://localhost:${PORT}/api/health`);
});