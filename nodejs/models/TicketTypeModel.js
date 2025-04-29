const { Schema, model } = require('mongoose');

const TicketSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  description: {
    type: String,
    required: true,
    minlength: 5
  },
  status: {
    type: String,
    enum: ['open', 'in progress', 'closed'],
    default: 'open'
  },
  createdBy: {
    type: String, // email של המשתמש שיצר
    required: true
  },
  assignedTo: {
    type: String, // יכול להיות email של תומך/מפתח
    default: null
  },
  responses: [
    {
      message: String,
      by: String, // email או שם
      at: { type: Date, default: Date.now }
    }
  ]
}, { timestamps: true });

module.exports = model('Ticket', TicketSchema);
