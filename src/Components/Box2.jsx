import React from "react";

const Box2 = ({ phead, mainHead, p1, p2, p3, image }) => {
  return (
    <div className="BoxContainers">
      <div className="BoxContainerspart1">
        <p>{phead}</p>
        <h1>{mainHead}</h1>
        <div className="BoxContainerspart1-part2">
          <img
            src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62745feec9b8bce42aba90eb_check.svg"
            alt=""
          />
          <p>{p1}</p>
        </div>
        <div className="BoxContainerspart1-part2">
          <img
            src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62745feec9b8bce42aba90eb_check.svg"
            alt=""
          />
          <p>{p2}</p>
        </div>
        <div className="BoxContainerspart1-part2">
          <img
            src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62745feec9b8bce42aba90eb_check.svg"
            alt=""
          />
          <p>{p3}</p>
        </div>
      </div>
      <div
        className="BoxContainerspart2"
        style={{
          borderRadius: "1rem 0rem 0rem 1rem",
          backgroundImage: `url(${image})`,
        }}
      ></div>
    </div>
  );
};

export default Box2;
