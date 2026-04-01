import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const windDownItems = [
  { step: "Sunglasses on for commute home", detail: "Blocks morning light that signals wakefulness to your brain" },
  { step: "Head straight to bed \u2014 no detours", detail: "Every minute of wakefulness after shift reduces sleep quality" },
  { step: "Keep car cool (65-68F), avoid bright stops", detail: "Pre-pack snacks/gas to avoid fluorescent light exposure" },
  { step: "Do NOT check work email, schedule apps, or social media", detail: "Blue light + mental stimulation = 30+ min longer to fall asleep" },
  { step: "Change into sleep clothes immediately on arrival", detail: "Psychological signal: shift is over, recovery mode begins" },
  { step: "Warm shower (10 min) \u2192 core temp drops after \u2192 sleepiness", detail: "Scientifically proven to reduce sleep onset by 10-15 min" },
];

const blackoutItems = [
  "Blackout curtains (100% light-blocking, not just room-darkening)",
  "Seal door gaps with a towel or draft stopper",
  "Cover all LED lights (alarm clock, charger, smoke detector) with tape",
  "Eye mask as backup (contoured style avoids pressure on eyes)",
  "Phone face-down + Do Not Disturb + silenced",
  "White noise machine or earplugs (consistent sound blocks disruptions)",
];

const nutritionItems = [
  { tip: "Protein snack within 30 min of getting home", examples: "Peanut butter toast, yogurt + granola, cheese + crackers" },
  { tip: "Avoid heavy meals before sleep", examples: "Large meals cause GI discomfort and disrupt sleep architecture" },
  { tip: "Hydrate but stop fluids 1hr before sleep", examples: "16oz water on commute home, then taper to reduce bathroom trips" },
  { tip: "Avoid sugar/caffeine after 0300", examples: "Sugar spikes cause energy crash mid-sleep. Caffeine half-life = 5-6hrs" },
];

const recoveryDay = [
  { item: "Stay up until at least 2200-2300 (don't flip too early)", checked: true, note: "Gradual shift: push bedtime 2hrs later each recovery day" },
  { item: "Sleep window: aim for consistent 7-8hrs (e.g., 2300-0700)", checked: true, note: "Consistency matters more than total hours" },
  { item: "Power nap 20-90 min before next night shift if possible", checked: false, note: "Best 1700-1830. Set alarm! Longer naps cause grogginess." },
  { item: "Gentle movement: 15-30 min walk, yoga, or stretching", checked: true, note: "Avoid intense exercise within 4hrs of sleep" },
  { item: "Nourishing meal (protein + complex carbs + veggies)", checked: false, note: "Prep for next shift meals at the same time" },
  { item: "1 hour of non-work activity you enjoy", checked: true, note: "This prevents burnout \u2014 it's not optional" },
  { item: "Social connection (even 5-min call or text)", checked: false, note: "Isolation worsens shift work depression" },
  { item: "Set alarm to avoid oversleeping before next night", checked: false, note: "Oversleeping pushes your window later each cycle" },
];

const sleepLog = [
  { date: "03/31", bed: "0915", wake: "1530", hrs: "6.25", quality: "3", notes: "Woke 2x, neighbors noisy" },
  { date: "03/30", bed: "0845", wake: "1500", hrs: "6.25", quality: "2", notes: "Caffeine at 0400 \u2192 took 1hr to fall asleep" },
  { date: "03/29", bed: "0830", wake: "1530", hrs: "7", quality: "4", notes: "Blackout curtains working. Good sleep." },
  { date: "", bed: "", wake: "", hrs: "", quality: "", notes: "" },
];

