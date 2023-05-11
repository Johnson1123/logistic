import React from "react";
import { reviews } from "../../../content/review";
import { Rate } from "antd";
import "./Review.scss";

function Review() {
  return (
    <div className="review__con box-shadow">
      <p className="title p-text">Review</p>
      {reviews.map((review, index) => {
        return (
          <div className="review__box flex" key={index}>
            <div className="box p-text col-1">
              <img src={review.image} alt={review.name} />
            </div>
            <div className="col-2">
              <div className="box p-text col-rating flex">
                <p
                  className={
                    review.name.length > 10
                      ? "p-text small-title name trucate"
                      : "p-text small-title"
                  }
                >
                  {review.name}
                </p>
                <div className="p-text">
                  <Rate
                    allowHalf
                    count={5}
                    value={review.rating}
                    style={{
                      color: "green",
                      fontSize: "calc(4px + 6 * ((100vw - 320px) / 680))",
                      marginInlineEnd: 0,
                      padding: 0,
                    }}
                    disabled
                  />
                </div>
              </div>
              <p className="box p-text col-3">{review.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Review;
