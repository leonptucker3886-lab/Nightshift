import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Sample data for a tough week
const sampleFatigue = ["", "", "7", "5", "8", "6", ""];
const sampleSleep = ["", "", "5", "6.5", "4", "7.5", ""];
const sampleCaffeine = ["", "", "3", "2", "4", "1", ""];
const sampleMood = ["", "", "3", "4", "2", "4", ""];

const selfCareItems = [
  "Drank 64+ oz water during shift",
  "Ate a real meal (not vending machine)",
  "Took all scheduled breaks",
  "Stretched or walked for 5+ min",
  "Connected with a colleague",
  "Did something calming pre/post shift",
];

const triggerLog = [
  { trigger: "Caffeine after 0300", effect: "Couldn't fall asleep until 1200" },
  { trigger: "Skipped meal at 0000", effect: "Fatigue crash at 0400, irritable" },
  { trigger: "No wind-down routine", effect: "Took 2hrs to fall asleep" },
  { trigger: "Worked 3+ nights in a row", effect: "Mood dropped to 2/5" },
];

export default function SelfCareTracker() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Wellness Tracking</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>Daily Fatigue & Self-Care Tracker</Text>
          <Text style={sharedStyles.pageSubtitle}>Rate alertness 1–10 after each shift. Track patterns, triggers, and self-care habits.</Text>
        </View>

        {/* Weekly Alertness Log */}
        <Text style={sharedStyles.sectionTitle}>Weekly Alertness Log</Text>
        <View style={sharedStyles.tableHeader}>
          <View style={{ width: 52 }}><Text style={sharedStyles.tableHeaderText}>Metric</Text></View>
          {daysOfWeek.map((d) => (<View key={d} style={{ flex: 1, alignItems: "center" }}><Text style={{ fontSize: 4, fontFamily: "Helvetica-Bold", color: colors.white }}>{d}</Text></View>))}
          <View style={{ width: 22, alignItems: "center" }}><Text style={{ fontSize: 4, fontFamily: "Helvetica-Bold", color: colors.tealLight }}>Avg</Text></View>
        </View>

        {[
          { label: "Fatigue (1-10)", data: sampleFatigue, avg: "6.5" },
          { label: "Sleep (hrs)", data: sampleSleep, avg: "5.6" },
          { label: "Caffeine (#)", data: sampleCaffeine, avg: "2.5" },
          { label: "Mood (1-5)", data: sampleMood, avg: "3.3" },
        ].map((row, ri) => (
          <View key={row.label} style={ri % 2 === 0 ? { ...sharedStyles.tableRow, backgroundColor: colors.offWhite } : sharedStyles.tableRow}>
            <View style={{ width: 52 }}><Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textDark }}>{row.label}</Text></View>
            {daysOfWeek.map((_, i) => (
              <View key={i} style={{ flex: 1, alignItems: "center" }}>
                <View style={{
                  width: 20, height: 12, borderWidth: 0.5,
                  borderColor: row.data[i] ? colors.teal : colors.tealMuted,
                  backgroundColor: row.data[i] ? colors.tealPale : undefined,
                  borderRadius: 1.5, justifyContent: "center", alignItems: "center",
                }}>
                  <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: row.data[i] ? colors.teal : "transparent" }}>{row.data[i] || "."}</Text>
                </View>
              </View>
            ))}
            <View style={{ width: 22, alignItems: "center" }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.ocean }}>{row.avg}</Text>
            </View>
          </View>
        ))}

        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 1, marginBottom: 4 }}>
          <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: colors.tealPale, marginRight: 2 }} />
          <Text style={{ fontSize: 4, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>Teal = sample data. Avg column = weekly average</Text>
        </View>

        {/* Trigger / Pattern Log */}
        <Text style={sharedStyles.sectionTitle}>Trigger & Pattern Log</Text>
        <Text style={{ fontSize: 4, color: colors.textLight, marginBottom: 2 }}>Track what causes fatigue spikes or sleep disruption. Use this to adjust your routine.</Text>
        <View style={sharedStyles.tableHeader}>
          <View style={{ flex: 1 }}><Text style={sharedStyles.tableHeaderText}>Trigger</Text></View>
          <View style={{ flex: 1 }}><Text style={sharedStyles.tableHeaderText}>Effect on You</Text></View>
        </View>
        {triggerLog.map((t, i) => (
          <View key={i} style={i % 2 === 0 ? { ...sharedStyles.tableRow, backgroundColor: colors.offWhite } : sharedStyles.tableRow}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 5, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>{t.trigger}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 5, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>{t.effect}</Text>
            </View>
          </View>
        ))}
        {Array.from({ length: 3 }, (_, i) => (
          <View key={`blank-${i}`} style={sharedStyles.tableRow}>
            <View style={{ flex: 1, height: 10, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray }} />
            <View style={{ flex: 1, height: 10, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray }} />
          </View>
        ))}

        {/* Daily Self-Care Checklist */}
        <Text style={sharedStyles.sectionTitle}>Daily Self-Care Checklist</Text>
        <View style={{ flexDirection: "row", gap: 6 }}>
          {[
            selfCareItems.slice(0, 3),
            selfCareItems.slice(3, 6),
          ].map((col, ci) => (
            <View key={ci} style={{ flex: 1 }}>
              {col.map((item) => (
                <View key={item} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 2, paddingTop: 2, paddingBottom: 2, paddingLeft: 4, paddingRight: 4, backgroundColor: colors.softGreenPale, borderRadius: 2, borderWidth: 0.5, borderColor: colors.softGreenMuted }}>
                  <View style={{ ...sharedStyles.checkbox, width: 7, height: 7 }} />
                  <Text style={{ fontSize: 5, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{item}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={{ marginTop: 4 }}>
          <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>Quick Actions When Fatigue Peaks (Hour 8–10)</Text>
          <View style={{ flexDirection: "row", gap: 4 }}>
            {[
              { e: "\u{1F4A7}", l: "HYDRATE", d: "8oz water" },
              { e: "\u{1F9D8}", l: "STRETCH", d: "2 min" },
              { e: "\u{1F34E}", l: "PROTEIN", d: "Snack now" },
              { e: "\u{1F634}", l: "BREATHE", d: "4-7-8 x3" },
            ].map((a) => (
              <View key={a.l} style={{ flex: 1, paddingTop: 3, paddingBottom: 3, paddingLeft: 3, paddingRight: 3, backgroundColor: colors.lavenderPale, borderRadius: 2, alignItems: "center", borderWidth: 0.5, borderColor: "#D8CDE8" }}>
                <Text style={{ fontSize: 8 }}>{a.e}</Text>
                <Text style={{ fontSize: 4, fontFamily: "Helvetica-Bold", color: colors.lavender }}>{a.l}</Text>
                <Text style={{ fontSize: 3, color: colors.textMid }}>{a.d}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 5 of 8</Text>
      </View>
    </Page>
  );
}
