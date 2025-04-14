export function Button({ children, className }: any) {
  return <button className={`px-4 py-2 bg-green-600 text-white rounded ${className}`}>{children}</button>
}