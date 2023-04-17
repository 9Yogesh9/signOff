import React from "react";
import Tilt from "react-parallax-tilt";
import "./tiltScale.scss";

const TiltScale = (data) => {
  const scale = 1.05;
  const { name, comments } = data.details;

  return (
    <div className="card_container">
      <Tilt
        scale={scale}
        transitionSpeed={2500}
        glareEnable={true}
        glareMaxOpacity={0.7}
        glarePosition={"all"}
        glareColor={"#57d11d3d"}
        tiltMaxAngleX={3}
        tiltMaxAngleY={3}
      >
        <div className="tilt-scale">
          <div className="details_holder">
            <h1>{name}</h1>
            <p>{comments}</p>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default TiltScale;
