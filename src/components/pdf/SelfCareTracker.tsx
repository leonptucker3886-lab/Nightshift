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

export default function SelfCareTracker() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      {/* Header */}
      <View style={{ marginBottom: 6 }}>
        <Text style={sharedStyles.headerBadge}>Wellness Tracking</Text>
        <Text style={[sharedStyles.pageTitle, { marginTop: 4 }]}>
          Daily Fatigue & Self-Care Tracker
        </Text>
        <Text style={sharedStyles.pageSubtitle}>
          Rate your alertness 1-10 after each shift. Track self-care habits and
          spot patterns.
        </Text>
      </View>

      {/* Week tracker */}
      <View style={{ marginBottom: 8 }}>
        <Text style={sharedStyles.sectionTitle}>Weekly Alertness Log</Text>

        {/* Header row */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: colors.deepNavy,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 8,
            paddingRight: 8,
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
          }}
        >
          <View style={{ width: 50 }}>
            <Text
              style={{
                fontSize: 7,
                fontFamily: "Helvetica-Bold",
                color: colors.tealLight,
              }}
            >
              METRIC
            </Text>
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
        <View
          style={{
            flexDirection: "row",
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 8,
            paddingRight: 8,
            backgroundColor: colors.offWhite,
            borderBottomWidth: 0.5,
            borderBottomColor: colors.lightGray,
            alignItems: "center",
          }}
        >
          <View style={{ width: 50 }}>
            <Text
              style={{
                fontSize: 8,
                fontFamily: "Helvetica-Bold",
                color: colors.textDark,
              }}
            >
              Fatigue
            </Text>
            <Text style={{ fontSize: 6, color: colors.textLight }}>
              (1=fresh, 10=exhausted)
            </Text>
          </View>
          {daysOfWeek.map((day) => (
            <View
              key={day}
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 28,
                  height: 18,
                  borderWidth: 0.75,
                  borderColor: colors.mediumGray,
                  borderRadius: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 7, color: "transparent" }}>.</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Sleep hours row */}
        <View
          style={{
            flexDirection: "row",
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 8,
            paddingRight: 8,
            borderBottomWidth: 0.5,
            borderBottomColor: colors.lightGray,
            alignItems: "center",
          }}
        >
          <View style={{ width: 50 }}>
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
          {daysOfWeek.map((day) => (
            <View key={day} style={{ flex: 1, alignItems: "center" }}>
              <View
                style={{
                  width: 28,
                  height: 18,
                  borderWidth: 0.75,
                  borderColor: colors.mediumGray,
                  borderRadius: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 7, color: "transparent" }}>.</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Caffeine row */}
        <View
          style={{
            flexDirection: "row",
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 8,
            paddingRight: 8,
            backgroundColor: colors.offWhite,
            borderBottomWidth: 0.5,
            borderBottomColor: colors.lightGray,
            alignItems: "center",
          }}
        >
          <View style={{ width: 50 }}>
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
          {daysOfWeek.map((day) => (
            <View key={day} style={{ flex: 1, alignItems: "center" }}>
              <View
                style={{
                  width: 28,
                  height: 18,
                  borderWidth: 0.75,
                  borderColor: colors.mediumGray,
                  borderRadius: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 7, color: "transparent" }}>.</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Mood row */}
        <View
          style={{
            flexDirection: "row",
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 8,
            paddingRight: 8,
            borderBottomWidth: 0.5,
            borderBottomColor: colors.lightGray,
            alignItems: "center",
          }}
        >
          <View style={{ width: 50 }}>
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
          {daysOfWeek.map((day) => (
            <View key={day} style={{ flex: 1, alignItems: "center" }}>
              <View
                style={{
                  width: 28,
                  height: 18,
                  borderWidth: 0.75,
                  borderColor: colors.mediumGray,
                  borderRadius: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 7, color: "transparent" }}>.</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Self-care prompts checklist */}
      <View style={{ marginBottom: 8 }}>
        <Text style={sharedStyles.sectionTitle}>
          Daily Self-Care Checklist
        </Text>
        <Text style={{ fontSize: 6, color: colors.textLight, marginBottom: 4 }}>
          Check off each item daily. Consistency beats perfection.
        </Text>

        <View style={{ flexDirection: "row", gap: 12 }}>
          {/* Left column */}
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
                }}
              >
                <View style={sharedStyles.checkbox} />
                <Text
                  style={{
                    fontSize: 8,
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
              marginBottom: 4,
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 6,
              paddingRight: 6,
                  backgroundColor: colors.softGreenPale,
                  borderRadius: 3,
                }}
              >
                <View style={sharedStyles.checkbox} />
                <Text
                  style={{
                    fontSize: 8,
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
          Quick Action Prompts
        </Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          {[
            { emoji: "\u{1F4A7}", label: "HYDRATE", desc: "8oz water now" },
            {
              emoji: "\u{1F9D8}",
              label: "STRETCH",
              desc: "2-min neck/shoulders",
            },
            {
              emoji: "\u{1F4AC}",
              label: "CONNECT",
              desc: "Check in with a peer",
            },
            {
              emoji: "\u{1F634}",
              label: "REST",
              desc: "Close eyes 5 min",
            },
          ].map((action) => (
            <View
              key={action.label}
              style={{
                flex: 1,
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 10,
                paddingRight: 10,
                backgroundColor: colors.lavenderPale,
                borderRadius: 4,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, marginBottom: 3 }}>
                {action.emoji}
              </Text>
              <Text
                style={{
                  fontSize: 8,
                  fontFamily: "Helvetica-Bold",
                  color: colors.lavender,
                  marginBottom: 2,
                }}
              >
                {action.label}
              </Text>
              <Text style={{ fontSize: 6, color: colors.textMid, textAlign: "center" }}>
                {action.desc}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Notes section */}
      <View style={{ marginTop: 6 }}>
        <Text style={sharedStyles.sectionTitle}>Weekly Reflection Notes</Text>
        {Array.from({ length: 3 }, (_, i) => (
          <View
            key={i}
            style={{
              ...sharedStyles.line,
              height: 18,
            }}
          />
        ))}
      </View>

      {/* Footer */}
      <View style={sharedStyles.footer} fixed>
        <Text style={sharedStyles.footerText}>
          2026 Night Shift Nurse Survival Bundle
        </Text>
        <Text
          render={({ pageNumber }) => `Page ${pageNumber} of 8`}
          style={sharedStyles.footerText}
        />
      </View>
    </Page>
  );
}
