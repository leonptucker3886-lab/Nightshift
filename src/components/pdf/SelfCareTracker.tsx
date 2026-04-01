import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

// Fatigue scale faces (text-based for PDF reliability)
const fatigueScale = [
  { level: "1", face: ":D", label: "Wide awake", color: "#4CAF7D" },
  { level: "2-3", face: ":)", label: "Alert", color: "#6FBF8E" },
  { level: "4-5", face: ":|", label: "Okay", color: "#D4A843" },
  { level: "6-7", face: ":/", label: "Tired", color: "#E8943A" },
  { level: "8-9", face: ":(", label: "Exhausted", color: "#E07C5A" },
  { level: "10", face: "X(", label: "Can't function", color: "#C0392B" },
];

const actions = ["Hydrate", "Stretch", "Protein snack", "Breathing", "Micro-nap", "Walk"];

// Sample entries from tough shifts
const sampleShifts = [
  {
    date: "03/31 Night",
    fatigue: "8",
    triggers: "3rd night in a row. Skipped dinner. Code at 0200.",
    actions: [true, true, true, true, false, false],
  },
  {
    date: "03/30 Night",
    fatigue: "6",
    triggers: "Slept 5hrs pre-shift. Caffeine at 2200.",
    actions: [true, false, true, false, true, true],
  },
  {
    date: "03/29 Night",
    fatigue: "5",
    triggers: "Good sleep (7hrs). Light patient load.",
    actions: [true, true, false, false, false, true],
  },
  {
    date: "",
    fatigue: "",
    triggers: "",
    actions: [false, false, false, false, false, false],
  },
  {
    date: "",
    fatigue: "",
    triggers: "",
    actions: [false, false, false, false, false, false],
  },
  {
    date: "",
    fatigue: "",
    triggers: "",
    actions: [false, false, false, false, false, false],
  },
  {
    date: "",
    fatigue: "",
    triggers: "",
    actions: [false, false, false, false, false, false],
  },
];

