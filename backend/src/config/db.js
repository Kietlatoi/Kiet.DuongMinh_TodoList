import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("liên kết cơ sở dữ liệu thành công");
  } catch (error) {
    console.log("Lỗi khi kết nối cơ sở dữ liệu");
    process.exit(1); // exit with error
  }
};
