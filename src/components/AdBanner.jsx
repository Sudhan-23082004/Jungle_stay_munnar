import { useEffect } from "react";

export default function AdBanner({ adKey, width, height }) {
  useEffect(() => {
    // Create the script element dynamically
    const script = document.createElement("script");
    script.src = `//www.highperformanceformat.com/${adKey}/invoke.js`;
    script.async = true;

    // Create the atOptions variable
    window.atOptions = {
      key: adKey,
      format: "iframe",
      height: height,
      width: width,
      params: {}
    };

    // Append the script to this banner container
    const container = document.getElementById(`ad-container-${adKey}`);
    container.appendChild(script);

    // Cleanup on unmount (to avoid duplicates)
    return () => {
      container.innerHTML = "";
    };
  }, [adKey, width, height]);

  return (
    <div
      id={`ad-container-${adKey}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        margin: "30px auto",
        textAlign: "center",
      }}
    ></div>
  );
}
