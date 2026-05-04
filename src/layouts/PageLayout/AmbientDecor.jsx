/**
 * Soft aurora orbs + faint “constellation” sparks (no grid / dot pattern).
 */
const ORBS = [
  { size: 200, top: '6%', left: '2%', delay: '0s', duration: '26s' },
  { size: 140, top: '48%', left: '86%', delay: '-5s', duration: '20s' },
  { size: 240, top: '62%', left: '8%', delay: '-10s', duration: '30s' },
  { size: 110, top: '18%', left: '78%', delay: '-3s', duration: '17s' },
  { size: 170, top: '52%', left: '44%', delay: '-15s', duration: '22s' },
]

const SPARKS = [
  { top: '12%', left: '18%', s: 3, d: '0s', dur: '5.5s' },
  { top: '28%', left: '62%', s: 2, d: '-1.2s', dur: '7s' },
  { top: '44%', left: '34%', s: 4, d: '-2.4s', dur: '6.2s' },
  { top: '18%', left: '88%', s: 2, d: '-0.8s', dur: '8s' },
  { top: '72%', left: '22%', s: 3, d: '-3.1s', dur: '5s' },
  { top: '58%', left: '76%', s: 2, d: '-4s', dur: '6.8s' },
  { top: '8%', left: '48%', s: 2, d: '-2s', dur: '7.4s' },
  { top: '36%', left: '8%', s: 3, d: '-1.5s', dur: '5.8s' },
  { top: '84%', left: '52%', s: 2, d: '-3.6s', dur: '6.5s' },
  { top: '22%', left: '92%', s: 4, d: '-0.4s', dur: '5.2s' },
]

const AmbientDecor = () => {
  return (
    <div className='page-ambient' aria-hidden>
      <div className='page-ambient__shimmer' />
      {ORBS.map((orb, i) => (
        <div
          key={`o-${i}`}
          className='page-ambient__orb'
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            animationDelay: orb.delay,
            animationDuration: orb.duration,
          }}
        />
      ))}
      {SPARKS.map((sp, i) => (
        <span
          key={`s-${i}`}
          className='page-ambient__spark'
          style={{
            top: sp.top,
            left: sp.left,
            width: sp.s,
            height: sp.s,
            animationDelay: sp.d,
            animationDuration: sp.dur,
          }}
        />
      ))}
      <div className='page-ambient__patterns'>
        <div className='page-ambient__pattern page-ambient__pattern--stripes' />
        <div className='page-ambient__pattern page-ambient__pattern--dots' />
        <div className='page-ambient__pattern page-ambient__pattern--mesh' />
      </div>
    </div>
  )
}

export default AmbientDecor
