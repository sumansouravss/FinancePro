export default function SummaryCard({ title, value, color }) {
  return (
    <div className="card">
      <p>{title}</p>
      <h2 className={color}>{value}</h2>
    </div>
  );
}
