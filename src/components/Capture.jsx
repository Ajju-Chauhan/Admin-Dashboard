import React, { useEffect, useRef } from "react";

export default function Capture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });
  }, []);

  const capture = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 320, 240);
    const imageData = canvasRef.current.toDataURL("image/png");
    console.log("Captured Image Data:", imageData);
    // You can send this image to your backend
  };

  return (
    <main className="container my-4">
      <section>
        <h2>Face Capture</h2>
        <p>Click the button below to capture your image for comparison.</p>
        <div>
          <video ref={videoRef} width="320" height="240" autoPlay></video>
          <canvas ref={canvasRef} width="320" height="240" hidden></canvas>
        </div>
        <button className="btn btn-success mt-3" onClick={capture}>
          Capture Image
        </button>
      </section>
    </main>
  );
}
