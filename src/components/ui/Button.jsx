export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm"
    >
      {children}
    </button>
  );
}
