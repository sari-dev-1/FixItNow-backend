const mongoose = require('mongoose');

const TicketModel = mongoose.Schema({
    description: { type: String, required: true },
    status: {
        type: String,
        enum: ['inProgress', 'waiting', 'closed'],
        default: 'waiting'
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    responses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Response' }]
}, { timestamps: true });

module.exports = mongoose.model("Ticket", TicketModel);