export default function RecoveryChecklist() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Recovery & Rest</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>
            {"\u263E"} Post-Shift Sleep Recovery Checklist
          </Text>
          <Text style={sharedStyles.pageSubtitle}>
            Evidence-based wind-down protocol, blackout setup, nutrition, and recovery day planner.
          </Text>
        </View>

        {/* Tip callout */}
        <View
          style={{
            backgroundColor: colors.ice,
            borderLeftWidth: 2,
            borderLeftColor: colors.ocean,
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 6,
            paddingRight: 6,
            borderRadius: 2,
            marginBottom: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 8, marginRight: 4 }}>{"\u{1F4A1}"}</Text>
          <Text style={{ fontSize: 6, color: colors.ocean, fontFamily: "Helvetica-Bold" }}>
            Prioritize sleep to reset circadian rhythm after consecutive nights. 11+ hours between shifts is ideal for recovery.
          </Text>
        </View>

        {/* Caffeine Cutoff Strategy */}
        <View
          style={{
            backgroundColor: colors.goldPale,
            borderLeftWidth: 2,
            borderLeftColor: colors.warmOrange,
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 8,
            paddingRight: 8,
            borderRadius: 3,
            marginBottom: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 12, marginRight: 5 }}>{"\u2615"}</Text>
          <View>
            <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.warmOrange }}>
              CAFFEINE CUTOFF STRATEGY
            </Text>
            <Text style={{ fontSize: 5, color: colors.textMid, lineHeight: 1.3 }}>
              Last caffeine by 0300 if sleeping at 0900. Half-life = 5-6hrs (still in system at 1500). Even decaf has 2-15mg. Switch to water or herbal tea after 0300.
            </Text>
          </View>
        </View>

        {/* Section 1: Immediate Wind-Down Routine */}
        <View style={{ marginBottom: 4 }}>
          <Text style={sharedStyles.sectionTitle}>
            {"\u{1F697}"} Immediate Wind-Down Routine
          </Text>
          {windDownItems.map((item) => (
            <View key={item.step} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 2, marginLeft: 2 }}>
              <View style={{ ...sharedStyles.checkbox, width: 8, height: 8, marginTop: 0.5 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 6, color: colors.textDark, fontFamily: "Helvetica-Bold", lineHeight: 1.2 }}>
                  {item.step}
                </Text>
                <Text style={{ fontSize: 4, color: colors.textLight, fontFamily: "Helvetica-Oblique", lineHeight: 1.2 }}>
                  {item.detail}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Section 2: Blackout Tips */}
        <View style={{ marginBottom: 4 }}>
          <Text style={sharedStyles.sectionTitle}>
            {"\u{1F319}"} Blackout & Sleep Environment Setup
          </Text>
          <View style={{ flexDirection: "row", gap: 6 }}>
            <View style={{ flex: 1 }}>
              {blackoutItems.slice(0, 3).map((item) => (
                <View key={item} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 1.5 }}>
                  <View style={{ ...sharedStyles.checkbox, width: 7, height: 7 }} />
                  <Text style={{ fontSize: 5, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{item}</Text>
                </View>
              ))}
            </View>
            <View style={{ flex: 1 }}>
              {blackoutItems.slice(3, 6).map((item) => (
                <View key={item} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 1.5 }}>
                  <View style={{ ...sharedStyles.checkbox, width: 7, height: 7 }} />
                  <Text style={{ fontSize: 5, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={{ backgroundColor: colors.ice, borderRadius: 2, paddingTop: 2, paddingBottom: 2, paddingLeft: 5, paddingRight: 5, marginTop: 1, borderWidth: 0.5, borderColor: colors.tealPale }}>
            <Text style={{ fontSize: 4, color: colors.ocean, fontFamily: "Helvetica-Bold" }}>
              Ideal: 65-68F, completely dark, white noise 50-65dB, humidity 30-50%.
            </Text>
          </View>
        </View>

        {/* Section 3: Nutrition & Recovery Notes */}
        <View style={{ marginBottom: 4 }}>
          <Text style={sharedStyles.sectionTitle}>
            {"\u{1F373}"} Nutrition & Recovery Notes
          </Text>
          {nutritionItems.map((n) => (
            <View key={n.tip} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 2, marginLeft: 2 }}>
              <View style={{ ...sharedStyles.checkbox, width: 7, height: 7 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 5, color: colors.textDark, fontFamily: "Helvetica-Bold", lineHeight: 1.2 }}>{n.tip}</Text>
                <Text style={{ fontSize: 4, color: colors.textLight, fontFamily: "Helvetica-Oblique" }}>{n.examples}</Text>
              </View>
            </View>
          ))}
          <View style={{ backgroundColor: colors.softGreenPale, borderRadius: 2, paddingTop: 2, paddingBottom: 2, paddingLeft: 5, paddingRight: 5, marginTop: 1, borderWidth: 0.5, borderColor: colors.softGreenMuted }}>
            <Text style={{ fontSize: 4, color: colors.softGreen, fontFamily: "Helvetica-Bold" }}>
              Power nap tip: 20-90 min nap before shift (1700-1830) if possible. Set alarm. Melatonin: 0.3-5mg 30 min before sleep if needed.
            </Text>
          </View>
        </View>

        {/* Section 4: Recovery Day Planner */}
        <View style={{ marginBottom: 4 }}>
          <Text style={sharedStyles.sectionTitle}>
            {"\u{1F4C5}"} Recovery Day Planner
          </Text>
          <View
            style={{
              backgroundColor: colors.ice,
              borderRadius: 3,
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 6,
              paddingRight: 6,
              borderWidth: 0.5,
              borderColor: colors.tealPale,
            }}
          >
            {recoveryDay.map((r) => (
              <View key={r.item} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 2 }}>
                <View
                  style={{
                    width: 8, height: 8, borderWidth: 0.75,
                    borderColor: r.checked ? colors.teal : colors.tealMuted,
                    borderRadius: 1.5,
                    backgroundColor: r.checked ? colors.tealPale : undefined,
                    justifyContent: "center", alignItems: "center",
                    marginRight: 4, marginTop: 0.5,
                  }}
                >
                  {r.checked && <Text style={{ fontSize: 5, color: colors.teal, fontFamily: "Helvetica-Bold" }}>{"\u2713"}</Text>}
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 5, color: colors.textDark, fontFamily: "Helvetica-Bold", lineHeight: 1.2 }}>{r.item}</Text>
                  <Text style={{ fontSize: 4, color: colors.textLight, fontFamily: "Helvetica-Oblique" }}>{r.note}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Section 5: Sleep Hours Log */}
        <View style={{ marginBottom: 2 }}>
          <Text style={sharedStyles.sectionTitle}>
            {"\u{1F4A4}"} Sleep Hours Log (track 4 shifts)
          </Text>
          <View style={{ flexDirection: "row", backgroundColor: colors.deepNavy, paddingTop: 3, paddingBottom: 3, paddingLeft: 4, paddingRight: 4, borderTopLeftRadius: 3, borderTopRightRadius: 3 }}>
            {["Date", "Bed", "Wake", "Hrs", "Quality (1-5)", "Notes / Disruptions"].map((h) => (
              <View key={h} style={{ flex: h.includes("Notes") ? 2.5 : 1, alignItems: "center" }}>
                <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.tealLight, textTransform: "uppercase" }}>{h}</Text>
              </View>
            ))}
          </View>
          {sleepLog.map((row, i) => {
            const isSample = row.date !== "";
            return (
              <View key={i} style={{ flexDirection: "row", paddingTop: 2, paddingBottom: 2, paddingLeft: 4, paddingRight: 4, backgroundColor: isSample ? colors.sampleBlue : i % 2 === 0 ? colors.offWhite : colors.white, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray }}>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <Text style={{ fontSize: 5, color: isSample ? colors.sampleText : "transparent", fontFamily: isSample ? "Helvetica-Oblique" : "Helvetica" }}>{row.date || "."}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <Text style={{ fontSize: 5, color: isSample ? colors.sampleText : "transparent" }}>{row.bed || "."}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <Text style={{ fontSize: 5, color: isSample ? colors.sampleText : "transparent" }}>{row.wake || "."}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: isSample ? colors.sampleText : "transparent" }}>{row.hrs || "."}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <Text style={{ fontSize: 5, color: isSample ? colors.sampleText : "transparent" }}>{row.quality || "."}</Text>
                </View>
                <View style={{ flex: 2.5, paddingLeft: 3 }}>
                  {isSample ? (
                    <Text style={{ fontSize: 4, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>{row.notes}</Text>
                  ) : (
                    <View style={{ height: 8, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray }} />
                  )}
                </View>
              </View>
            );
          })}
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 2 }}>
            <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: colors.sampleBlue, marginRight: 2 }} />
            <Text style={{ fontSize: 4, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>
              Blue rows = sample sleep data. Note disruptions (noise, caffeine, screen time) to find patterns.
            </Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>{"\u263E"} 2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 6 of 8</Text>
      </View>
    </Page>
  );
}
