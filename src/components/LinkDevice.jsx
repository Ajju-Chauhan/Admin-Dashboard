
export default function LinkDevice({ qrData, linkCode, expiresAt }) {
  return (
    <main className="container mt-5">
      <section>
        <h2>Link Your Mobile Device</h2>
        <p>Scan the QR code below with your mobile app or enter the code manually.</p>
        <figure>
          <img src={`data:image/png;base64,${qrData}`} alt="QR Code" />
        </figure>
        <p className="fs-4">Code: <strong>{linkCode}</strong></p>
        <p>This code expires at {expiresAt} UTC (in ~5 minutes).</p>
        <form method="POST" action="{{ url_for('continue_after_link') }}">
          <button type="submit" className="btn btn-primary">Continue</button>
        </form>
      </section>
    </main>
  );
}
