import React, { useRef, useEffect } from "react";

const LoadingScreen = () => {
  const requestRef = useRef();
  // const canvas = requestRef.current;
  const [numStars, setNumStars] = React.useState(1900);
  const [radius, setRadius] = React.useState(
    "0." + Math.floor(Math.random() * 9) + 1
  );
  const [focalLength, setFocalLength] = React.useState();
  const [centerX, setCenterX] = React.useState();
  const [centerY, setCenterY] = React.useState();

  const [stars, setStars] = React.useState([]);
  const [i, setI] = React.useState();
  const [animate, setAnimate] = React.useState(true);

  const playAnimation = (time) => {
    requestAnimationFrame(playAnimation);
  };

  useEffect(() => {
    requestRef.initializeStars();
    playAnimation();
  }, []);

  function initializeStars() {
    setCenterX(canvas.width / 2);
    setCenterY(canvas.height / 2);
    setFocalLength(canvas.width * 2);

    let star;

    let starsArr = [];
    for (let i = 0; i < numStars; i++) {
      star = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
        o: "0." + Math.floor(Math.random() * 99) + 1,
      };
      starsArr.push(star);
    }
    setStars(starsArr);
  }

  return <canvas ref={requestRef}></canvas>;
};

export default LoadingScreen;
