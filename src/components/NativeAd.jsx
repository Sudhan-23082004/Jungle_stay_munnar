import { useEffect } from "react";

export default function NativeAd({ adId }) {
  useEffect(() => {
    // Create script dynamically
    const script = document.createElement("script");
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = `//pl27928345.effectivegatecpm.com/${adId}/invoke.js`;

    // Append script to container
    const container = document.getElementById(`container-${adId}`);
    container.appendChild(script);

    // Cleanup on unmount
    return () => {
      container.innerHTML = "";
    };
  }, [adId]);

  return (
    <div
      id={`container-${adId}`}
      style={{ width: "100%", margin: "20px auto", textAlign: "center" }}
    ></div>
  );
}
