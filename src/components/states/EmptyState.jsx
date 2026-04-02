export default function EmptyState({ message }) {
  return (
    <div className="flex flex-col items-center py-10 text-gray-400">
      <span className="text-3xl mb-2">📭</span>
      <p>{message}</p>
    </div>
  );
}