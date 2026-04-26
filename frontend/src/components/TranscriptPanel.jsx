import { useEffect, useRef } from "react";

function TranscriptPanel({ lines, isRecording, isTranscribing, onStart, onStop }) {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <section
      className="panel"
      style={{
        "--panel-neon": "var(--neon-pink, #ff2d78)",
        "--panel-neon-rgb": "255,45,120",
      }}
    >
      <div className="panel-header">
        <span className="panel-label">1. MIC &amp; TRANSCRIPT</span>
        <span className={`panel-badge ${isRecording ? "badge-recording" : "badge-idle"}`}>
          {isRecording ? "RECORDING" : "IDLE"}
        </span>
      </div>

      <div className="mic-area">
        <button
          type="button"
          className={`mic-button ${isRecording ? "recording" : ""}`}
          onClick={isRecording ? onStop : onStart}
          title={isRecording ? "Stop recording" : "Start recording"}
        />
        <p className="mic-hint">
          {isRecording
            ? "Recording… click to stop."
            : "Click mic to start. Transcript appends every ~30s."}
        </p>
      </div>

      {isTranscribing && <p className="status">Transcribing…</p>}

      <div className="scroll-area" ref={listRef}>
        {lines.length === 0 ? (
          <p className="empty-state">No transcript yet — start the mic.</p>
        ) : (
          lines.map((line, index) => (
            <p key={`${index}-${line.slice(0, 20)}`} className="transcript-line fade-in">
              {line}
            </p>
          ))
        )}
      </div>
    </section>
  );
}

export default TranscriptPanel;