export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-[#020617] border border-white/10 rounded-xl p-4 ${className}`}
    >
      {children}
    </div>
  );
}