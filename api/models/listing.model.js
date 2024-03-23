import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    date: {
      type: Date, // Use the appropriate date type
      required: true,
    },
    imageUrls: {
      type: Array, // Assuming imageUrls is an array of strings (URLs)
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },

    


  },
  { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
