import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import StarRating from "./StarRating";
import Button from "../reusable/Button";

interface FormData {
    email: string;
    title: string;
    review: string;
    rating: number;
}

const ReviewForm: React.FC = () => {
    const [rating, setRating] = useState<number>(0);
    const [isRatingError, setIsRatingError] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ mode: "all" });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        if (rating < 1) {
            setIsRatingError(true);
        } else {
            setIsRatingError(false);
            data.rating = rating;
            console.log(data);
        }
    };
    return (
        <form id="review-form"
            onSubmit={handleSubmit(onSubmit)}
            className="md:bg-white w-full flex flex-col items-center gap-6 md:px-6 py-6 mt-8 md:border border-[#EAEBF0] md:rounded-2xl"
        >
            <p className="text-xl md:text-2xl text-black font-semibold">
                Leave a review for this agent
            </p>
            <div>
                <StarRating setRating={setRating} rating={rating} />
                {isRatingError && rating < 1 && (
                    <p className="text-sm text-red-700 text-center !mt-2">Please select a rating</p>
                )}
            </div>
            <div className="flex flex-col !gap-2 w-full">
                <label htmlFor="email" className="text-xl text-black font-medium">
                    Email address
                </label>
                <input
                    {...register("email", { required: "This field is required" })}
                    id="email"
                    type="email"
                    className="text-black border-2 border-gray-300 rounded-[4px] focus:border-none"
                    placeholder="Your email address..."
                />
                {errors.email && (
                    <p className="text-sm text-red-700">{errors.email.message}</p>
                )}
            </div>
            <div className="flex flex-col !gap-2 w-full">
                <label htmlFor="title" className="text-xl text-black font-medium">
                    Title
                </label>
                <input
                    {...register("title", { required: "This field is required" })}
                    id="title"
                    className="text-black border-2 border-gray-300 rounded-[4px] focus:border-none"
                    placeholder="Exceptional service..."
                />
                {errors.title && (
                    <p className="text-sm text-red-700">{errors.title.message}</p>
                )}
            </div>
            <div className="flex flex-col !gap-2 w-full">
                <label htmlFor="review" className="text-xl text-black font-medium">
                    Review
                </label>
                <textarea
                    {...register("review", { required: "This field is required" })}
                    name="review"
                    id="review"
                    cols={10}
                    rows={4}
                    className="text-black border-2 border-gray-300 rounded-[4px] focus:border-none"
                    placeholder="Including the nature of your transaction with the realtor, write your review here...."
                ></textarea>
                {errors.review && (
                    <p className="text-sm text-red-700">{errors.review.message}</p>
                )}
            </div>
            <Button type="submit" className="py-3 px-6">Submit review</Button>
        </form>
    );
};

export default ReviewForm;
