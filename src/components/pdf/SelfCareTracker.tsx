import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const selfCarePrompts = [
  "Did I drink enough water during shift?",
  "Did I eat a real meal (not just vending)?",
  "Did I take my breaks (even 5 min)?",
  "Did I stretch or move my body?",
  "Did I connect with a colleague today?",
  "Did I do something calming pre/post shift?",
];

const sampleFatigue = ["", "", "7", "5", "8", "6", ""];
const sampleSleep = ["", "", "6", "7", "5", "8", ""];
const sampleCaffeine = ["", "", "3", "2", "4", "1", ""];
const sampleMood = ["", "", "3", "4", "2", "4", ""];

export default function SelfCareTracker() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      {/* Header */}
      <View style={sharedStyles.pageHeader}>
        <Text style={sharedStyles.headerBadge}>Wellness Tracking</Text>
        <Text style={[sharedStyles.pageTitle, { marginTop: 8 }]}>
          Daily Fatigue & Self-Care Tracker
        </Text>
        <Text style={sharedStyles.pageSubtitle}>
          Rate your alertness 1–10 after each shift. Track self-care habits and spot patterns.
        </Text>
      </View>

      {/* Week tracker */}
      <View style={{ marginBottom: 10 }}>
        <Text style={sharedStyles.sectionTitle}>
          {"\u{1F4CA}"} Weekly Alertness Log
        </Text>

        {/* Table header */}
        <View style={sharedStyles.tableHeader}>
          <View style={{ width: 60 }}>
            <Text style={sharedStyles.tableHeaderText}>Metric</Text>
          </View>
          {daysOfWeek.map((day) => (
            <View key={day} style={{ flex: 1, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: "Helvetica-Bold",
                  color: colors.white,
                }}
              >
                {day}
              </Text>
            </View>
          ))}
        </View>

        {/* Fatigue scale row */}
        <View style={{ ...sharedStyles.tableRow, backgroundColor: colors.offWhite }}>
          <View style={{ width: 60 }}>
            <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.textDark }}>
              Fatigue
            </Text>
            <Text style={{ fontSize: 5, color: colors.textLight }}>(1=fresh, 10=exhausted)</Text>
          </View>
          {daysOfWeek.map((day, i) => (
            <View key={day} style={{ flex: 1, alignItems: "center" }}>
              <View
                style={{
                  width: 26,
                  height: 16,
                  borderWidth: 0.75,
                  borderColor: sampleFatigue[i] ? colors.teal : colors.tealMuted,
                  backgroundColor: sampleFatigue[i] ? colors.tealPale : undefined,
                  borderRadius: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{
                  fontSize: 7,
                  fontFamily: "Helvetica-Bold",
                  color: sampleFatigue[i] ? colors.teal : "transparent",
                }}>
                  {sampleFatigue[i] || "."}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Sleep hours row */}
        <View style={sharedStyles.tableRow}>
          <View style={{ width: 60 }}>
            <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.textDark }}>
              Sleep (hrs)
            </Text>
          </View>
          {daysOfWeek.map((day, i) => (
            <View key={day} style={{ flex: 1, alignItems: "center" }}>
              <View
                style={{
                  width: 26,
                  height: 16,
                  borderWidth: 0.75,
                  borderColor: sampleSleep[i] ? colors.teal : colors.tealMuted,
                  backgroundColor: sampleSleep[i] ? colors.tealPale : undefined,
                  borderRadius: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{
                  fontSize: 7,
                  fontFamily: "Helvetica-Bold",
                  color: sampleSleep[i] ? colors.teal : "transparent",
                }}>
                  {sampleSleep[i] || "."}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Caffeine row */}
        <View style={{ ...sharedStyles.tableRow, backgroundColor: colors.offWhite }}>
          <View style={{ width: 60 }}>
            <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.textDark }}>
              Caffeine (#)
            </Text>
          </View>
          {daysOfWeek.map((day, i) => (
            <View key={day} style={{ flex: 1, alignItems: "center" }}>
              <View
                style={{
                  width: 26,
                  height: 16,
                  borderWidth: 0.75,
                  borderColor: sampleCaffeine[i] ? colors.teal : colors.tealMuted,
                  backgroundColor: sampleCaffeine[i] ? colors.tealPale : undefined,
                  borderRadius: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{
                  fontSize: 7,
                  fontFamily: "Helvetica-Bold",
                  color: sampleCaffeine[i] ? colors.teal : "transparent",
                }}>
                  {sampleCaffeine[i] || "."}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Mood row */}
        <View style={sharedStyles.tableRow}>
          <View style={{ width: 60 }}>
            <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.textDark }}>
              Mood (1-5)
            </Text>
          </View>
          {daysOfWeek.map((day, i) => (
            <View key={day} style={{ flex: 1, alignItems: "center" }}>
              <View
                style={{
                  width: 26,
                  height: 16,
                  borderWidth: 0.75,
                  borderColor: sampleMood[i] ? colors.teal : colors.tealMuted,
                  backgroundColor: sampleMood[i] ? colors.tealPale : undefined,
                  borderRadius: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{
                  fontSize: 7,
                  fontFamily: "Helvetica-Bold",
                  color: sampleMood[i] ? colors.teal : "transparent",
                }}>
                  {sampleMood[i] || "."}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Sample indicator */}
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
          <View style={{
            width: 7, height: 7, borderRadius: 3.5,
            backgroundColor: colors.tealPale, borderWidth: 0.5,
            borderColor: colors.tealMuted, marginRight: 4,
          }} />
          <Text style={{ fontSize: 5, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>
            Teal cells show sample filled-in entries (Wed–Sat)
          </Text>
        </View>
      </View>

      {/* Self-care prompts checklist */}
      <View style={{ marginBottom: 10 }}>
        <Text style={sharedStyles.sectionTitle}>
          {"\u2705"} Daily Self-Care Checklist
        </Text>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ flex: 1 }}>
            {selfCarePrompts.slice(0, 3).map((prompt) => (
              <View
                key={prompt}
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginBottom: 4,
                  paddingTop: 4,
                  paddingBottom: 4,
                  paddingLeft: 6,
                  paddingRight: 6,
                  backgroundColor: colors.softGreenPale,
                  borderRadius: 3,
                  borderWidth: 0.5,
                  borderColor: colors.softGreenMuted,
                }}
              >
                <View style={sharedStyles.checkbox} />
                <Text style={{ fontSize: 7, color: colors.textDark, flex: 1, lineHeight: 1.3 }}>
                  {prompt}
                </Text>
              </View>
            ))}
          </View>
          <View style={{ flex: 1 }}>
            {selfCarePrompts.slice(3, 6).map((prompt) => (
              <View
                key={prompt}
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginBottom: 4,
                  paddingTop: 4,
                  paddingBottom: 4,
                  paddingLeft: 6,
                  paddingRight: 6,
                  backgroundColor: colors.softGreenPale,
                  borderRadius: 3,
                  borderWidth: 0.5,
                  borderColor: colors.softGreenMuted,
                }}
              >
                <View style={sharedStyles.checkbox} />
                <Text style={{ fontSize: 7, color: colors.textDark, flex: 1, lineHeight: 1.3 }}>
                  {prompt}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Quick Action Prompts */}
      <View>
        <Text style={sharedStyles.sectionTitle}>
          {"\u26A1"} Quick Action Prompts
        </Text>
        <View style={{ flexDirection: "row", gap: 6 }}>
          {[
            { emoji: "\u{1F4A7}", label: "HYDRATE", desc: "8oz water now" },
            { emoji: "\u{1F9D8}", label: "STRETCH", desc: "2-min neck/shoulders" },
            { emoji: "\u{1F4AC}", label: "CONNECT", desc: "Check in with a peer" },
            { emoji: "\u{1F634}", label: "REST", desc: "Close eyes 5 min" },
          ].map((action) => (
            <View
              key={action.label}
              style={{
                flex: 1,
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 6,
                paddingRight: 6,
                backgroundColor: colors.lavenderPale,
                borderRadius: 3,
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#D8CDE8",
              }}
            >
              <Text style={{ fontSize: 12, marginBottom: 1 }}>{action.emoji}</Text>
              <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.lavender }}>
                {action.label}
              </Text>
              <Text style={{ fontSize: 5, color: colors.textMid, textAlign: "center" }}>
                {action.desc}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>
          {"\u263E"} 2026 Night Shift Nurse Survival Bundle
        </Text>
        <Text style={sharedStyles.footerText}>Page 5 of 8</Text>
      </View>
    </Page>
  );
}
