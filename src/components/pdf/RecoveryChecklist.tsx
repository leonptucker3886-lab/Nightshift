import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const windDownItems = [
  { step: "Sunglasses on for commute home", detail: "Blocks morning light that signals wakefulness to your brain" },
  { step: "Head straight to bed \u2014 no detours", detail: "Every minute of wakefulness after shift reduces sleep quality" },
  { step: "Keep car cool (65-68F), avoid bright stops", detail: "Pre-pack snacks/gas to avoid fluorescent light exposure" },
  { step: "Change into sleep clothes immediately on arrival", detail: "Psychological signal: shift is over, recovery mode begins" },
  { step: "Warm shower (10 min) \u2192 core temp drops \u2192 sleepiness", detail: "Proven to reduce sleep onset by 10-15 min" },
];

const blackoutItems = [
  "Blackout curtains (100% light-blocking, not just room-darkening)",
  "Seal door gaps with a towel or draft stopper",
  "Cover all LED lights (alarm clock, charger, smoke detector) with tape",
  "Eye mask as backup (contoured style avoids pressure on eyes)",
  "Phone face-down + Do Not Disturb + silenced",
  "White noise machine or earplugs (50-65dB blocks disruptions)",
];

const blueLightItems = [
  "No screens 1 hour before sleep (phone, tablet, laptop, TV)",
  "If screens needed: use Night Shift / blue-light filter + lowest brightness",
  "Wear amber blue-light blocking glasses on commute home",
  "Avoid bright bathroom lights after shower \u2014 use dim nightlight",
  "Set phone to auto Night Mode at 0700 (when you get home)",
];

const nutritionItems = [
  { tip: "Light protein snack within 30 min of getting home", examples: "Peanut butter toast, yogurt + granola, cheese + crackers" },
  { tip: "Avoid heavy meals before sleep", examples: "Large meals cause GI discomfort and disrupt sleep architecture" },
  { tip: "Hydrate but stop fluids 1hr before sleep", examples: "16oz water on commute home, then taper to reduce bathroom trips" },
  { tip: "Avoid sugar/caffeine after 0300", examples: "Sugar spikes cause crash mid-sleep. Caffeine half-life = 5-6hrs" },
];

