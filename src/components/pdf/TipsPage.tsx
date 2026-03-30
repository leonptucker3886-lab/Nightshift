import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const snacks = [
  { t: "Pre-Shift (1800)", d: "Full meal: grilled chicken, brown rice, roasted veggies" },
  { t: "Break 1 (~2100)", d: "Greek yogurt + berries, or hummus + veggies + pita" },
  { t: "Mid-Shift (~0000)", d: "Trail mix, cheese + whole grain crackers, apple + PB" },
  { t: "Break 2 (~0300)", d: "Hard-boiled egg, banana, small handful of almonds" },
  { t: "Post-Shift (~0730)", d: "Light: oatmeal, toast + avocado, or smoothie (no heavy meals)" },
];

const brainRef = [
  { sys: "Neuro", cues: "A&O x__ | Pupils: ___ | Motor: ___ | Pain: ___/10 | GCS: ___" },
  { sys: "Cardio", cues: "Rhythm: ___ | Rate: ___ | Edema: Y/N | JVD: Y/N | Pulses: ___" },
  { sys: "Resp", cues: "Lungs: ___ | SpO2: ___% | O2: ___ | Cough: ___ | Secretions: ___" },
  { sys: "GI/GU", cues: "Diet: ___ | Last BM: ___ | UO: ___mL/hr | N/V: Y/N | Abd: ___" },
  { sys: "Skin", cues: "Integrity: ___ | Wounds: ___ | Braden: ___ | Dressing: ___" },
  { sys: "IV/Meds", cues: "Access: ___ | Rate: ___ | Due: ___ | PRN avail: ___" },
];

const burnout = ["Dreading shifts more than usual", "Snapping at colleagues/patients", "Cynicism about nursing", "Headaches, GI issues, insomnia", "Feeling numb during care", "Using food/alcohol to cope"];

const coping = ["Talk to a trusted colleague or mentor", "Use your EAP \u2014 it's free and confidential", "Say no to extra shifts when depleted", "Journal 5 min post-shift (brain dump)", "Reconnect with your 'why' monthly", "Seek support if symptoms persist >2 weeks"];

export default function TipsPage() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Quick Reference</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>Night Shift Tips & Nurse Brain</Text>
          <Text style={sharedStyles.pageSubtitle}>Snack ideas, burnout prevention, and quick-reference assessment cues.</Text>
        </View>

        {/* Snack Ideas */}
        <Text style={sharedStyles.sectionTitle}>Night Shift Nutrition</Text>
        {snacks.map((s, i) => (
          <View key={s.t} style={{ flexDirection: "row", marginBottom: 1, paddingTop: 1.5, paddingBottom: 1.5, paddingLeft: 4, paddingRight: 4, backgroundColor: i % 2 === 0 ? colors.offWhite : colors.white, borderRadius: 1 }}>
            <Text style={{ width: 80, fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal }}>{s.t}</Text>
            <Text style={{ fontSize: 5, color: colors.textDark, flex: 1 }}>{s.d}</Text>
          </View>
        ))}
        <Text style={{ fontSize: 4, color: colors.textLight, fontFamily: "Helvetica-Oblique", marginTop: 1, marginBottom: 4 }}>
          Rule of thumb: protein + complex carbs every 3–4 hrs. Avoid sugar spikes after 0300.
        </Text>

        {/* Nurse Brain Quick Reference */}
        <Text style={sharedStyles.sectionTitle}>System Assessment Cues (Nurse Brain)</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 3, marginBottom: 4 }}>
          {brainRef.map((b) => (
            <View key={b.sys} style={{ width: "32%", backgroundColor: colors.ice, borderRadius: 2, paddingTop: 2, paddingBottom: 2, paddingLeft: 4, paddingRight: 4, borderWidth: 0.5, borderColor: colors.tealPale }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.ocean }}>{b.sys}</Text>
              <Text style={{ fontSize: 4, color: colors.textMid, lineHeight: 1.2 }}>{b.cues}</Text>
            </View>
          ))}
        </View>

        {/* Vitals Normal Ranges */}
        <View style={{ backgroundColor: colors.ice, borderRadius: 2, paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5, marginBottom: 4, borderWidth: 0.5, borderColor: colors.tealPale }}>
          <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 1 }}>Adult Vitals Normal Ranges</Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            {[
              "HR: 60–100",
              "BP: 90/60–140/90",
              "RR: 12–20",
              "SpO2: >95%",
              "Temp: 36.1–37.2C",
            ].map((v) => (
              <Text key={v} style={{ fontSize: 4, color: colors.textMid, fontFamily: "Helvetica-Bold" }}>{v}</Text>
            ))}
          </View>
        </View>

        {/* Burnout Warning Signs */}
        <Text style={sharedStyles.sectionTitle}>Burnout Warning Signs</Text>
        <View style={{ backgroundColor: colors.warmOrangePale, paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5, borderRadius: 2, marginBottom: 4 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 2 }}>
            {burnout.map((s) => (
              <View key={s} style={{ flexDirection: "row", width: "48%", marginBottom: 1 }}>
                <Text style={{ fontSize: 4, color: colors.coral, marginRight: 1 }}>{"\u25CF"}</Text>
                <Text style={{ fontSize: 4, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{s}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Coping Strategies */}
        <Text style={sharedStyles.sectionTitle}>Coping Strategies</Text>
        <View style={{ backgroundColor: colors.softGreenPale, paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5, borderRadius: 2 }}>
          {coping.map((s) => (
            <View key={s} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 1.5 }}>
              <View style={{ ...sharedStyles.checkbox, borderColor: colors.softGreen, width: 6, height: 6 }} />
              <Text style={{ fontSize: 5, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{s}</Text>
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
