import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const windDownSteps = [
  {
    time: "Before Shift Ends",
    icon: "\u{1F319}",
    items: [
      "Stop caffeine at least 6 hours before planned sleep",
      "Complete handoff using your SBAR sheet",
      "Hydrate with water (not energy drinks)",
      "Set phone to Do Not Disturb",
    ],
  },
  {
    time: "Commute Home",
    icon: "\u{1F697}",
    items: [
      "Wear blue-light blocking glasses if driving at dawn",
      "Listen to calming music or a sleep podcast",
      "Avoid stimulating conversations or news",
      "Keep car cool to promote drowsiness",
    ],
  },
  {
    time: "Arrival Home (Wind-Down)",
    icon: "\u{1F3E0}",
    items: [
      "Do NOT check work email or schedule apps",
      "Light snack if hungry (protein + complex carbs)",
      "Warm shower or bath to lower core temperature after",
      "Change into sleep clothes immediately",
      "Set room to 65–68F (18–20C)",
      "Blackout curtains + eye mask ready",
      "White noise machine or earplugs",
    ],
  },
  {
    time: "Sleep Setup",
    icon: "\u{1F634}",
    items: [
      "No screens 30 min before sleep (or use night mode)",
      "Brief breathing exercise: 4-7-8 technique",
      "Write tomorrow's worries in a notebook, then close it",
      "Target 7–8 hours of sleep",
    ],
  },
];

const recoveryDayItems = [
  "Sleep in / nap if needed (limit naps to 90 min if flipping back)",
  "Gentle movement: walk, yoga, or stretching (15–30 min)",
  "Eat a nourishing meal (avoid just caffeine + sugar)",
  "1 hour of non-work activity you enjoy",
  "Social connection (even a short call or text)",
  "Prep for next shift: uniform, bag, meals",
  "Set an alarm to avoid oversleeping before next night",
];

export default function RecoveryChecklist() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      {/* Header */}
      <View style={sharedStyles.pageHeader}>
        <Text style={sharedStyles.headerBadge}>Recovery & Rest</Text>
        <Text style={[sharedStyles.pageTitle, { marginTop: 8 }]}>
          Post-Shift Sleep Recovery Checklist
        </Text>
        <Text style={sharedStyles.pageSubtitle}>
          Wind-down steps after your night shift + recovery day planner.
        </Text>
      </View>

      {/* Caffeine Cutoff Callout */}
      <View
        style={{
          backgroundColor: colors.goldPale,
          borderLeftWidth: 3,
          borderLeftColor: colors.warmOrange,
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 12,
          paddingRight: 12,
          borderRadius: 4,
          marginBottom: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 0.5,
          borderColor: "#F0D9B5",
        }}
      >
        <Text style={{ fontSize: 20, marginRight: 10 }}>{"\u2615"}</Text>
        <View>
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Helvetica-Bold",
              color: colors.warmOrange,
            }}
          >
            CAFFEINE CUTOFF RULE
          </Text>
          <Text style={{ fontSize: 8, color: colors.textMid, lineHeight: 1.4 }}>
            No caffeine within 6 hours of your target sleep time. If you sleep
            at 0900, last coffee by 0300.
          </Text>
        </View>
      </View>

      {/* Wind-down steps */}
      {windDownSteps.map((phase) => (
        <View key={phase.time} style={{ marginBottom: 8 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <Text style={{ fontSize: 10, marginRight: 5 }}>{phase.icon}</Text>
            <Text
              style={{
                fontSize: 10,
                fontFamily: "Helvetica-Bold",
                color: colors.deepNavy,
              }}
            >
              {phase.time}
            </Text>
          </View>
          {phase.items.map((item) => (
            <View
              key={item}
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginLeft: 20,
                marginBottom: 3,
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
                {item}
              </Text>
            </View>
          ))}
        </View>
      ))}

      {/* Recovery Day Planner */}
      <View style={{ marginTop: 4 }}>
        <View
          style={{
            backgroundColor: colors.tealPale,
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 12,
            paddingRight: 12,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Helvetica-Bold",
              color: colors.teal,
            }}
          >
            {"\u{1F4C5}"} Recovery Day Planner
          </Text>
          <Text style={{ fontSize: 7, color: colors.textMid }}>
            Use this on your off days between night shifts
          </Text>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: colors.tealPale,
            borderTopWidth: 0,
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 12,
            paddingRight: 12,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          }}
        >
          {recoveryDayItems.map((item) => (
            <View
              key={item}
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 4,
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
                {item}
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
        <Text style={sharedStyles.footerText}>Page 6 of 8</Text>
      </View>
    </Page>
  );
}