export default function SelfCareTracker() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Wellness Tracking</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>
            Daily Fatigue & Self-Care Tracker
          </Text>
          <Text style={sharedStyles.pageSubtitle}>
            Rate your fatigue after each shift. Track triggers and actions taken.
            {"\u2014"} Patterns reveal what helps.
          </Text>
        </View>

        {/* Tip callout */}
        <View
          style={{
            backgroundColor: colors.softGreenPale,
            borderLeftWidth: 2,
            borderLeftColor: colors.softGreen,
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 6,
            paddingRight: 6,
            borderRadius: 2,
            marginBottom: 6,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 8, marginRight: 4 }}>{"\u{1F4A1}"}</Text>
          <Text style={{ fontSize: 6, color: colors.softGreen, fontFamily: "Helvetica-Bold" }}>
            Track patterns to fight burnout {"\u2014"} small actions add up. Log your fatigue and what you did about it.
          </Text>
        </View>

        {/* 1-10 Fatigue Scale Reference */}
        <View style={{ marginBottom: 6 }}>
          <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 3 }}>
            Fatigue Scale (circle your level after each shift)
          </Text>
          <View style={{ flexDirection: "row", gap: 3 }}>
            {fatigueScale.map((s) => (
              <View
                key={s.level}
                style={{
                  flex: 1,
                  alignItems: "center",
                  paddingTop: 4,
                  paddingBottom: 4,
                  borderRadius: 3,
                  borderWidth: 0.75,
                  borderColor: s.color + "40",
                  backgroundColor: s.color + "10",
                }}
              >
                <Text style={{ fontSize: 10, marginBottom: 1 }}>{s.face}</Text>
                <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: s.color }}>
                  {s.level}
                </Text>
                <Text style={{ fontSize: 4, color: colors.textMid }}>{s.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Shift Log Table */}
        <Text style={sharedStyles.sectionTitle}>Shift-by-Shift Log</Text>

        {/* Table header */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: colors.deepNavy,
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 5,
            paddingRight: 5,
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
          }}
        >
          <Text style={{ width: 58, fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase", letterSpacing: 0.3 }}>
            Date / Shift
          </Text>
          <View style={{ width: 32, alignItems: "center" }}>
            <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.tealLight, textTransform: "uppercase" }}>Fatigue</Text>
          </View>
          <Text style={{ flex: 2.5, fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase", letterSpacing: 0.3, paddingLeft: 4 }}>
            Notes / Triggers
          </Text>
          <Text style={{ flex: 3, fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase", letterSpacing: 0.3, paddingLeft: 4 }}>
            Actions Taken
          </Text>
        </View>

        {/* Shift rows */}
        {sampleShifts.map((shift, i) => {
          const isSample = shift.date !== "";
          const fatigueColor =
            Number(shift.fatigue) >= 8 ? "#E07C5A" :
            Number(shift.fatigue) >= 6 ? "#E8943A" :
            Number(shift.fatigue) >= 4 ? "#D4A843" :
            shift.fatigue ? "#4CAF7D" : "transparent";

          return (
            <View
              key={i}
              style={{
                flexDirection: "row",
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 5,
                paddingRight: 5,
                borderBottomWidth: 0.5,
                borderBottomColor: colors.lightGray,
                alignItems: "center",
                backgroundColor: isSample ? colors.sampleBlue : i % 2 === 0 ? colors.offWhite : colors.white,
              }}
            >
              {/* Date */}
              <View style={{ width: 58 }}>
                {isSample ? (
                  <Text style={{ fontSize: 6, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>{shift.date}</Text>
                ) : (
                  <View style={{ height: 12, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray }} />
                )}
              </View>

              {/* Fatigue level */}
              <View style={{ width: 32, alignItems: "center" }}>
                <View
                  style={{
                    width: 22, height: 16, borderRadius: 3,
                    borderWidth: 0.75,
                    borderColor: isSample ? fatigueColor : colors.tealMuted,
                    backgroundColor: isSample ? fatigueColor + "15" : undefined,
                    justifyContent: "center", alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: isSample ? fatigueColor : "transparent" }}>
                    {shift.fatigue || "."}
                  </Text>
                </View>
              </View>

              {/* Notes/Triggers */}
              <View style={{ flex: 2.5, paddingLeft: 4 }}>
                {isSample ? (
                  <Text style={{ fontSize: 5, color: colors.sampleText, fontFamily: "Helvetica-Oblique", lineHeight: 1.2 }}>
                    {shift.triggers}
                  </Text>
                ) : (
                  <View style={{ height: 12, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray }} />
                )}
              </View>

              {/* Actions Taken checkboxes */}
              <View style={{ flex: 3, flexDirection: "row", flexWrap: "wrap", gap: 2, paddingLeft: 4 }}>
                {actions.map((action, ai) => (
                  <View key={action} style={{ flexDirection: "row", alignItems: "center", width: "30%" }}>
                    <View
                      style={{
                        width: 7, height: 7, borderWidth: 0.5,
                        borderColor: shift.actions[ai] ? colors.teal : colors.tealMuted,
                        borderRadius: 1.5,
                        backgroundColor: shift.actions[ai] ? colors.tealPale : undefined,
                        justifyContent: "center", alignItems: "center",
                        marginRight: 2,
                      }}
                    >
                      {shift.actions[ai] && (
                        <Text style={{ fontSize: 5, color: colors.teal, fontFamily: "Helvetica-Bold" }}>{"\u2713"}</Text>
                      )}
                    </View>
                    <Text style={{ fontSize: 4, color: colors.textDark }}>{action}</Text>
                  </View>
                ))}
              </View>
            </View>
          );
        })}

        {/* Sample indicator */}
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 2, marginBottom: 4 }}>
          <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: colors.sampleBlue, marginRight: 2 }} />
          <Text style={{ fontSize: 4, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>
            Blue rows = sample entries from tough shifts (3 nights in a row, code at 0200, fatigue peaked at 8/10)
          </Text>
        </View>

        {/* Patterns Noticed + Weekly Averages */}
        <View style={{ flexDirection: "row", gap: 6, marginBottom: 5 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>
              Patterns Noticed
            </Text>
            <View style={sharedStyles.sampleBox}>
              <Text style={sharedStyles.sampleText}>
                Fatigue peaks after 3+ consecutive nights. Caffeine after 0300 delays sleep 2+ hours. Skipping mid-shift meal = crash at 0400.
              </Text>
            </View>
            <View style={{ height: 24, backgroundColor: colors.offWhite, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray, paddingLeft: 3, justifyContent: "center", borderRadius: 1, marginTop: 2 }}>
              <Text style={{ fontSize: 4, color: "transparent" }}>.</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>
              Weekly Averages (this week)
            </Text>
            <View style={{ flexDirection: "row", gap: 4 }}>
              {[
                { label: "Avg Fatigue", value: "6.3", color: colors.warmOrange },
                { label: "Avg Sleep", value: "5.5hrs", color: colors.ocean },
                { label: "Avg Caffeine", value: "2.7", color: colors.warmOrange },
              ].map((avg) => (
                <View
                  key={avg.label}
                  style={{
                    flex: 1,
                    backgroundColor: colors.ice,
                    borderRadius: 2,
                    paddingTop: 3,
                    paddingBottom: 3,
                    paddingLeft: 4,
                    paddingRight: 4,
                    alignItems: "center",
                    borderWidth: 0.5,
                    borderColor: colors.tealPale,
                  }}
                >
                  <Text style={{ fontSize: 5, color: colors.textMid }}>{avg.label}</Text>
                  <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", color: avg.color }}>{avg.value}</Text>
                </View>
              ))}
            </View>
            <View style={{ marginTop: 3 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>This week vs last:</Text>
              <Text style={{ fontSize: 5, color: colors.coral }}>Fatigue up 1.2 pts {"\u2191"} (3 consecutive nights)</Text>
              <Text style={{ fontSize: 5, color: colors.softGreen }}>Sleep improved 0.5hrs {"\u2191"} (better blackout curtains)</Text>
            </View>
          </View>
        </View>

        {/* Night-Shift Specific Mitigation Prompts */}
        <Text style={sharedStyles.sectionTitle}>Night-Shift Mitigation Prompts</Text>
        <View style={{ flexDirection: "row", gap: 4, marginBottom: 5 }}>
          {[
            { icon: "\u2615", tip: "Caffeine cutoff after 0300", detail: "Half-life = 5-6hrs. Last coffee by 0300 if sleeping at 0900." },
            { icon: "\u{1F634}", tip: "Power nap if possible (20 min)", detail: "Set alarm. Longer naps cause grogginess. Best between 0200-0400." },
            { icon: "\u{1F4A7}", tip: "Hydrate every 2 hours", detail: "Dehydration worsens fatigue. Keep water bottle at nurses station." },
            { icon: "\u{1F34E}", tip: "Protein snack at 0000-0200", detail: "Avoid sugar crashes. Nuts, cheese, yogurt > chips, candy." },
          ].map((p) => (
            <View
              key={p.tip}
              style={{
                flex: 1,
                backgroundColor: colors.ice,
                borderRadius: 3,
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 5,
                paddingRight: 5,
                borderWidth: 0.5,
                borderColor: colors.tealPale,
              }}
            >
              <Text style={{ fontSize: 9, marginBottom: 1 }}>{p.icon}</Text>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 1 }}>{p.tip}</Text>
              <Text style={{ fontSize: 4, color: colors.textMid, lineHeight: 1.2 }}>{p.detail}</Text>
            </View>
          ))}
        </View>

        {/* Self-Care Actions Reference */}
        <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>
          Quick Self-Care Actions (check off each shift)
        </Text>
        <View style={{ flexDirection: "row", gap: 4 }}>
          {[
            { action: "Hydrate", detail: "8oz water q2h", icon: "\u{1F4A7}" },
            { action: "Stretch", detail: "2-min neck/shoulders", icon: "\u{1F9D8}" },
            { action: "Protein snack", detail: "Every 3-4 hrs", icon: "\u{1F34E}" },
            { action: "Breathe", detail: "4-7-8 technique x3", icon: "\u{1F4A8}" },
            { action: "Micro-nap", detail: "20 min if possible", icon: "\u{1F634}" },
            { action: "Walk", detail: "Break room loop", icon: "\u{1F6B6}" },
          ].map((a) => (
            <View
              key={a.action}
              style={{
                flex: 1,
                alignItems: "center",
                paddingTop: 3,
                paddingBottom: 3,
                backgroundColor: colors.softGreenPale,
                borderRadius: 2,
                borderWidth: 0.5,
                borderColor: colors.softGreenMuted,
              }}
            >
              <Text style={{ fontSize: 8 }}>{a.icon}</Text>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.softGreen }}>{a.action}</Text>
              <Text style={{ fontSize: 3, color: colors.textMid }}>{a.detail}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>{"\u263E"} 2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 5 of 8</Text>
      </View>
    </Page>
  );
}