const recoveryDay = [
  { item: "Stay up until at least 2200-2300 (don't flip too early)", checked: true, note: "Gradual shift: push bedtime 2hrs later each recovery day" },
  { item: "Consistent sleep window: 7-8hrs (e.g., 2300-0700)", checked: true, note: "Consistency matters more than total hours" },
  { item: "11+ hours between last shift and next sleep", checked: true, note: "Allows circadian rhythm to begin resetting" },
  { item: "Power nap 20-90 min before next night shift", checked: false, note: "Best 1700-1830. Set alarm! Longer naps cause grogginess." },
  { item: "Gentle movement: 15-30 min walk, yoga, or stretching", checked: true, note: "Avoid intense exercise within 4hrs of sleep" },
  { item: "Nourishing meal (protein + complex carbs + veggies)", checked: false, note: "Prep for next shift meals at the same time" },
  { item: "1 hour of non-work activity you enjoy", checked: true, note: "This prevents burnout \u2014 it is not optional" },
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
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Recovery & Rest</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>
            {"\u263E"} Post-Shift Sleep Recovery Checklist
          </Text>
          <Text style={sharedStyles.pageSubtitle}>
            Wind-down protocol, blackout setup, blue-light avoidance, nutrition, recovery day planner, sleep log.
          </Text>
        </View>

        {/* Tip callout */}
        <View style={{ backgroundColor: colors.ice, borderLeftWidth: 2, borderLeftColor: colors.ocean, paddingTop: 3, paddingBottom: 3, paddingLeft: 6, paddingRight: 6, borderRadius: 2, marginBottom: 4, flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 8, marginRight: 4 }}>{"\u{1F4A1}"}</Text>
          <Text style={{ fontSize: 6, color: colors.ocean, fontFamily: "Helvetica-Bold" }}>
            Prioritize sleep reset {"\u2014"} it takes 2-4 days after consecutive nights. 11+ hours between shifts is ideal.
          </Text>
        </View>

        {/* Caffeine Cutoff */}
        <View style={{ backgroundColor: colors.goldPale, borderLeftWidth: 2, borderLeftColor: colors.warmOrange, paddingTop: 3, paddingBottom: 3, paddingLeft: 6, paddingRight: 6, borderRadius: 2, marginBottom: 4, flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 10, marginRight: 4 }}>{"\u2615"}</Text>
          <View>
            <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.warmOrange }}>CAFFEINE CUTOFF (after 0300)</Text>
            <Text style={{ fontSize: 4, color: colors.textMid }}>Last caffeine by 0300 if sleeping at 0900. Half-life = 5-6hrs. Switch to water or herbal tea.</Text>
          </View>
        </View>

        {/* Immediate Wind-Down */}
        <View style={{ marginBottom: 3 }}>
          <Text style={sharedStyles.sectionTitle}>Immediate Wind-Down Routine</Text>
          {windDownItems.map((item) => (
            <View key={item.step} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 1.5 }}>
              <View style={{ ...sharedStyles.checkbox, width: 7, height: 7, marginTop: 0.5 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 5, color: colors.textDark, fontFamily: "Helvetica-Bold", lineHeight: 1.2 }}>{item.step}</Text>
                <Text style={{ fontSize: 4, color: colors.textLight, fontFamily: "Helvetica-Oblique" }}>{item.detail}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Blackout + Blue-Light side by side */}
        <View style={{ flexDirection: "row", gap: 5, marginBottom: 3 }}>
          <View style={{ flex: 1 }}>
            <Text style={sharedStyles.sectionTitle}>Blackout & Sleep Environment</Text>
            {blackoutItems.map((item) => (
              <View key={item} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 1 }}>
                <View style={{ ...sharedStyles.checkbox, width: 6, height: 6 }} />
                <Text style={{ fontSize: 4, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{item}</Text>
              </View>
            ))}
            <View style={{ backgroundColor: colors.ice, borderRadius: 2, paddingTop: 1.5, paddingBottom: 1.5, paddingLeft: 4, paddingRight: 4, marginTop: 1, borderWidth: 0.5, borderColor: colors.tealPale }}>
              <Text style={{ fontSize: 3.5, color: colors.ocean, fontFamily: "Helvetica-Bold" }}>Ideal: 65-68F, completely dark, white noise 50-65dB, humidity 30-50%</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={sharedStyles.sectionTitle}>Blue-Light Avoidance</Text>
            {blueLightItems.map((item) => (
              <View key={item} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 1 }}>
                <View style={{ ...sharedStyles.checkbox, width: 6, height: 6 }} />
                <Text style={{ fontSize: 4, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{item}</Text>
              </View>
            ))}
            <View style={{ backgroundColor: colors.softGreenPale, borderRadius: 2, paddingTop: 1.5, paddingBottom: 1.5, paddingLeft: 4, paddingRight: 4, marginTop: 1, borderWidth: 0.5, borderColor: colors.softGreenMuted }}>
              <Text style={{ fontSize: 3.5, color: colors.softGreen, fontFamily: "Helvetica-Bold" }}>Blue light suppresses melatonin for 60-90 min. Amber glasses + dim lights = faster sleep.</Text>
            </View>
          </View>
        </View>

        {/* Nutrition + Power Nap */}
        <View style={{ marginBottom: 3 }}>
          <Text style={sharedStyles.sectionTitle}>Nutrition & Recovery Notes</Text>
          {nutritionItems.map((n) => (
            <View key={n.tip} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 1.5 }}>
              <View style={{ ...sharedStyles.checkbox, width: 6, height: 6 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 4.5, color: colors.textDark, fontFamily: "Helvetica-Bold", lineHeight: 1.2 }}>{n.tip}</Text>
                <Text style={{ fontSize: 3.5, color: colors.textLight, fontFamily: "Helvetica-Oblique" }}>{n.examples}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Recovery Day Planner */}
        <View style={{ marginBottom: 3 }}>
          <Text style={sharedStyles.sectionTitle}>Recovery Day Planner (sample filled)</Text>
          <View style={{ backgroundColor: colors.ice, borderRadius: 2, paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5, borderWidth: 0.5, borderColor: colors.tealPale }}>
            {recoveryDay.map((r) => (
              <View key={r.item} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 1.5 }}>
                <View style={{ width: 7, height: 7, borderWidth: 0.75, borderColor: r.checked ? colors.teal : colors.tealMuted, borderRadius: 1.5, backgroundColor: r.checked ? colors.tealPale : undefined, justifyContent: "center", alignItems: "center", marginRight: 3, marginTop: 0.5 }}>
                  {r.checked && <Text style={{ fontSize: 4, color: colors.teal, fontFamily: "Helvetica-Bold" }}>{"\u2713"}</Text>}
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 4.5, color: colors.textDark, fontFamily: "Helvetica-Bold", lineHeight: 1.2 }}>{r.item}</Text>
                  <Text style={{ fontSize: 3.5, color: colors.textLight, fontFamily: "Helvetica-Oblique" }}>{r.note}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Sleep Hours Log */}
        <Text style={sharedStyles.sectionTitle}>Sleep Hours Log (track 4 shifts)</Text>
        <View style={{ flexDirection: "row", backgroundColor: colors.deepNavy, paddingTop: 2, paddingBottom: 2, paddingLeft: 3, paddingRight: 3, borderTopLeftRadius: 2, borderTopRightRadius: 2 }}>
          {["Date", "Bed", "Wake", "Hrs", "Quality (1-5)", "Notes / Disruptions"].map((h) => (
            <View key={h} style={{ flex: h.includes("Notes") ? 2.5 : 1, alignItems: "center" }}>
              <Text style={{ fontSize: 4, fontFamily: "Helvetica-Bold", color: colors.tealLight, textTransform: "uppercase" }}>{h}</Text>
            </View>
          ))}
        </View>
        {sleepLog.map((row, i) => {
          const isSample = row.date !== "";
          return (
            <View key={i} style={{ flexDirection: "row", paddingTop: 1.5, paddingBottom: 1.5, paddingLeft: 3, paddingRight: 3, backgroundColor: isSample ? colors.sampleBlue : i % 2 === 0 ? colors.offWhite : colors.white, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray }}>
              {["date", "bed", "wake", "hrs", "quality", "notes"].map((f) => {
                const val = row[f as keyof typeof row];
                return (
                  <View key={f} style={{ flex: f === "notes" ? 2.5 : 1, alignItems: f === "notes" ? "flex-start" : "center", paddingLeft: f === "notes" ? 2 : 0 }}>
                    {isSample ? (
                      <Text style={{ fontSize: 4.5, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>{val}</Text>
                    ) : (
                      <View style={{ height: 7, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray, width: "80%" }} />
                    )}
                  </View>
                );
              })}
            </View>
          );
        })}
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 1 }}>
          <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: colors.sampleBlue, marginRight: 2 }} />
          <Text style={{ fontSize: 3.5, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>Blue = sample. Note disruptions to find patterns.</Text>
        </View>
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>{"\u263E"} 2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 6 of 8</Text>
      </View>
    </Page>
  );
}
