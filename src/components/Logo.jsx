export default function Logo({ height = 30 }) {
  return (
    <img
      src="/arusol-logo.png"
      alt="Arusol Technologies"
      height={height}
      style={{ height, width: 'auto', display: 'block' }}
    />
  )
}
