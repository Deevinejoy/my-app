import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: String,
    content: String,
    img: String,  // Store image URLs here
}, { timestamps: true });

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
