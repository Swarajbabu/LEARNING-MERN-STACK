import { useState } from "react";

function LikeButton() {
  const [isLike, setisLike] = useState(false);

  let Like = () => {
    setisLike(!isLike);
  };

  let LikeStyle = { color: "red" };

  return (
    <>
      <div>LikeButton</div>

      <p onClick={Like} style={{ cursor: "pointer" }}>
        {isLike ? (
          <i className="fa-solid fa-thumbs-up" style={LikeStyle}></i>
        ) : (
          <i className="fa-regular fa-thumbs-up"></i>
        )}
      </p>
    </>
  );
}

export default LikeButton;
