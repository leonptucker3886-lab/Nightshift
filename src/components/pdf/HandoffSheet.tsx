import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const sbar = [
  { letter: "S", title: "Situation", color: colors.ocean, fields: ["Patient Name / Room # / Bed", "Age / Sex / Code Status", "Primary Diagnosis / Reason for Admission", "Current Concern / Issue"] },
  { letter: "B", title: "Background", color: colors.teal, fields: ["Admission Date / Admitting Provider", "Relevant Medical / Surgical History", "Allergies", "Current IV Access / Lines / Drains"] },
  { letter: "A", title: "Assessment", color: colors.warmOrange, fields: ["Current Vital Signs (T / HR / BP / RR / SpO2)", "Pain Assessment (0-10, location, quality)", "Neuro / Respiratory / Cardio / GI-GU Status", "Lab Results / Imaging Findings"] },
  { letter: "R", title: "Recommendation", color: colors.softGreen, fields: ["Pending Orders / Interventions Needed", "Anticipated Changes / Concerns to Watch", "Specific Asks of Receiving RN / Provider", "Patient/Family Updates Given"] },
];

const sample: Record<string, string> = {
  "Patient Name / Room # / Bed": "Maria Chen / Room 412-B",
  "Age / Sex / Code Status": "67 / F / Full Code",
  "Primary Diagnosis / Reason for Admission": "CHF exacerbation \u2014 increased SOB, weight gain",
  "Current Concern / Issue": "O2 sat dropped to 89% on RA, now on 2L NC",
};

export default function HandoffSheet() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Patient Safety</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>SBAR Patient Handoff / Report Sheet</Text>
          <Text style={sharedStyles.pageSubtitle}>Structured communication for safe shift-to-shift handoffs. One sheet per patient.</Text>
        </View>

        <View style={{ flexDirection: "row", backgroundColor: colors.ice, paddingTop: 4, paddingBottom: 4, paddingLeft: 6, paddingRight: 6, borderRadius: 3, marginBottom: 6, gap: 6, borderWidth: 0.5, borderColor: colors.tealPale }}>
          {["Patient Name", "Room / Bed", "Date", "Shift", "RN"].map((l) => (
            <View key={l} style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginRight: 2 }}>{l}:</Text>
              <View style={{ flex: 1, borderBottomWidth: 0.5, borderBottomColor: colors.tealMuted }}><Text style={{ fontSize: 4, color: "transparent" }}>.</Text></View>
            </View>
          ))}
        </View>

        {sbar.map((s, si) => (
          <View key={s.letter} style={{ marginBottom: 5 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
              <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: s.color, justifyContent: "center", alignItems: "center", marginRight: 5 }}>
                <Text style={{ fontSize: 10, fontFamily: "Helvetica-Bold", color: colors.white }}>{s.letter}</Text>
              </View>
              <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", color: colors.deepNavy }}>{s.title}</Text>
            </View>
            {s.fields.map((f) => {
              const sv = si === 0 && sample[f];
              return (
                <View key={f} style={{ marginLeft: 25, marginBottom: 2 }}>
                  <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>{f}</Text>
                  {sv ? (
                    <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{sv}</Text></View>
                  ) : (
                    <View style={{ height: 16, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray, backgroundColor: colors.offWhite, paddingLeft: 2, justifyContent: "center", borderRadius: 1 }}><Text style={{ fontSize: 4, color: "transparent" }}>.</Text></View>
                  )}
                </View>
              );
            })}
          </View>
        ))}

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 3 }}>
          <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: colors.sampleBlue, marginRight: 3 }} />
          <Text style={{ fontSize: 4, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>Blue entries show sample data</Text>
        </View>

        <Text style={sharedStyles.sectionTitle}>Critical Orders / Follow-Up</Text>
        {Array.from({ length: 4 }, (_, i) => (
          <View key={i} style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
            <View style={sharedStyles.checkbox} />
            <View style={{ flex: 1, height: 13, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray }} />
          </View>
        ))}
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 3 of 8</Text>
      </View>
    </Page>
  );
}
