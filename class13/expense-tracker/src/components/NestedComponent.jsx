export default function NestedComponent({children}) {
  return (
    <div>
      <h1 className="text-5xl">Hey</h1>
      {children}
    </div>
  )
}