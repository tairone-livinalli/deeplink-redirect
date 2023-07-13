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
    <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
      <Lottie
        style={{ maxHeight: "50vh", maxWidth: "50vh", marginBottom: "2rem" }}
        options={defaultOptions}
        isClickToPauseDisabled
      />
      <h1 className="antialiased w-full text-center">Loading...</h1>
    </div>
  );
}
