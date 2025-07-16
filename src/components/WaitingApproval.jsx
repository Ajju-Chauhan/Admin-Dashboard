import React, { useEffect, useState } from "react";

export default function WaitingApproval({ loginId }) {
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`/push-status?login_id=${loginId}`)
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.status);
          if (data.status === "approved") {
            window.location.href = `/push-approved?login_id=${loginId}`;
          } else if (["denied", "expired"].includes(data.status)) {
            setTimeout(() => {
              window.location.href = "/login";
            }, 3000);
          }
        });
    }, 3000);
    return () => clearInterval(interval);
  }, [loginId]);

  return (
    <main className="container text-center mt-5">
      <h2>Waiting for Approval on Your Mobile Device...</h2>
      <p>If you do not respond within 5 minutes, this request will expire.</p>
      <div className="my-3">Status: {status}</div>
      <form method="post" action="/reset_link">
        <button type="submit" className="btn btn-secondary">Reset Push-Login</button>
      </form>
    </main>
  );
}
