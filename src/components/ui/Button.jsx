export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}