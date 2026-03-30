import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const snackIdeas = [
  { time: "Pre-Shift (1800-1900)", items: "Balanced meal: protein + complex carbs + veggies" },
  { time: "First Break (~2100)", items: "Greek yogurt + berries, hummus + veggies" },
  { time: "Mid-Shift (~0000)", items: "Trail mix, cheese + whole grain crackers, apple + PB" },
  { time: "Late Shift (~0300)", items: "Hard-boiled egg, banana, small handful of nuts" },
  { time: "Post-Shift (~0730)", items: "Light breakfast: oatmeal, toast + avocado, smoothie" },
];

const microBreaks = [
  { when: "Every 2 hours", what: "Walk to the break room and back. Stretch neck, shoulders, wrists." },
  { when: "Before each med pass", what: "3 deep breaths. Roll shoulders back. Unclench your jaw." },
  { when: "After a code or stressful event", what: "5-minute decompression. Step outside if possible. Name 3 things you see." },
  { when: "Charting breaks", what: "Stand up every 20 min. Look away from screen (20-20-20 rule)." },
];

const burnoutSignals = [
  "Dreading shifts more than usual",
  "Snapping at colleagues or patients",
  "Cynicism about the profession",
  "Physical symptoms: headaches, GI issues, insomnia on off-days",
  "Feeling numb or detached during patient care",
  "Using food/alcohol to cope more than usual",
];

const copingStrategies = [
  "Talk to a trusted colleague or mentor",
  "Use your EAP (Employee Assistance Program)",
  "Set boundaries: say no to extra shifts when depleted",
  "Journal for 5 minutes post-shift to process",
  "Remember your 'why' - reconnect with purpose",
  "Seek professional support if symptoms persist >2 weeks",
];

export default function TipsPage() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      {/* Header */}
      <View style={{ marginBottom: 10 }}>
        <Text style={sharedStyles.headerBadge}>Quick Reference</Text>
        <Text style={[sharedStyles.pageTitle, { marginTop: 8 }]}>
          Night Shift Tips & Self-Care Prompts
        </Text>
        <Text style={sharedStyles.pageSubtitle}>
          Snack ideas, micro-break reminders, and burnout prevention.
        </Text>
      </View>

      {/* Snack Ideas */}
      <View style={{ marginBottom: 12 }}>
        <Text style={sharedStyles.sectionTitle}>
          Night Shift Snack Ideas
        </Text>
        {snackIdeas.map((snack) => (
          <View
            key={snack.time}
            style={{
              flexDirection: "row",
              marginBottom: 4,
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 8,
              paddingRight: 8,
              backgroundColor:
                snackIdeas.indexOf(snack) % 2 === 0
                  ? colors.offWhite
                  : colors.white,
              borderRadius: 2,
            }}
          >
            <Text
              style={{
                width: 120,
                fontSize: 7,
                fontFamily: "Helvetica-Bold",
                color: colors.teal,
              }}
            >
              {snack.time}
            </Text>
            <Text style={{ fontSize: 7, color: colors.textDark, flex: 1 }}>
              {snack.items}
            </Text>
          </View>
        ))}
      </View>

      {/* Micro-Break Reminders */}
      <View style={{ marginBottom: 12 }}>
        <Text style={sharedStyles.sectionTitle}>
          Micro-Break Reminders
        </Text>
        {microBreaks.map((brk) => (
          <View
            key={brk.when}
            style={{
              flexDirection: "row",
              marginBottom: 6,
              gap: 8,
            }}
          >
            <View
              style={{
                width: 90,
                backgroundColor: colors.ocean,
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 6,
                paddingRight: 6,
                borderRadius: 3,
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: "Helvetica-Bold",
                  color: colors.white,
                  textAlign: "center",
                }}
              >
                {brk.when}
              </Text>
            </View>
            <Text
              style={{ fontSize: 8, color: colors.textDark, flex: 1, lineHeight: 1.4 }}
            >
              {brk.what}
            </Text>
          </View>
        ))}
      </View>

      {/* Burnout Prevention */}
      <View style={{ marginBottom: 12 }}>
        <Text style={sharedStyles.sectionTitle}>
          Burnout Warning Signs
        </Text>
        <View
          style={{
            backgroundColor: "#FFF3E0",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 4,
            marginBottom: 8,
          }}
        >
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 4 }}>
            {burnoutSignals.map((signal) => (
              <View
                key={signal}
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  width: "48%",
                  marginBottom: 3,
                }}
              >
                <Text
                  style={{
                    fontSize: 8,
                    color: colors.coral,
                    marginRight: 4,
                  }}
                >
                  {"\u26A0"}
                </Text>
                <Text style={{ fontSize: 7, color: colors.textDark, flex: 1, lineHeight: 1.3 }}>
                  {signal}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Coping Strategies */}
      <View>
        <Text style={sharedStyles.sectionTitle}>
          Coping Strategies
        </Text>
        <View
          style={{
            backgroundColor: colors.softGreenPale,
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 4,
          }}
        >
          {copingStrategies.map((strategy) => (
            <View
              key={strategy}
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 8,
                  color: colors.softGreen,
                  marginRight: 5,
                }}
              >
                {"\u2713"}
              </Text>
              <Text style={{ fontSize: 8, color: colors.textDark, flex: 1, lineHeight: 1.3 }}>
                {strategy}
              </Text>
            </View>
          ))}
        </View>
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
