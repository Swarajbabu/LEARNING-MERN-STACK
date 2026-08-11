export default function Price({oldPrice,newPrice}) {
  return (
    <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
      <p style={{ textDecoration: "line-through", opacity: 0.6 }}>{oldPrice}</p>
      <p style={{ fontWeight: "bold" }}>{newPrice}</p>
    </div>
  );
}
