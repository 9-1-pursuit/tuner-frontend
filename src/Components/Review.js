import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  const { genre, rating, reviewer, content, id } = review;

  return (
    <div className="Review">
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <>
          <h5>{reviewer}</h5>
          <h4>
            {genre} <span>{rating}</span>
          </h4>
          <p>{content}</p>
          <button onClick={() => handleDelete(id)}>delete</button>
        </>
      )}
      <button onClick={toggleView}>edit this review</button>
    </div>
  );
}

export default Review;
