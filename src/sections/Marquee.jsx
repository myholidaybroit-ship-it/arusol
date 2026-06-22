import './Marquee.css'

const stack = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'React Native',
  'Python', 'PostgreSQL', 'AWS', 'Figma', 'Meta Ads', 'Google Ads', 'After Effects',
]

export default function Marquee() {
  const row = [...stack, ...stack]
  return (
    <section className="marquee-wrap">
      <div className="container">
        <p className="marquee-label reveal">The stack &amp; tools we build with</p>
      </div>
      <div className="marquee">
        <div className="marquee__track">
          {row.map((s, i) => (
            <span key={i} className="marquee__item">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
