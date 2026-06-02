import FadeIn from '@/components/FadeIn'
import { toolCategories } from '@/lib/data'

export default function Tools() {
  return (
    <section id="tools" className="py-24 bg-[#0e0e1a]">
      <div className="max-w-[1160px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="section-tag inline-flex">My Toolkit</div>
            <h2
              className="font-black mb-3"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              }}
            >
              Tools I Use
            </h2>
            <p className="text-[#7070a0] max-w-[520px] mx-auto text-[1.05rem]">
              Technologies and platforms I work with daily to get things done
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {toolCategories.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 0.08}>
              <div>
                <h4
                  className="text-[1rem] font-bold text-[#e2e2f0] mb-4"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {cat.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-[0.85rem] font-medium text-[#e2e2f0] transition-all duration-300 hover:text-[#9b5af5] hover:-translate-y-0.5 cursor-default"
                      style={{
                        background: '#12121f',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      <span>{tool.icon}</span>
                      {tool.name}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
