"use client";

import Lottie from "react-lottie";

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../assets/loading.json"),
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
      <h1>Loading...</h1>
    </>
  );
}
