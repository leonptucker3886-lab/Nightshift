import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const prompts = ["Drank enough water?", "Ate a real meal?", "Took breaks?", "Stretched?", "Connected with colleague?", "Did something calming?"];
const sf = ["", "", "7", "5", "8", "6", ""];
const ss = ["", "", "6", "7", "5", "8", ""];
const sc = ["", "", "3", "2", "4", "1", ""];
const sm = ["", "", "3", "4", "2", "4", ""];

export default function SelfCareTracker() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Wellness Tracking</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>Daily Fatigue & Self-Care Tracker</Text>
          <Text style={sharedStyles.pageSubtitle}>Rate your alertness 1–10 after each shift. Track habits and spot patterns.</Text>
        </View>

        <Text style={sharedStyles.sectionTitle}>Weekly Alertness Log</Text>
        <View style={sharedStyles.tableHeader}>
          <View style={{ width: 50 }}><Text style={sharedStyles.tableHeaderText}>Metric</Text></View>
          {daysOfWeek.map((d) => (<View key={d} style={{ flex: 1, alignItems: "center" }}><Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.white }}>{d}</Text></View>))}
        </View>

        {[
          { label: "Fatigue (1-10)", data: sf },
          { label: "Sleep (hrs)", data: ss },
          { label: "Caffeine (#)", data: sc },
          { label: "Mood (1-5)", data: sm },
        ].map((row, ri) => (
          <View key={row.label} style={ri % 2 === 0 ? { ...sharedStyles.tableRow, backgroundColor: colors.offWhite } : sharedStyles.tableRow}>
            <View style={{ width: 50 }}>
              <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.textDark }}>{row.label}</Text>
            </View>
            {daysOfWeek.map((_, i) => (
              <View key={i} style={{ flex: 1, alignItems: "center" }}>
                <View style={{
                  width: 22, height: 14, borderWidth: 0.5,
                  borderColor: row.data[i] ? colors.teal : colors.tealMuted,
                  backgroundColor: row.data[i] ? colors.tealPale : undefined,
                  borderRadius: 2, justifyContent: "center", alignItems: "center",
                }}>
                  <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: row.data[i] ? colors.teal : "transparent" }}>{row.data[i] || "."}</Text>
                </View>
              </View>
            ))}
          </View>
        ))}

        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 2, marginBottom: 6 }}>
          <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: colors.tealPale, marginRight: 3 }} />
          <Text style={{ fontSize: 4, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>Teal cells = sample entries (Wed–Sat)</Text>
        </View>

        <Text style={sharedStyles.sectionTitle}>Daily Self-Care Checklist</Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          {[prompts.slice(0, 3), prompts.slice(3, 6)].map((col, ci) => (
            <View key={ci} style={{ flex: 1 }}>
              {col.map((p) => (
                <View key={p} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 3, paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5, backgroundColor: colors.softGreenPale, borderRadius: 2, borderWidth: 0.5, borderColor: colors.softGreenMuted }}>
                  <View style={sharedStyles.checkbox} />
                  <Text style={{ fontSize: 6, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{p}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <Text style={[sharedStyles.sectionTitle, { marginTop: 8 }]}>Quick Actions</Text>
        <View style={{ flexDirection: "row", gap: 5 }}>
          {[{ e: "\u{1F4A7}", l: "HYDRATE", d: "8oz water" }, { e: "\u{1F9D8}", l: "STRETCH", d: "2 min" }, { e: "\u{1F4AC}", l: "CONNECT", d: "Check in" }, { e: "\u{1F634}", l: "REST", d: "5 min eyes closed" }].map((a) => (
            <View key={a.l} style={{ flex: 1, paddingTop: 5, paddingBottom: 5, paddingLeft: 4, paddingRight: 4, backgroundColor: colors.lavenderPale, borderRadius: 2, alignItems: "center", borderWidth: 0.5, borderColor: "#D8CDE8" }}>
              <Text style={{ fontSize: 11 }}>{a.e}</Text>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.lavender }}>{a.l}</Text>
              <Text style={{ fontSize: 4, color: colors.textMid }}>{a.d}</Text>
            </View>
          ))}
        </View>

        <View style={{ marginTop: 8 }}>
          <Text style={sharedStyles.sectionTitle}>Notes</Text>
          {Array.from({ length: 4 }, (_, i) => (<View key={i} style={sharedStyles.line} />))}
        </View>
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 5 of 8</Text>
      </View>
    </Page>
  );
}
