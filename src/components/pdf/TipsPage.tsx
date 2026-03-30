import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const snacks = [
  { t: "Pre-Shift (1800–1900)", d: "Balanced meal: protein + complex carbs + veggies" },
  { t: "First Break (~2100)", d: "Greek yogurt + berries, hummus + veggies" },
  { t: "Mid-Shift (~0000)", d: "Trail mix, cheese + crackers, apple + PB" },
  { t: "Late Shift (~0300)", d: "Hard-boiled egg, banana, small handful of nuts" },
  { t: "Post-Shift (~0730)", d: "Light breakfast: oatmeal, toast + avocado" },
];

const breaks = [
  { w: "Every 2 hours", d: "Walk to break room. Stretch neck, shoulders, wrists." },
  { w: "Before med pass", d: "3 deep breaths. Roll shoulders back. Unclench jaw." },
  { w: "After a code", d: "5-min decompression. Step outside. Name 3 things you see." },
  { w: "Charting", d: "Stand up every 20 min. Look away from screen (20-20-20)." },
];

const burnout = ["Dreading shifts more than usual", "Snapping at colleagues or patients", "Cynicism about the profession", "Physical symptoms: headaches, GI issues", "Feeling numb during patient care", "Using food/alcohol to cope"];

const coping = ["Talk to a trusted colleague or mentor", "Use your EAP (Employee Assistance Program)", "Say no to extra shifts when depleted", "Journal 5 min post-shift to process", "Remember your \u2018why' \u2014 reconnect with purpose", "Seek support if symptoms persist >2 weeks"];

export default function TipsPage() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Quick Reference</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>Night Shift Tips & Self-Care</Text>
          <Text style={sharedStyles.pageSubtitle}>Snack ideas, micro-break reminders, and burnout prevention.</Text>
        </View>

        <Text style={sharedStyles.sectionTitle}>Night Shift Snack Ideas</Text>
        {snacks.map((s, i) => (
          <View key={s.t} style={{ flexDirection: "row", marginBottom: 1, paddingTop: 2, paddingBottom: 2, paddingLeft: 5, paddingRight: 5, backgroundColor: i % 2 === 0 ? colors.offWhite : colors.white, borderRadius: 2 }}>
            <Text style={{ width: 95, fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal }}>{s.t}</Text>
            <Text style={{ fontSize: 5, color: colors.textDark, flex: 1 }}>{s.d}</Text>
          </View>
        ))}

        <Text style={sharedStyles.sectionTitle}>Micro-Break Reminders</Text>
        {breaks.map((b) => (
          <View key={b.w} style={{ flexDirection: "row", marginBottom: 3, gap: 5 }}>
            <View style={{ width: 72, backgroundColor: colors.ocean, paddingTop: 2, paddingBottom: 2, paddingLeft: 4, paddingRight: 4, borderRadius: 2 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.white, textAlign: "center" }}>{b.w}</Text>
            </View>
            <Text style={{ fontSize: 6, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{b.d}</Text>
          </View>
        ))}

        <Text style={sharedStyles.sectionTitle}>Burnout Warning Signs</Text>
        <View style={{ backgroundColor: colors.warmOrangePale, paddingTop: 4, paddingBottom: 4, paddingLeft: 6, paddingRight: 6, borderRadius: 2 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 2 }}>
            {burnout.map((s) => (
              <View key={s} style={{ flexDirection: "row", width: "48%", marginBottom: 1 }}>
                <Text style={{ fontSize: 5, color: colors.coral, marginRight: 2 }}>{"\u25CF"}</Text>
                <Text style={{ fontSize: 5, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{s}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={sharedStyles.sectionTitle}>Coping Strategies</Text>
        <View style={{ backgroundColor: colors.softGreenPale, paddingTop: 4, paddingBottom: 4, paddingLeft: 6, paddingRight: 6, borderRadius: 2 }}>
          {coping.map((s) => (
            <View key={s} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 2 }}>
              <View style={{ ...sharedStyles.checkbox, borderColor: colors.softGreen, width: 7, height: 7 }} />
              <Text style={{ fontSize: 6, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{s}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 7 of 8</Text>
      </View>
    </Page>
  );
}
