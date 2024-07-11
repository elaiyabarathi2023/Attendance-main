import mongoose, { Document, Model, Schema } from 'mongoose';

export interface HotelDoc extends Document {
  hotelname: string;
  image1: Blob;
  image2:Blob;
  image3:Blob;
  bedrooms:number;
  adults:number;
  kids:number;
  price:number;
 
}

const hotelSchema = new Schema<HotelDoc>({
  hotelname: {
    type: String,
    required:true,
  },
  image1: {
    type: Blob,
    required: true,
  },
  image2: {
    type: Blob,
    required: true,
  },
  image3: {
    type: Blob,
    required: true,
  },
  bedrooms:{
    type:Number,
    required:true,
  },
  kids:{
    type:Number,
    required:true,
  },
  adults:{
    type:Number,
    required:true,
  },
  price:{
    type:Number,
    required:true,
  }

});

const HotelModel: Model<HotelDoc> = mongoose.model('Hotel', hotelSchema);

export default HotelModel;