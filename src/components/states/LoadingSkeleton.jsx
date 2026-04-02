export default function LoadingSkeleton() {
  return (
    <div className="card animate-pulse space-y-3">
      <div className="h-4 bg-white/10 rounded w-1/2" />
      <div className="h-6 bg-white/10 rounded w-3/4" />
      <div className="h-2 bg-white/10 rounded w-full" />
    </div>
  );
}