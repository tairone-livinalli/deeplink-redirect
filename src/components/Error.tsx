"use client";

import Lottie from "react-lottie";

export default function Error() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../assets/error.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isClickToPauseDisabled
      />
      <h1>Something wrong happened! Try again later...</h1>
    </>
  );
}
