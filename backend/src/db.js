//  mongodb+srv://thrivq_db_ibovd:OFmfyK8Ddpa06ukX@ibovsdb.coaq32q.mongodb.net/?appName=ibovsDB
// mongoose.connect('mongodb+srv://thrivq_db_ibovd:OFmfyK8Ddpa06ukX@ibovsdb.coaq32q.mongodb.net/?appName=ibovsDB')
// const databaseurl =`mongodb+srv://Ibrahim:Ibr.714339227@cluster0.utsd0uz.mongodb.net/?appName=Cluster0`;
// const uri ="mongodb+srv://ibovstest:ibovs12345@ibr4nx.sjth1pb.mongodb.net/?appName=ibr4nx";
const mongoose = require("mongoose");
const {v4:uuidv4}=require('uuid');
const {DB_URL}=require('./config');
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB Connected mongoose ✅");
  })
  .catch((err) => console.error("DB Connection Error ❌", err));

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true, minlength: 5 },
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: /^\S+@\S+\.\S+$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  number: {
    type: Number,
    min: 100000000,
    max: 999999999,
    unique: true,
  },
  address: {
    type: String,
    default: "",
    trim: true,
  },
  uid: {
    type: String,
    default:uuidv4(),
  },
});

const user = mongoose.model("userInfo", userSchema);
module.exports = { user };
