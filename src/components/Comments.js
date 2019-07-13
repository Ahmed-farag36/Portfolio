import React from "react";

export default props => {
  return (
    <div id="comments">
      <h3>COMMENTS:</h3>
      <div id="body">
        {Array(10)
          .fill("")
          .map((comment, i) => (
            <div key={i} className="comment">
              <span className="user">User1:</span>
              <span className="content">
                Hello this is my first comment Hello this is my first comment
                Hello this is my first comment Hello this is my first comment
                Hello this is my first comment Hello this is my first comment
                Hello this is my first comment Hello this is my first comment.
              </span>
            </div>
          ))}
      </div>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Comment" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
