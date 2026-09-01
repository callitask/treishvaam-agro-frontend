export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white px-6">
      <div className="w-10 h-10 border-4 border-brand-primary border-t-transparent rounded-full animate-spin mb-4" aria-label="Loading" />
      <p className="text-brand-textMuted font-medium animate-pulse">Loading enterprise catalog...</p>
    </div>
  );
}
