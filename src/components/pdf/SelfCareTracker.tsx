import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const fatigueScale = [
  { level: "1", face: ":D", label: "Wide awake", color: "#4CAF7D" },
  { level: "2-3", face: ":)", label: "Alert", color: "#6FBF8E" },
  { level: "4-5", face: ":|", label: "Okay", color: "#D4A843" },
  { level: "6-7", face: ":/", label: "Tired", color: "#E8943A" },
  { level: "8-9", face: ":(", label: "Exhausted", color: "#E07C5A" },
  { level: "10", face: "X(", label: "Can't function", color: "#C0392B" },
];

const actions = ["Hydrate", "Stretch", "Protein snack", "Breathing", "Power nap", "Walk"];

const sampleShifts = [
  { date: "03/31 Night", fatigue: "8", sleep: "5.5", mood: "2", triggers: "3rd night in a row. Skipped dinner. Code at 0200.", actions: [true, true, true, true, false, false] },
  { date: "03/30 Night", fatigue: "6", sleep: "6", mood: "3", triggers: "Slept 5hrs pre-shift. Caffeine at 2200.", actions: [true, false, true, false, true, true] },
  { date: "03/29 Night", fatigue: "5", sleep: "7", mood: "4", triggers: "Good sleep (7hrs). Light patient load.", actions: [true, true, false, false, false, true] },
  { date: "03/28 Recovery", fatigue: "3", sleep: "8", mood: "5", triggers: "Day off. Nap 90min. Walked 20min. Felt reset.", actions: [true, true, true, true, true, true] },
  { date: "", fatigue: "", sleep: "", mood: "", triggers: "", actions: [false, false, false, false, false, false] },
  { date: "", fatigue: "", sleep: "", mood: "", triggers: "", actions: [false, false, false, false, false, false] },
  { date: "", fatigue: "", sleep: "", mood: "", triggers: "", actions: [false, false, false, false, false, false] },
];

