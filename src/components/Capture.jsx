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
    <main className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow-lg p-4 w-100 d-flex align-items-center text-center" style={{ maxWidth: "500px" }}>
        <h2 className="mb-3">📷 Face Capture</h2>
        <p className="text-muted mb-4">
          Click the button below to capture your image for comparison.
        </p>

        <div className="mb-3">
          <video
            ref={videoRef}
            width="320"
            height="240"
            autoPlay
            className="rounded border border-secondary"
          ></video>
          <canvas ref={canvasRef} width="320" height="240" hidden></canvas>
        </div>

        <div className="d-grid gap-2 w-100">
          <button className="btn btn-success btn-lg" onClick={capture}>
            Capture Image
          </button>
        </div>
      </div>
    </main>
  );
}
