import type { Metadata } from "next";
import DownloadSection from "@/components/pdf/DownloadSection";

export const metadata: Metadata = {
  title:
    "2026 Night Shift Nurse Survival Bundle Printable PDF | Shift Scheduler, SBAR Handoff Report, Medication Timeline, Fatigue Tracker, Sleep Recovery Checklist \u2013 Digital Download",
  description:
    "Tired of scattered notes and burnout during 12-hour night shifts in 2026? This hyper-specific printable bundle is designed exclusively for shift-working RNs to stay organized, ensure safe handoffs, track meds, monitor fatigue, and protect your recovery sleep.",
  keywords: [
    "night shift nurse planner",
    "shift worker checklist",
    "nurse handoff sheet",
    "medication tracker nurses",
    "fatigue tracker printable",
    "sleep recovery nurse",
    "sbar report sheet",
    "2026 nurse planner",
    "rotating shift scheduler",
    "night shift survival kit",
    "rn brain sheet",
    "self care for nurses",
    "digital download nurse",
  ],
};

const includedPages = [
  {
    icon: "\u{1F319}",
    title: "Cover Page",
    desc: "Calming night-shift design with moon and stethoscope motifs in blues and greens.",
  },
  {
    icon: "\u{1F4C5}",
    title: "Rotating Shift Scheduler",
    desc: "Monthly/weekly calendar grid to plan your 12-hour day and night rotations across 4 weeks.",
  },
  {
    icon: "\u{1F4CB}",
    title: "SBAR Patient Handoff Sheet",
    desc: "Situation, Background, Assessment, Recommendation format with space for room and patient details.",
  },
  {
    icon: "\u{1F48A}",
    title: "Hourly Medication & Task Timeline",
    desc: "1900-0700 night shift time slots with checkboxes for meds, vitals, charting, and assessments.",
  },
  {
    icon: "\u{1F9EC}",
    title: "Daily Fatigue & Self-Care Tracker",
    desc: "1-10 alertness scale, sleep/caffeine/mood logging, self-care checklist, and quick action prompts.",
  },
  {
    icon: "\u{1F634}",
    title: "Post-Shift Sleep Recovery Checklist",
    desc: "Wind-down steps, caffeine cutoff rule, blackout tips, and a recovery day planner.",
  },
  {
    icon: "\u{1F4A1}",
    title: "Night Shift Tips & Self-Care Prompts",
    desc: "Snack ideas, micro-break reminders, burnout warning signs, and coping strategies.",
  },
  {
    icon: "\u{1F4D6}",
    title: "How to Use Guide",
    desc: "Instructions for every page plus pro tips on printing, laminating, and going digital.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0F1B2D] via-[#162A45] to-[#0F1B2D]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[15%] w-32 h-32 rounded-full bg-[rgba(43,168,154,0.08)]" />
          <div className="absolute top-40 right-[25%] w-20 h-20 rounded-full bg-[rgba(43,168,154,0.05)]" />
          <div className="absolute top-16 right-[40%] w-2 h-2 rounded-full bg-[rgba(255,255,255,0.15)]" />
          <div className="absolute top-32 right-[30%] w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.1)]" />
          <div className="absolute top-24 right-[50%] w-1 h-1 rounded-full bg-[rgba(255,255,255,0.12)]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 pt-16 pb-20 relative">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-white bg-[#1A7A6D] px-4 py-1.5 rounded">
              Printable PDF Bundle
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            2026 Night Shift
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2BA89A] leading-tight mb-6">
            Nurse Survival Bundle
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-[#4A9CC7] max-w-xl mb-2">
            Shift Scheduler - SBAR Handoff - Med Timeline
          </p>
          <p className="text-lg text-[#4A9CC7] max-w-xl mb-8">
            Fatigue Tracker - Sleep Recovery - Self-Care
          </p>

          <p className="text-base text-[rgba(255,255,255,0.5)] mb-3 max-w-lg">
            8 Printable Pages | Designed for 12-Hour Night Shift RNs
          </p>
          <p className="text-sm text-[rgba(255,255,255,0.35)] max-w-lg">
            Print unlimited copies or use on your tablet
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Description */}
          <div className="mb-12">
            <p className="text-lg text-[#1A1A2E] font-semibold leading-relaxed mb-4">
              Tired of scattered notes and burnout during 12-hour night shifts
              in 2026? This hyper-specific printable bundle is designed
              exclusively for shift-working RNs to stay organized, ensure safe
              handoffs, track meds, monitor fatigue, and protect your recovery
              sleep.
            </p>

            <p className="text-base text-[#4A4A6A] font-semibold mb-3">
              What&apos;s Included in the PDF Bundle:
            </p>

            <ul className="space-y-2 text-[#4A4A6A] mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#1A7A6D] mt-1">&#10003;</span>
                <span>
                  Rotating Shift Scheduler for your 2-4 week rotations
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1A7A6D] mt-1">&#10003;</span>
                <span>
                  SBAR Patient Handoff / Report Sheet with plenty of writing
                  space
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1A7A6D] mt-1">&#10003;</span>
                <span>
                  Hourly Night Shift Medication & Task Timeline (1900-0700
                  slots with checkboxes)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1A7A6D] mt-1">&#10003;</span>
                <span>
                  Daily Fatigue & Alertness Self-Care Tracker (1-10 scale +
                  action prompts)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1A7A6D] mt-1">&#10003;</span>
                <span>
                  Post-Shift Sleep Recovery Checklist & Wind-Down Planner
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1A7A6D] mt-1">&#10003;</span>
                <span>Quick Night Shift Tips & Self-Care Prompts page</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1A7A6D] mt-1">&#10003;</span>
                <span>Bonus: How to Use guide</span>
              </li>
            </ul>

            <p className="text-base text-[#4A4A6A] leading-relaxed mb-4">
              Print as many copies as you need or use digitally on your tablet.
              Perfect for rural hospital nurses, new grads, or experienced night
              shifters fighting fatigue.
            </p>
            <p className="text-sm text-[#8A8AA0] italic">
              Created with real shift life in mind.
            </p>
          </div>

          {/* Download */}
          <div className="bg-[#F8FAFB] rounded-xl p-8 mb-12 border border-[#E8ECF0]">
            <div className="text-center">
              <p className="text-sm text-[#4A4A6A] mb-6">
                Full 8-page bundle. Free download.
              </p>
              <DownloadSection />
              <p className="text-xs text-[#8A8AA0] mt-4">
                Free download. Print unlimited copies.
              </p>
            </div>
          </div>

          {/* What's Inside Preview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0F1B2D] mb-8 text-center">
              What&apos;s Inside: 8 Printable Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {includedPages.map((page) => (
                <div
                  key={page.title}
                  className="flex gap-4 p-4 rounded-lg border border-[#E8ECF0] hover:border-[#2BA89A] transition-colors"
                >
                  <div className="text-2xl flex-shrink-0 w-10 h-10 rounded-lg bg-[#E8F4F8] flex items-center justify-center">
                    {page.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#162A45] text-sm mb-1">
                      {page.title}
                    </h3>
                    <p className="text-xs text-[#4A4A6A] leading-relaxed">
                      {page.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who It's For */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0F1B2D] mb-6 text-center">
              Built For Night Shift RNs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-lg bg-[#E8F4F8]">
                <div className="text-2xl mb-3">{"\u{1F3E5}"}</div>
                <h3 className="font-semibold text-[#162A45] text-sm mb-2">
                  Rural Hospital Nurses
                </h3>
                <p className="text-xs text-[#4A4A6A]">
                  Limited resources? This bundle replaces multiple scattered
                  sheets with one organized system.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-[#FFF3E0]">
                <div className="text-2xl mb-3">
                  {"\u{1F469}\u200D\u2695\uFE0F}"}
                </div>
                <h3 className="font-semibold text-[#162A45] text-sm mb-2">
                  New Grad RNs
                </h3>
                <p className="text-xs text-[#4A4A6A]">
                  Structured SBAR sheets and med timelines help you build
                  confidence and safe habits.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-[#F0EAF5]">
                <div className="text-2xl mb-3">{"\u{1F525}"}</div>
                <h3 className="font-semibold text-[#162A45] text-sm mb-2">
                  Burned-Out Night Shifters
                </h3>
                <p className="text-xs text-[#4A4A6A]">
                  Fatigue tracking, sleep recovery tools, and burnout prevention
                  built right in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tags Section */}
      <section className="bg-[#F8FAFB] border-t border-[#E8ECF0]">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <p className="text-xs text-[#8A8AA0] font-semibold uppercase tracking-wider mb-4">
            Related Searches
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "night shift nurse planner",
              "shift worker checklist",
              "nurse handoff sheet",
              "medication tracker nurses",
              "fatigue tracker printable",
              "sleep recovery nurse",
              "sbar report sheet",
              "2026 nurse planner",
              "rotating shift scheduler",
              "night shift survival kit",
              "rn brain sheet",
              "self care for nurses",
              "digital download nurse",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-white border border-[#E8ECF0] text-[#4A4A6A]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F1B2D] border-t border-[rgba(43,168,154,0.15)]">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-xs text-[rgba(255,255,255,0.3)]">
            2026 Night Shift Nurse Survival Bundle
          </p>
          <p className="text-xs text-[rgba(255,255,255,0.2)] mt-1">
            Free printable PDF. For personal use only.
          </p>
        </div>
      </footer>
    </main>
  );
}
