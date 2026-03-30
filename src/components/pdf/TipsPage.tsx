import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const snackIdeas = [
  { time: "Pre-Shift (1800–1900)", items: "Balanced meal: protein + complex carbs + veggies" },
  { time: "First Break (~2100)", items: "Greek yogurt + berries, hummus + veggies" },
  { time: "Mid-Shift (~0000)", items: "Trail mix, cheese + whole grain crackers, apple + PB" },
  { time: "Late Shift (~0300)", items: "Hard-boiled egg, banana, small handful of nuts" },
  { time: "Post-Shift (~0730)", items: "Light breakfast: oatmeal, toast + avocado, smoothie" },
];

const microBreaks = [
  { when: "Every 2 hours", what: "Walk to break room. Stretch neck, shoulders, wrists." },
  { when: "Before med pass", what: "3 deep breaths. Roll shoulders back. Unclench jaw." },
  { when: "After a code", what: "5-min decompression. Step outside. Name 3 things you see." },
  { when: "Charting", what: "Stand up every 20 min. Look away from screen (20-20-20)." },
];

const burnoutSignals = [
  "Dreading shifts more than usual",
  "Snapping at colleagues or patients",
  "Cynicism about the profession",
  "Physical symptoms: headaches, GI issues, insomnia",
  "Feeling numb or detached during patient care",
  "Using food/alcohol to cope more than usual",
];

const copingStrategies = [
  "Talk to a trusted colleague or mentor",
  "Use your EAP (Employee Assistance Program)",
  "Set boundaries: say no to extra shifts when depleted",
  "Journal for 5 minutes post-shift to process",
  "Remember your \u2018why' \u2014 reconnect with purpose",
  "Seek professional support if symptoms persist >2 weeks",
];

export default function TipsPage() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      {/* Header */}
      <View style={sharedStyles.pageHeader}>
        <Text style={sharedStyles.headerBadge}>Quick Reference</Text>
        <Text style={[sharedStyles.pageTitle, { marginTop: 8 }]}>
          Night Shift Tips & Self-Care Prompts
        </Text>
        <Text style={sharedStyles.pageSubtitle}>
          Snack ideas, micro-break reminders, and burnout prevention.
        </Text>
      </View>

      {/* Snack Ideas */}
      <View style={{ marginBottom: 8 }}>
        <Text style={sharedStyles.sectionTitle}>
          {"\u{1F957}"} Night Shift Snack Ideas
        </Text>
        {snackIdeas.map((snack, idx) => (
          <View
            key={snack.time}
            style={{
              flexDirection: "row",
              marginBottom: 1,
              paddingTop: 3,
              paddingBottom: 3,
              paddingLeft: 6,
              paddingRight: 6,
              backgroundColor: idx % 2 === 0 ? colors.offWhite : colors.white,
              borderRadius: 2,
            }}
          >
            <Text style={{ width: 105, fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal }}>
              {snack.time}
            </Text>
            <Text style={{ fontSize: 6, color: colors.textDark, flex: 1 }}>
              {snack.items}
            </Text>
          </View>
        ))}
      </View>

      {/* Micro-Break Reminders */}
      <View style={{ marginBottom: 8 }}>
        <Text style={sharedStyles.sectionTitle}>
          {"\u23F1"} Micro-Break Reminders
        </Text>
        {microBreaks.map((brk) => (
          <View key={brk.when} style={{ flexDirection: "row", marginBottom: 4, gap: 6 }}>
            <View
              style={{
                width: 80,
                backgroundColor: colors.ocean,
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 3,
              }}
            >
              <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.white, textAlign: "center" }}>
                {brk.when}
              </Text>
            </View>
            <Text style={{ fontSize: 7, color: colors.textDark, flex: 1, lineHeight: 1.3 }}>
              {brk.what}
            </Text>
          </View>
        ))}
      </View>

      {/* Burnout Prevention */}
      <View style={{ marginBottom: 8 }}>
        <Text style={sharedStyles.sectionTitle}>
          {"\u26A0"} Burnout Warning Signs
        </Text>
        <View
          style={{
            backgroundColor: colors.warmOrangePale,
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 8,
            paddingRight: 8,
            borderRadius: 3,
          }}
        >
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 2 }}>
            {burnoutSignals.map((signal) => (
              <View key={signal} style={{ flexDirection: "row", alignItems: "flex-start", width: "48%", marginBottom: 2 }}>
                <Text style={{ fontSize: 6, color: colors.coral, marginRight: 3, marginTop: 1 }}>{"\u25CF"}</Text>
                <Text style={{ fontSize: 6, color: colors.textDark, flex: 1, lineHeight: 1.3 }}>
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
          {"\u2705"} Coping Strategies
        </Text>
        <View
          style={{
            backgroundColor: colors.softGreenPale,
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 8,
            paddingRight: 8,
            borderRadius: 3,
            borderWidth: 0.5,
            borderColor: colors.softGreenMuted,
          }}
        >
          {copingStrategies.map((strategy) => (
            <View key={strategy} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 3 }}>
              <View style={{ ...sharedStyles.checkbox, borderColor: colors.softGreen, width: 9, height: 9 }} />
              <Text style={{ fontSize: 7, color: colors.textDark, flex: 1, lineHeight: 1.3 }}>
                {strategy}
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
        <Text style={sharedStyles.footerText}>Page 7 of 8</Text>
      </View>
    </Page>
  );
}
