function SayHellow() {
  console.log("Say Hellow");
}

export default function Button() {
  return (
    <div style={{ padding: "20px" }}>
      {/* Clickable Elements */}
      <div>
        <h3>Clickable Elements</h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button onClick={SayHellow}>Click Me!</button>
          <button onDoubleClick={SayHellow}>Double Click Me!</button>
          <button onMouseDown={SayHellow}>Mouse Down!</button>
          <button onMouseUp={SayHellow}>Mouse Up!</button>
          <button onKeyDown={SayHellow}>Key Down!</button>
          <button onKeyUp={SayHellow}>Key Up!</button>
        </div>
      </div>

      <br />

      {/* Non-Clickable Elements */}
      <div>
        <h3>Non-Clickable Elements</h3>
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <p onClick={SayHellow} style={{ margin: 0 }}>
            vite] Failed to reload /src/Button.jsx. This could be due to syntax
            errors or importing non-existent modules. (see errors above)
            overrideMethod @ installHook.js:1 (anonymous) @ client:932
            warnFailedUpdate @ client:180 fetchUpdate @ client:211 await in
            fetchUpdate queueUpdate @ client:188 (anonymous) @ client:973
            handleMessage @ client:972 await in handleMessage (anonymous) @
            client:456 dequeue @ client:478 (anonymous) @ client:470 enqueue @
            client:464 (anonymous) @ client:456 onMessage @ client:298
            (anonymous) @ client:412 client:938 GET
            http://localhost:5173/src/Button.jsx?t=1786443033432
            net::ERR_INTERNET_DISCONNECTED importUpdatedModule @ client:938
            fetchUpdate @ client:209 queueUpdate @ client:188 (anonymous) @
            client:973 handleMessage @ client:972 await in handleMessage
            (anonymous) @ client:456 dequeue @ client:478 (anonymous) @
            client:470 enqueue @ client:464 (anonymous) @ client:456 onMessage @
            client:298 (anonymous) @ client:412 installHook.js:1 [vite] Failed
            to reload /src/Button.jsx. This could be due to syntax
          </p>
          <p>asdfgbfbv</p>
          <span onMouseEnter={SayHellow}>Hoverable Span (Enter)</span>
          <div onMouseLeave={SayHellow}>Hoverable Div (Leave)</div>
        </div>
      </div>
    </div>
  );
}
