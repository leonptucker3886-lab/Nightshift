import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const phases = [
  { time: "Before Shift Ends", items: ["Stop caffeine 6+ hours before sleep", "Complete handoff using your SBAR sheet", "Hydrate with water (not energy drinks)"] },
  { time: "Commute Home", items: ["Wear blue-light blocking glasses at dawn", "Listen to calming music or a sleep podcast", "Keep car cool to promote drowsiness"] },
  { time: "Arrival Home", items: ["Do NOT check work email or schedule apps", "Light snack if hungry (protein + complex carbs)", "Warm shower, then change into sleep clothes", "Set room to 65–68F. Blackout curtains + eye mask"] },
  { time: "Sleep Setup", items: ["No screens 30 min before sleep", "Breathing exercise: 4-7-8 technique", "Target 7–8 hours of sleep"] },
];

const recovery = [
  "Sleep in / nap if needed (limit to 90 min if flipping back)",
  "Gentle movement: walk, yoga, or stretching (15–30 min)",
  "Eat a nourishing meal (avoid just caffeine + sugar)",
  "1 hour of non-work activity you enjoy",
  "Social connection (even a short call or text)",
  "Prep for next shift: uniform, bag, meals",
];

export default function RecoveryChecklist() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Recovery & Rest</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>Post-Shift Sleep Recovery Checklist</Text>
          <Text style={sharedStyles.pageSubtitle}>Wind-down steps after your night shift + recovery day planner.</Text>
        </View>

        <View style={{ backgroundColor: colors.goldPale, borderLeftWidth: 2, borderLeftColor: colors.warmOrange, paddingTop: 5, paddingBottom: 5, paddingLeft: 8, paddingRight: 8, borderRadius: 3, marginBottom: 6, flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 14, marginRight: 6 }}>{"\u2615"}</Text>
          <View>
            <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: colors.warmOrange }}>CAFFEINE CUTOFF RULE</Text>
            <Text style={{ fontSize: 6, color: colors.textMid }}>No caffeine within 6 hours of target sleep time. Sleep at 0900 = last coffee by 0300.</Text>
          </View>
        </View>

        {phases.map((p) => (
          <View key={p.time} style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: colors.deepNavy, marginBottom: 2 }}>{"\u25CF"} {p.time}</Text>
            {p.items.map((item) => (
              <View key={item} style={{ flexDirection: "row", alignItems: "flex-start", marginLeft: 12, marginBottom: 1.5 }}>
                <View style={sharedStyles.checkbox} />
                <Text style={{ fontSize: 6, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{item}</Text>
              </View>
            ))}
          </View>
        ))}

        <View style={{ marginTop: 4 }}>
          <View style={{ backgroundColor: colors.tealPale, paddingTop: 4, paddingBottom: 4, paddingLeft: 8, paddingRight: 8, borderTopLeftRadius: 3, borderTopRightRadius: 3 }}>
            <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: colors.teal }}>Recovery Day Planner</Text>
          </View>
          <View style={{ borderWidth: 0.5, borderColor: colors.tealPale, borderTopWidth: 0, paddingTop: 4, paddingBottom: 4, paddingLeft: 8, paddingRight: 8, borderBottomLeftRadius: 3, borderBottomRightRadius: 3 }}>
            {recovery.map((item) => (
              <View key={item} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 2 }}>
                <View style={sharedStyles.checkbox} />
                <Text style={{ fontSize: 6, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 6 of 8</Text>
      </View>
    </Page>
  );
}
