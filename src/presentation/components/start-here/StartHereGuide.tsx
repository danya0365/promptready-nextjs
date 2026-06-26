import { START_STEPS, START_FAQ } from "@/src/domin/data/start-here";
import SectionHeading from "../landing/atoms/SectionHeading";

export default function StartHereGuide() {
  return (
    <div className="py-24 px-6 max-w-3xl mx-auto">
      <SectionHeading
        badge="Start Here"
        title="มือใหม่เริ่มที่นี่"
        description="จาก 0 ถึงใช้งาน OpenClaw จริง — ทำตามเส้นทางเรียนรู้ 4 ขั้นนี้ภายในวันเดียว"
      />

      <ol className="relative border-l border-border ml-3 mt-8 space-y-12">
        {START_STEPS.map((step) => (
          <li key={step.order} className="ml-8">
            {/* Step number marker */}
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold ring-4 ring-background">
              {step.order}
            </span>

            <h3 className="text-xl font-bold text-text-primary mb-2">
              {step.title}
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              {step.description}
            </p>

            {step.code && (
              <pre className="glass rounded-xl p-4 overflow-x-auto text-sm">
                <code className={step.language ? `language-${step.language}` : undefined}>
                  {step.code}
                </code>
              </pre>
            )}
          </li>
        ))}
      </ol>

      {/* FAQ */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-text-primary mb-6">คำถามที่พบบ่อย</h2>
        <div className="space-y-4">
          {START_FAQ.map((faq) => (
            <div
              key={faq.question}
              className="glass rounded-2xl p-6 border border-border"
            >
              <h3 className="font-semibold text-text-primary mb-2">
                {faq.question}
              </h3>
              <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
