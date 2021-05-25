import { useState } from "react";
import X from "../../../assets/images/X.svg";
import O from "../../../assets/images/O.svg";

const GridCel = ({ content, id, onClick, classes, symbol }) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <div xs={4} className={classes}>
      <span
        className={content}
        onClick={() => onClick(id)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          ...(hover &&
            !content && {
              backgroundImage: `url(${symbol === "X" ? X : O})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }),
        }}
      ></span>
    </div>
  );
};

export default GridCel;
