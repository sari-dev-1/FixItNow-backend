const express = require("express");
const bodyParser = require("body-parser");
const responseRouter = require("./routers/responseRouter");
//const ticketRouter = require("./routers/ticketRouter");
const ticketTypeRouter=require("./routers/ticketTypeRouter");
const userRouter=require("./routers/userRouter");
const dotenv=require("dotenv")
dotenv.config()

const app = express();

const mongoose = require("mongoose")
mongoose.connect(process.env.DB_URL)
.then(() => console.log("Connected…")).catch(err => console.error("Connection failed…"))

app.use(bodyParser.json());
app.use("/response", responseRouter);
//app.use("/ticket", ticketRouter);
app.use("/TicketType",ticketTypeRouter);
app.use("/User",userRouter);

app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));