export default function SelfCareTracker() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Wellness Tracking</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>
            Daily Fatigue & Self-Care Tracker
          </Text>
          <Text style={sharedStyles.pageSubtitle}>
            Rate fatigue 1-10 after each shift. Log triggers, actions, sleep hours, and mood. Patterns reveal what helps.
          </Text>
        </View>

        {/* Tip callout */}
        <View style={{ backgroundColor: colors.softGreenPale, borderLeftWidth: 2, borderLeftColor: colors.softGreen, paddingTop: 3, paddingBottom: 3, paddingLeft: 6, paddingRight: 6, borderRadius: 2, marginBottom: 5, flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 8, marginRight: 4 }}>{"\u{1F4A1}"}</Text>
          <Text style={{ fontSize: 6, color: colors.softGreen, fontFamily: "Helvetica-Bold" }}>
            Small actions prevent burnout {"\u2014"} track what works for you.
          </Text>
        </View>

        {/* Fatigue Scale */}
        <View style={{ marginBottom: 5 }}>
          <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 3 }}>
            Fatigue Scale (circle your level after each shift)
          </Text>
          <View style={{ flexDirection: "row", gap: 3 }}>
            {fatigueScale.map((s) => (
              <View key={s.level} style={{ flex: 1, alignItems: "center", paddingTop: 4, paddingBottom: 4, borderRadius: 3, borderWidth: 0.75, borderColor: s.color + "40", backgroundColor: s.color + "10" }}>
                <Text style={{ fontSize: 10, marginBottom: 1 }}>{s.face}</Text>
                <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: s.color }}>{s.level}</Text>
                <Text style={{ fontSize: 4, color: colors.textMid }}>{s.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Shift Log Table */}
        <Text style={sharedStyles.sectionTitle}>Shift-by-Shift Log</Text>
        <View style={{ flexDirection: "row", backgroundColor: colors.deepNavy, paddingTop: 4, paddingBottom: 4, paddingLeft: 5, paddingRight: 5, borderTopLeftRadius: 3, borderTopRightRadius: 3 }}>
          <Text style={{ width: 52, fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase" }}>Date / Shift</Text>
          <View style={{ width: 24, alignItems: "center" }}><Text style={{ fontSize: 4, fontFamily: "Helvetica-Bold", color: colors.tealLight, textTransform: "uppercase" }}>Fatigue</Text></View>
          <View style={{ width: 20, alignItems: "center" }}><Text style={{ fontSize: 4, fontFamily: "Helvetica-Bold", color: colors.tealLight, textTransform: "uppercase" }}>Sleep</Text></View>
          <View style={{ width: 20, alignItems: "center" }}><Text style={{ fontSize: 4, fontFamily: "Helvetica-Bold", color: colors.tealLight, textTransform: "uppercase" }}>Mood</Text></View>
          <Text style={{ flex: 2, fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase", paddingLeft: 3 }}>Notes / Triggers</Text>
          <Text style={{ flex: 3, fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase", paddingLeft: 3 }}>Actions Taken</Text>
        </View>

        {sampleShifts.map((shift, i) => {
          const isSample = shift.date !== "";
          const fc = Number(shift.fatigue) >= 8 ? "#E07C5A" : Number(shift.fatigue) >= 6 ? "#E8943A" : Number(shift.fatigue) >= 4 ? "#D4A843" : shift.fatigue ? "#4CAF7D" : "transparent";
          return (
            <View key={i} style={{ flexDirection: "row", paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray, alignItems: "center", backgroundColor: isSample ? colors.sampleBlue : i % 2 === 0 ? colors.offWhite : colors.white }}>
              <View style={{ width: 52 }}>
                {isSample ? <Text style={{ fontSize: 5, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>{shift.date}</Text> : <View style={{ height: 11, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray }} />}
              </View>
              <View style={{ width: 24, alignItems: "center" }}>
                <View style={{ width: 20, height: 14, borderRadius: 2, borderWidth: 0.75, borderColor: isSample ? fc : colors.tealMuted, backgroundColor: isSample ? fc + "15" : undefined, justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: isSample ? fc : "transparent" }}>{shift.fatigue || "."}</Text>
                </View>
              </View>
              <View style={{ width: 20, alignItems: "center" }}>
                <Text style={{ fontSize: 6, color: isSample ? colors.sampleText : "transparent", fontFamily: isSample ? "Helvetica-Bold" : "Helvetica" }}>{shift.sleep ? shift.sleep + "h" : "."}</Text>
              </View>
              <View style={{ width: 20, alignItems: "center" }}>
                <Text style={{ fontSize: 6, color: isSample ? colors.sampleText : "transparent", fontFamily: isSample ? "Helvetica-Bold" : "Helvetica" }}>{shift.mood || "."}</Text>
              </View>
              <View style={{ flex: 2, paddingLeft: 3 }}>
                {isSample ? <Text style={{ fontSize: 4, color: colors.sampleText, fontFamily: "Helvetica-Oblique", lineHeight: 1.2 }}>{shift.triggers}</Text> : <View style={{ height: 11, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray }} />}
              </View>
              <View style={{ flex: 3, flexDirection: "row", flexWrap: "wrap", gap: 1.5, paddingLeft: 3 }}>
                {actions.map((action, ai) => (
                  <View key={action} style={{ flexDirection: "row", alignItems: "center", width: "30%" }}>
                    <View style={{ width: 7, height: 7, borderWidth: 0.5, borderColor: shift.actions[ai] ? colors.teal : colors.tealMuted, borderRadius: 1.5, backgroundColor: shift.actions[ai] ? colors.tealPale : undefined, justifyContent: "center", alignItems: "center", marginRight: 1.5 }}>
                      {shift.actions[ai] && <Text style={{ fontSize: 4, color: colors.teal, fontFamily: "Helvetica-Bold" }}>{"\u2713"}</Text>}
                    </View>
                    <Text style={{ fontSize: 3.5, color: colors.textDark }}>{action}</Text>
                  </View>
                ))}
              </View>
            </View>
          );
        })}

        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 1, marginBottom: 4 }}>
          <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: colors.sampleBlue, marginRight: 2 }} />
          <Text style={{ fontSize: 4, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>
            Blue = sample entries. Sleep = hours slept before shift. Mood = 1-5 (1=low, 5=good).
          </Text>
        </View>

        {/* Patterns + Weekly Averages */}
        <View style={{ flexDirection: "row", gap: 6, marginBottom: 4 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>Patterns Noticed</Text>
            <View style={sharedStyles.sampleBox}>
              <Text style={sharedStyles.sampleText}>Fatigue peaks after 3+ consecutive nights. Caffeine after 0300 delays sleep 2+ hrs. Skipping mid-shift meal = crash at 0400.</Text>
            </View>
            <View style={{ height: 20, backgroundColor: colors.offWhite, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray, paddingLeft: 3, justifyContent: "center", borderRadius: 1, marginTop: 1 }}>
              <Text style={{ fontSize: 4, color: "transparent" }}>.</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>Weekly Averages</Text>
            <View style={{ flexDirection: "row", gap: 4 }}>
              {[
                { label: "Avg Fatigue", value: "5.5", color: colors.warmOrange },
                { label: "Avg Sleep", value: "6.6hrs", color: colors.ocean },
                { label: "Avg Mood", value: "3.5", color: colors.softGreen },
              ].map((avg) => (
                <View key={avg.label} style={{ flex: 1, backgroundColor: colors.ice, borderRadius: 2, paddingTop: 3, paddingBottom: 3, paddingLeft: 3, paddingRight: 3, alignItems: "center", borderWidth: 0.5, borderColor: colors.tealPale }}>
                  <Text style={{ fontSize: 4, color: colors.textMid }}>{avg.label}</Text>
                  <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: avg.color }}>{avg.value}</Text>
                </View>
              ))}
            </View>
            <View style={{ marginTop: 2 }}>
              <Text style={{ fontSize: 4, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 0.5 }}>This week vs last:</Text>
              <Text style={{ fontSize: 4, color: colors.coral }}>Fatigue up 1.2 pts (3 consecutive nights)</Text>
              <Text style={{ fontSize: 4, color: colors.softGreen }}>Sleep improved 0.5hrs (better blackout setup)</Text>
            </View>
          </View>
        </View>

        {/* Night-Shift Mitigation Prompts */}
        <Text style={sharedStyles.sectionTitle}>Night-Shift Mitigation Prompts</Text>
        <View style={{ flexDirection: "row", gap: 3, marginBottom: 4 }}>
          {[
            { icon: "\u2615", tip: "Caffeine cutoff after 0300", detail: "Half-life = 5-6hrs. Last coffee by 0300 if sleeping at 0900." },
            { icon: "\u{1F4A7}", tip: "Hydrate every 2 hours", detail: "Dehydration worsens fatigue. Keep water bottle at nurses station." },
            { icon: "\u{1F634}", tip: "Power nap (20 min)", detail: "Best 0200-0400 or 1700-1830 pre-shift. Set alarm!" },
            { icon: "\u{1F34E}", tip: "Protein snack at 0000-0200", detail: "Nuts, cheese, yogurt. Avoid sugar crashes after 0300." },
          ].map((p) => (
            <View key={p.tip} style={{ flex: 1, backgroundColor: colors.ice, borderRadius: 2, paddingTop: 3, paddingBottom: 3, paddingLeft: 4, paddingRight: 4, borderWidth: 0.5, borderColor: colors.tealPale }}>
              <Text style={{ fontSize: 8, marginBottom: 1 }}>{p.icon}</Text>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 0.5 }}>{p.tip}</Text>
              <Text style={{ fontSize: 4, color: colors.textMid, lineHeight: 1.2 }}>{p.detail}</Text>
            </View>
          ))}
        </View>

        {/* Quick Self-Care Actions */}
        <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>Quick Self-Care Actions (check off each shift)</Text>
        <View style={{ flexDirection: "row", gap: 3 }}>
          {[
            { action: "Hydrate", detail: "8oz water q2h", icon: "\u{1F4A7}" },
            { action: "Stretch", detail: "2-min neck/shoulders", icon: "\u{1F9D8}" },
            { action: "Protein snack", detail: "Every 3-4 hrs", icon: "\u{1F34E}" },
            { action: "Breathe", detail: "4-7-8 technique x3", icon: "\u{1F4A8}" },
            { action: "Power nap", detail: "20 min if possible", icon: "\u{1F634}" },
            { action: "Walk", detail: "Break room loop", icon: "\u{1F6B6}" },
          ].map((a) => (
            <View key={a.action} style={{ flex: 1, alignItems: "center", paddingTop: 2, paddingBottom: 2, backgroundColor: colors.softGreenPale, borderRadius: 2, borderWidth: 0.5, borderColor: colors.softGreenMuted }}>
              <Text style={{ fontSize: 7 }}>{a.icon}</Text>
              <Text style={{ fontSize: 4, fontFamily: "Helvetica-Bold", color: colors.softGreen }}>{a.action}</Text>
              <Text style={{ fontSize: 3, color: colors.textMid }}>{a.detail}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>{"\u263E"} 2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 5 of 8</Text>
      </View>
    </Page>
  );
}
