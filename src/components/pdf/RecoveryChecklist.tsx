import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const phases = [
  {
    time: "0645 – Before Leaving Unit",
    items: [
      "Complete handoff using your SBAR sheet",
      "Stop all caffeine NOW (6+ hrs before target sleep at 0900)",
      "Hydrate with 16oz water (dehydration worsens fatigue)",
      "Set phone to Do Not Disturb mode",
    ],
  },
  {
    time: "0700 – Commute Home",
    items: [
      "Wear blue-light blocking glasses (amber lenses, not clear)",
      "Listen to a sleep podcast or calming playlist (avoid news)",
      "Keep car cool (68F) \u2014 warmth promotes drowsiness",
      "Avoid bright gas station lights \u2014 pre-pack snacks",
    ],
  },
  {
    time: "0730 – Arrival Home (Critical Window)",
    items: [
      "Do NOT check work email, schedule apps, or social media",
      "Eat a light snack within 30 min: protein + complex carbs (e.g., peanut butter toast, yogurt + granola). Avoid sugar spikes.",
      "Warm shower or bath (10 min) \u2014 core temp drops after, signaling sleep",
      "Change into dedicated sleep clothes immediately",
      "Set thermostat to 65–68F (18–20C) \u2014 cool rooms improve sleep quality",
      "Deploy blackout curtains + seal door gaps with a towel",
      "Start white noise machine or insert earplugs BEFORE lying down",
    ],
  },
  {
    time: "0800 – Sleep Setup (Wind-Down Protocol)",
    items: [
      "NO screens 20–30 min before sleep (or use night mode + lowest brightness)",
      "4-7-8 breathing: inhale 4s, hold 7s, exhale 8s. Repeat 3x.",
      "Write tomorrow's worries in a bedside notebook, then CLOSE it",
      "Set alarm for 7–8 hours of sleep (e.g., alarm at 1500–1600)",
      "If not asleep in 20 min, get up and do something calm, then retry",
    ],
  },
];

const recoveryDay = [
  { item: "Sleep in / nap (limit to 90 min if flipping back to days)", note: "Longer naps disrupt circadian reset" },
  { item: "Gentle movement: 15–30 min walk, yoga, or stretching", note: "Avoid intense exercise within 4hrs of next sleep" },
  { item: "Eat a nourishing meal (protein + complex carbs + veggies)", note: "Avoid caffeine + sugar rollercoaster" },
  { item: "1 hour of non-work activity you enjoy", note: "This is not optional \u2014 it prevents burnout" },
  { item: "Social connection (even a 5-min call or text)", note: "Isolation worsens shift work depression" },
  { item: "Prep for next shift: uniform, bag, meals, water bottle", note: "Reduces pre-shift anxiety" },
  { item: "Set alarm to avoid oversleeping before next night shift", note: "Oversleeping shifts your window later" },
];

const sleepLog = [
  { date: "", bed: "", wake: "", hrs: "", quality: "", notes: "" },
  { date: "", bed: "", wake: "", hrs: "", quality: "", notes: "" },
  { date: "", bed: "", wake: "", hrs: "", quality: "", notes: "" },
  { date: "", bed: "", wake: "", hrs: "", quality: "", notes: "" },
];

export default function RecoveryChecklist() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Recovery & Rest</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>Post-Shift Sleep Recovery</Text>
          <Text style={sharedStyles.pageSubtitle}>Evidence-based wind-down protocol + recovery day planner + sleep log.</Text>
        </View>

        {/* Caffeine Cutoff */}
        <View style={{ backgroundColor: colors.goldPale, borderLeftWidth: 2, borderLeftColor: colors.warmOrange, paddingTop: 4, paddingBottom: 4, paddingLeft: 8, paddingRight: 8, borderRadius: 3, marginBottom: 5, flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 12, marginRight: 5 }}>{"\u2615"}</Text>
          <View>
            <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.warmOrange }}>CAFFEINE CUTOFF RULE</Text>
            <Text style={{ fontSize: 5, color: colors.textMid }}>Last caffeine by 0300 if sleeping at 0900. Caffeine half-life = 5-6 hrs. Even decaf has 2-15mg.</Text>
          </View>
        </View>

        {/* Wind-Down Phases */}
        {phases.map((p) => (
          <View key={p.time} style={{ marginBottom: 4 }}>
            <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.deepNavy, marginBottom: 1 }}>{"\u25CF"} {p.time}</Text>
            {p.items.map((item) => (
              <View key={item} style={{ flexDirection: "row", alignItems: "flex-start", marginLeft: 10, marginBottom: 1 }}>
                <View style={{ ...sharedStyles.checkbox, width: 7, height: 7 }} />
                <Text style={{ fontSize: 5, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{item}</Text>
              </View>
            ))}
          </View>
        ))}

        {/* Recovery Day Planner */}
        <View style={{ marginTop: 3 }}>
          <View style={{ backgroundColor: colors.tealPale, paddingTop: 3, paddingBottom: 3, paddingLeft: 6, paddingRight: 6, borderTopLeftRadius: 3, borderTopRightRadius: 3 }}>
            <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.teal }}>Recovery Day Planner</Text>
          </View>
          <View style={{ borderWidth: 0.5, borderColor: colors.tealPale, borderTopWidth: 0, paddingTop: 3, paddingBottom: 3, paddingLeft: 6, paddingRight: 6, borderBottomLeftRadius: 3, borderBottomRightRadius: 3 }}>
            {recoveryDay.map((r) => (
              <View key={r.item} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 2 }}>
                <View style={{ ...sharedStyles.checkbox, width: 7, height: 7 }} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 5, color: colors.textDark, lineHeight: 1.2 }}>{r.item}</Text>
                  <Text style={{ fontSize: 4, color: colors.textLight, fontFamily: "Helvetica-Oblique" }}>{r.note}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Sleep Log */}
        <View style={{ marginTop: 4 }}>
          <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>Sleep Hours Log (track 4 shifts)</Text>
          <View style={{ flexDirection: "row", backgroundColor: colors.deepNavy, paddingTop: 2, paddingBottom: 2, paddingLeft: 3, paddingRight: 3, borderTopLeftRadius: 2, borderTopRightRadius: 2 }}>
            {["Date", "Bed", "Wake", "Hrs", "Quality (1-5)", "Notes"].map((h) => (
              <View key={h} style={{ flex: h === "Notes" ? 2 : 1, alignItems: "center" }}>
                <Text style={{ fontSize: 4, fontFamily: "Helvetica-Bold", color: colors.tealLight, textTransform: "uppercase" }}>{h}</Text>
              </View>
            ))}
          </View>
          {sleepLog.map((_, i) => (
            <View key={i} style={{ flexDirection: "row", paddingTop: 2, paddingBottom: 2, paddingLeft: 3, paddingRight: 3, backgroundColor: i % 2 === 0 ? colors.offWhite : colors.white, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray }}>
              {["date", "bed", "wake", "hrs", "quality", "notes"].map((f) => (
                <View key={f} style={{ flex: f === "notes" ? 2 : 1, height: 10, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray, marginLeft: 1, marginRight: 1 }} />
              ))}
            </View>
          ))}
        </View>
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 6 of 8</Text>
      </View>
    </Page>
  );
}
