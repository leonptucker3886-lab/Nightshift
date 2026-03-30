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

// Sample filled-in data for the fatigue tracker
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
            <Text
              style={{
                fontSize: 8,
                fontFamily: "Helvetica-Bold",
                color: colors.textDark,
              }}
            >
              Fatigue
            </Text>
            <Text style={{ fontSize: 5, color: colors.textLight }}>
              (1=fresh, 10=exhausted)
            </Text>
          </View>
          {daysOfWeek.map((day, i) => (
            <View key={day} style={{ flex: 1, alignItems: "center" }}>
              <View
                style={
                  sampleFatigue[i]
                    ? {
                        width: 28,
                        height: 18,
                        borderWidth: 0.75,
                        borderColor: colors.teal,
                        backgroundColor: colors.tealPale,
                        borderRadius: 3,
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : {
                        width: 28,
                        height: 18,
                        borderWidth: 0.75,
                        borderColor: colors.tealMuted,
                        borderRadius: 3,
                        justifyContent: "center",
                        alignItems: "center",
                      }
                }
              >
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: "Helvetica-Bold",
                    color: sampleFatigue[i] ? colors.teal : "transparent",
                  }}
                >
                  {sampleFatigue[i] || "."}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Sleep hours row */}
        <View style={sharedStyles.tableRow}>
          <View style={{ width: 60 }}>
            <Text
              style={{
                fontSize: 8,
                fontFamily: "Helvetica-Bold",
                color: colors.textDark,
              }}
            >
              Sleep (hrs)
            </Text>
          </View>
          {daysOfWeek.map((day, i) => (
            <View key={day} style={{ flex: 1, alignItems: "center" }}>
              <View
                style={
                  sampleSleep[i]
                    ? {
                        width: 28,
                        height: 18,
                        borderWidth: 0.75,
                        borderColor: colors.teal,
                        backgroundColor: colors.tealPale,
                        borderRadius: 3,
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : {
                        width: 28,
                        height: 18,
                        borderWidth: 0.75,
                        borderColor: colors.tealMuted,
                        borderRadius: 3,
                        justifyContent: "center",
                        alignItems: "center",
                      }
                }
              >
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: "Helvetica-Bold",
                    color: sampleSleep[i] ? colors.teal : "transparent",
                  }}
                >
                  {sampleSleep[i] || "."}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Caffeine row */}
        <View style={{ ...sharedStyles.tableRow, backgroundColor: colors.offWhite }}>
          <View style={{ width: 60 }}>
            <Text
              style={{
                fontSize: 8,
                fontFamily: "Helvetica-Bold",
                color: colors.textDark,
              }}
            >
              Caffeine (#)
            </Text>
          </View>
          {daysOfWeek.map((day, i) => (
            <View key={day} style={{ flex: 1, alignItems: "center" }}>
              <View
                style={
                  sampleCaffeine[i]
                    ? {
                        width: 28,
                        height: 18,
                        borderWidth: 0.75,
                        borderColor: colors.teal,
                        backgroundColor: colors.tealPale,
                        borderRadius: 3,
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : {
                        width: 28,
                        height: 18,
                        borderWidth: 0.75,
                        borderColor: colors.tealMuted,
                        borderRadius: 3,
                        justifyContent: "center",
                        alignItems: "center",
                      }
                }
              >
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: "Helvetica-Bold",
                    color: sampleCaffeine[i] ? colors.teal : "transparent",
                  }}
                >
                  {sampleCaffeine[i] || "."}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Mood row */}
        <View style={sharedStyles.tableRow}>
          <View style={{ width: 60 }}>
            <Text
              style={{
                fontSize: 8,
                fontFamily: "Helvetica-Bold",
                color: colors.textDark,
              }}
            >
              Mood (1-5)
            </Text>
          </View>
          {daysOfWeek.map((day, i) => (
            <View key={day} style={{ flex: 1, alignItems: "center" }}>
              <View
                style={
                  sampleMood[i]
                    ? {
                        width: 28,
                        height: 18,
                        borderWidth: 0.75,
                        borderColor: colors.teal,
                        backgroundColor: colors.tealPale,
                        borderRadius: 3,
                        justifyContent: "center",
                        alignItems: "center",
                      }
                    : {
                        width: 28,
                        height: 18,
                        borderWidth: 0.75,
                        borderColor: colors.tealMuted,
                        borderRadius: 3,
                        justifyContent: "center",
                        alignItems: "center",
                      }
                }
              >
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: "Helvetica-Bold",
                    color: sampleMood[i] ? colors.teal : "transparent",
                  }}
                >
                  {sampleMood[i] || "."}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Sample indicator */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: colors.tealPale,
              borderWidth: 0.5,
              borderColor: colors.tealMuted,
              marginRight: 4,
            }}
          />
          <Text
            style={{
              fontSize: 6,
              color: colors.sampleText,
              fontFamily: "Helvetica-Oblique",
            }}
          >
            Teal highlighted cells show sample filled-in entries (Wed–Sat)
          </Text>
        </View>
      </View>

      {/* Self-care prompts checklist */}
      <View style={{ marginBottom: 10 }}>
        <Text style={sharedStyles.sectionTitle}>
          {"\u2705"} Daily Self-Care Checklist
        </Text>
        <Text
          style={{ fontSize: 7, color: colors.textLight, marginBottom: 6 }}
        >
          Check off each item daily. Consistency beats perfection.
        </Text>

        <View style={{ flexDirection: "row", gap: 10 }}>
          {/* Left column */}
          <View style={{ flex: 1 }}>
            {selfCarePrompts.slice(0, 3).map((prompt) => (
              <View
                key={prompt}
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginBottom: 6,
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 8,
                  paddingRight: 8,
                  backgroundColor: colors.softGreenPale,
                  borderRadius: 4,
                  borderWidth: 0.5,
                  borderColor: colors.softGreenMuted,
                }}
              >
                <View style={sharedStyles.checkbox} />
                <Text
                  style={{
                    fontSize: 7,
                    color: colors.textDark,
                    flex: 1,
                    lineHeight: 1.4,
                  }}
                >
                  {prompt}
                </Text>
              </View>
            ))}
          </View>
          {/* Right column */}
          <View style={{ flex: 1 }}>
            {selfCarePrompts.slice(3, 6).map((prompt) => (
              <View
                key={prompt}
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginBottom: 6,
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 8,
                  paddingRight: 8,
                  backgroundColor: colors.softGreenPale,
                  borderRadius: 4,
                  borderWidth: 0.5,
                  borderColor: colors.softGreenMuted,
                }}
              >
                <View style={sharedStyles.checkbox} />
                <Text
                  style={{
                    fontSize: 7,
                    color: colors.textDark,
                    flex: 1,
                    lineHeight: 1.4,
                  }}
                >
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
        <View style={{ flexDirection: "row", gap: 8 }}>
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
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 8,
                paddingRight: 8,
                backgroundColor: colors.lavenderPale,
                borderRadius: 4,
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#D8CDE8",
              }}
            >
              <Text style={{ fontSize: 14, marginBottom: 2 }}>
                {action.emoji}
              </Text>
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: "Helvetica-Bold",
                  color: colors.lavender,
                  marginBottom: 1,
                }}
              >
                {action.label}
              </Text>
              <Text
                style={{
                  fontSize: 6,
                  color: colors.textMid,
                  textAlign: "center",
                }}
              >
                {action.desc}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Notes section */}
      <View style={{ marginTop: 8 }}>
        <Text style={sharedStyles.sectionTitle}>Weekly Reflection Notes</Text>
        {Array.from({ length: 3 }, (_, i) => (
          <View key={i} style={sharedStyles.lineSpacious} />
        ))}
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
