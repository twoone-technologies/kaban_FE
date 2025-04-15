import { useNavigate } from "react-router-dom";
import styles from "./aboutUsSection.module.css";
import { blankPic } from "~/assets/img";

export default function Headline({ id }: { id?: number }) {
  const Navigate = useNavigate();
  return (
    <div
      onClick={() => Navigate(`/blog/${id}`)}
      className={`grid grid-cols-1 gap-1 lg:gap-4 space-between pad-block-1 w-full sm:grid-cols-2 lg:grid-cols-3 ${styles.blogPost_container} justify-items-center items-center`}
    >
      <div className={styles.blogImg_container}>
        <img src={blankPic} alt="Blog post image" />
      </div>
      <div className="lg:w-full h-full lg:gap-7 flex flex-col lg:flex-row lg:col-span-2 justify-center">
        <div className="flex w-full md:flex-col justify-between md:justify-center items-center md:items-start">
          <div className="flex gap-1">
            <span className="fw-500">Full Name</span>
            <span className="md:hidden">•</span>
          </div>
          <div className="flex gap-1 items-center">
            <span className={styles.small_text}>11 Jan 2023</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center">
          <p className="fw-500">Category</p>
          <p className="fw-600">Blog title goes here</p>
        </div>
      </div>
    </div>
  );
}
