import { FaRegStar, FaStar } from "react-icons/fa6";
import { IkonIcon } from "~/assets/img";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import { useEffect } from "react";

export default function AgentReviews() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#review-form') {
            const element = document.getElementById('review-form');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <div className="flex flex-col gap-8 py-8">
            <div className="flex justify-between items-center">
                <p className="text-primaryColor text-xl underline">{"5"} reviews</p>
                <Link to={'?tab=reviews#review-form'} className="bg-primaryColor rounded-[5px] text-white py-3 px-6">Leave a review</Link>
            </div>
            <div className="flex flex-col pb-8 !gap-4 border-b border-gray-300">
                <div className="flex items-center !gap-2">
                    <div className="size-8 bg-subtleGray bg-cover bg-center rounded-full" style={{ backgroundImage: `url(${IkonIcon})` }}>
                    </div>
                    <p className="text-black text-2xl font-semibold">{"Joseph Etuk"}</p>
                </div>
                <div className="flex !gap-4 items-center">
                    <div className="flex !gap-1">
                        <FaStar size={18} color="#F9B900" style={{ fill: "currentcolor" }} />
                        <FaStar size={18} color="#F9B900" style={{ fill: "currentcolor" }} />
                        <FaRegStar size={18} color="#F9B900" style={{ fill: "currentcolor" }} />
                        <FaRegStar size={18} color="#F9B900" style={{ fill: "currentcolor" }} />
                        <FaRegStar size={18} color="#F9B900" style={{ fill: "currentcolor" }} />
                    </div>
                    <p className="text-xs text-subtleGray">{"2 months ago"}</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start !gap-4 text-subtleGray"><p className="md:max-w-[60%] text-base">I recently had the pleasure of working with [Realtor's Name] from [Real Estate Agency] and I cannot express how grateful I am for the outstanding service I received. From the very beginning, [Realtor's Name] demonstrated a level of professionalism and expertise that immediately put me at ease during the daunting process of buying a home.</p>
                    <div className="flex !gap-4 text-sm">
                        <div className="flex items-center"><AiTwotoneLike size={20} style={{ fill: "currentcolor" }} /> {"5"}</div>
                        <div className="flex items-center"><AiTwotoneDislike size={20} style={{ fill: "currentcolor" }} /> {"10"}</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col pb-8 !gap-4 border-b border-gray-300">
                <div className="flex items-center !gap-2">
                    <div className="size-8 bg-subtleGray bg-cover bg-center rounded-full" style={{ backgroundImage: `url(${IkonIcon})` }}>
                    </div>
                    <p className="text-black text-2xl font-semibold">{"Joseph Etuk"}</p>
                </div>
                <div className="flex !gap-4 items-center">
                    <div className="flex !gap-1">
                        <FaStar size={18} color="#F9B900" style={{ fill: "currentcolor" }} />
                        <FaStar size={18} color="#F9B900" style={{ fill: "currentcolor" }} />
                        <FaRegStar size={18} color="#F9B900" style={{ fill: "currentcolor" }} />
                        <FaRegStar size={18} color="#F9B900" style={{ fill: "currentcolor" }} />
                        <FaRegStar size={18} color="#F9B900" style={{ fill: "currentcolor" }} />
                    </div>
                    <p className="text-xs text-subtleGray">{"2 months ago"}</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start !gap-4 text-subtleGray"><p className="md:max-w-[60%] text-base">I recently had the pleasure of working with [Realtor's Name] from [Real Estate Agency] and I cannot express how grateful I am for the outstanding service I received. From the very beginning, [Realtor's Name] demonstrated a level of professionalism and expertise that immediately put me at ease during the daunting process of buying a home.</p>
                    <div className="flex !gap-4 text-sm">
                        <div className="flex items-center"><AiTwotoneLike size={20} style={{ fill: "currentcolor" }} /> {"5"}</div>
                        <div className="flex items-center"><AiTwotoneDislike size={20} style={{ fill: "currentcolor" }} /> {"10"}</div>
                    </div>
                </div>
            </div>
            <Link to={`?tab=reviews&page_load=2`} className="text-xl text-primaryColor underline font-semibold">See more Review</Link>
            <ReviewForm />
        </div>
    )
}
