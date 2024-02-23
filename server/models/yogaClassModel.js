import mongoose, { Schema } from "mongoose";

const YogaClassSchema = new Schema(

    {
        "id": Number,
        "type": String,
        "images": Array,
        "videos": String,
        "title": String,
        "slug": String,
        "description": String,
        "tags": String,
        "level": String,
        "style": String,
        "start_time": String,
        "utc_start_time": String,
        "duration": Number,
        "streamed_count": Number,
        "repeat_type": String,
        "repeat_value": String,
        "no_drop_in": Boolean,
        "recurring_class": Boolean,
        "join_after_start": Boolean,
        "start_date": String ,
        "end_date": String,
        "single_currency_fee": {
            "currency": String,
            "fee": String,
            "fee_inr": String
        },
        "period_currency_fee": {
            "currency": String,
            "fee": String,
            "fee_inr": String
        },
        "video_platform": String,
        "video_link": String,
        "video_password": String,
        "meeting_id": String,
        "zoom_link": String,
        "utc_start_at": Number,
        "utc_end_at": Number,
        "teacher": {
            "id": Number,
            "profile_picture": String,
            "first_name": String,
            "full_name": String,
            "tags": String,
            "practicing_years": Number,
            "teaching_years": Number,
            "style": String,
            "description": String,
            "experiances": String,
            "invited_users": String,
            "location": String,
            "school_description": String,
            "school_name": String,
            "school_images": Array,
            "profile_videos": Array,
            "domain": String
        }
    }

)

export const YogaClassModel = mongoose.model('YogaClassModel', YogaClassSchema );