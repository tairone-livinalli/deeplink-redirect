"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Error from "@/components/Error";
import Loading from "@/components/Loading";

export default function Home() {
  const query = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = query.get("url");
    console.log("🚀 ~ file: page.tsx:15 ~ useEffect ~ url:", url);

    if (!url) {
      setIsLoading(false);
      return;
    }

    window.location.replace(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center">
      {isLoading ? <Loading /> : <Error />}
    </main>
  );
}
