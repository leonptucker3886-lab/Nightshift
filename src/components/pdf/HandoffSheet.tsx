import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const sbar = [
  {
    letter: "S", title: "Situation", color: colors.ocean,
    fields: [
      { label: "Patient Name / MRN", sample: "Maria Chen / MRN 4827163" },
      { label: "Room / Bed / Age / Sex", sample: "412-B / 67 / F" },
      { label: "Code Status / Allergies", sample: "Full Code / NKDA" },
      { label: "Primary Dx / Reason for Admission", sample: "CHF Exacerbation \u2014 12lb weight gain, 3 days SOB" },
      { label: "Attending / Resident", sample: "Dr. Patel / Dr. Kim (PGY-2)" },
    ],
  },
  {
    letter: "B", title: "Background", color: colors.teal,
    fields: [
      { label: "Admission Date / Admit Source", sample: "01/14/2026 / ED" },
      { label: "PMHx (relevant history)", sample: "CHF (EF 30%), HTN, DM2, CKD Stage 3" },
      { label: "Surgical Hx / Implanted Devices", sample: "CABG 2022, AICD placed 2023" },
      { label: "IV Access / Lines / Drains", sample: "20g L AC, Foley (output 200mL/shift)" },
      { label: "Isolation Precautions", sample: "None" },
    ],
  },
  {
    letter: "A", title: "Assessment", color: colors.warmOrange,
    fields: [
      { label: "Vitals: T / HR / BP / RR / SpO2", sample: "37.1 / 88 / 142/86 / 22 / 91% on 2L NC" },
      { label: "Pain (0-10, location, quality)", sample: "3/10, diffuse chest tightness, non-pleuritic" },
      { label: "Neuro / Mental Status", sample: "A&Ox3, no acute changes" },
      { label: "Cardio / Resp / GI-GU Status", sample: "JVD 3cm, bilateral crackles, low urine output" },
      { label: "Skin / Wounds / Fall Risk", sample: "Intact, no edema breakdown. Morse: 45 (mod risk)" },
    ],
  },
  {
    letter: "R", title: "Recommendation", color: colors.softGreen,
    fields: [
      { label: "Active Orders / Pending Results", sample: "BMP at 0400, CXR pending, daily weight 0600" },
      { label: "IV Fluids / Med Changes Expected", sample: "Lasix 40mg IV q12h, hold if UOP <30mL/hr" },
      { label: "Concerns to Watch / Anticipated Needs", sample: "Watch SpO2, may need BiPAP if <88% on 4L" },
      { label: "Specific Asks of Next RN / Provider", sample: "Call MD if UOP <100mL/4hr or SpO2 <88%" },
      { label: "Patient/Family Updates Given", sample: "Patient aware of plan. Daughter called at 2200." },
    ],
  },
];

const vitalsTrend = [
  { time: "1900", hr: "88", bp: "142/86", rr: "22", spo2: "91%", temp: "37.1" },
  { time: "2300", hr: "82", bp: "138/82", rr: "20", spo2: "93%", temp: "37.0" },
  { time: "0300", hr: "", bp: "", rr: "", spo2: "", temp: "" },
  { time: "0700", hr: "", bp: "", rr: "", spo2: "", temp: "" },
];

export default function HandoffSheet() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Patient Safety</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>SBAR Patient Handoff / Report Sheet</Text>
          <Text style={sharedStyles.pageSubtitle}>Structured communication for safe shift-to-shift handoffs. One sheet per patient.</Text>
        </View>

        {/* Patient ID bar */}
        <View style={{ flexDirection: "row", backgroundColor: colors.ice, paddingTop: 4, paddingBottom: 4, paddingLeft: 6, paddingRight: 6, borderRadius: 3, marginBottom: 6, gap: 6, borderWidth: 0.5, borderColor: colors.tealPale }}>
          {["Patient", "Room", "Date", "Shift", "RN"].map((l) => (
            <View key={l} style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginRight: 2 }}>{l}:</Text>
              <View style={{ flex: 1, borderBottomWidth: 0.5, borderBottomColor: colors.tealMuted }}><Text style={{ fontSize: 4, color: "transparent" }}>.</Text></View>
            </View>
          ))}
        </View>

        {/* SBAR Sections */}
        {sbar.map((section, si) => (
          <View key={section.letter} style={{ marginBottom: 4 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
              <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: section.color, justifyContent: "center", alignItems: "center", marginRight: 5 }}>
                <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", color: colors.white }}>{section.letter}</Text>
              </View>
              <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: colors.deepNavy }}>{section.title}</Text>
            </View>
            {section.fields.map((f) => {
              const hasSample = si === 0 && f.sample;
              return (
                <View key={f.label} style={{ marginLeft: 23, marginBottom: 2 }}>
                  <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 0.5 }}>{f.label}</Text>
                  {hasSample ? (
                    <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{f.sample}</Text></View>
                  ) : (
                    <View style={{ height: 13, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray, backgroundColor: si === 0 ? colors.sampleBlue : colors.offWhite, paddingLeft: 2, justifyContent: "center", borderRadius: 1 }}>
                      <Text style={{ fontSize: 4, color: "transparent" }}>.</Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        ))}

        {/* Vitals Trend Strip */}
        <View style={{ marginTop: 2, marginBottom: 4 }}>
          <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>Vitals Trend (this shift)</Text>
          <View style={{ flexDirection: "row", backgroundColor: colors.deepNavy, paddingTop: 2, paddingBottom: 2, paddingLeft: 4, paddingRight: 4, borderTopLeftRadius: 2, borderTopRightRadius: 2 }}>
            {["Time", "HR", "BP", "RR", "SpO2", "Temp"].map((h) => (
              <View key={h} style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 4, fontFamily: "Helvetica-Bold", color: colors.tealLight, textTransform: "uppercase" }}>{h}</Text>
              </View>
            ))}
          </View>
          {vitalsTrend.map((v, i) => (
            <View key={v.time} style={{ flexDirection: "row", paddingTop: 1.5, paddingBottom: 1.5, paddingLeft: 4, paddingRight: 4, backgroundColor: i % 2 === 0 ? colors.offWhite : colors.white, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray }}>
              <View style={{ flex: 1, alignItems: "center" }}><Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textDark }}>{v.time}</Text></View>
              {[v.hr, v.bp, v.rr, v.spo2, v.temp].map((val, vi) => (
                <View key={vi} style={{ flex: 1, alignItems: "center" }}>
                  <Text style={{ fontSize: 5, color: val ? colors.sampleText : "transparent", fontFamily: val ? "Helvetica-Oblique" : "Helvetica" }}>{val || "."}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* System Assessment Quick Cues */}
        <View style={{ marginBottom: 4 }}>
          <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>System Assessment Cues</Text>
          <View style={{ flexDirection: "row", gap: 4 }}>
            {[
              { sys: "Neuro", cues: "A&O, pupils, motor, headache" },
              { sys: "Cardio", cues: "Rhythm, edema, JVD, pulses" },
              { sys: "Resp", cues: "Lungs, O2, cough, secretions" },
              { sys: "GI/GU", cues: "Diet, BM, UO, nausea, abd" },
            ].map((s) => (
              <View key={s.sys} style={{ flex: 1, backgroundColor: colors.ice, borderRadius: 2, paddingTop: 2, paddingBottom: 2, paddingLeft: 3, paddingRight: 3 }}>
                <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.ocean }}>{s.sys}</Text>
                <Text style={{ fontSize: 4, color: colors.textLight }}>{s.cues}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Sample indicator + Don't Forget */}
        <View style={{ flexDirection: "row", gap: 6 }}>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
              <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: colors.sampleBlue, marginRight: 2 }} />
              <Text style={{ fontSize: 4, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>Blue = sample patient data (Maria Chen, CHF)</Text>
            </View>
            <Text style={sharedStyles.sectionTitle}>Critical Orders / Follow-Up</Text>
            {Array.from({ length: 3 }, (_, i) => (
              <View key={i} style={{ flexDirection: "row", alignItems: "center", marginBottom: 1.5 }}>
                <View style={{ ...sharedStyles.checkbox, width: 7, height: 7 }} />
                <View style={{ flex: 1, height: 11, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray }} />
              </View>
            ))}
          </View>
          <View style={{ flex: 1 }}>
            <Text style={sharedStyles.sectionTitle}>{"\u2757"} Don\u2019t Forget</Text>
            {["Pain reassessment q2h", "I&O charting", "Daily weight 0600", "Fall risk precautions", "Code status confirmed"].map((item) => (
              <View key={item} style={{ flexDirection: "row", alignItems: "center", marginBottom: 1.5 }}>
                <View style={{ ...sharedStyles.checkbox, width: 7, height: 7 }} />
                <Text style={{ fontSize: 5, color: colors.textDark, flex: 1 }}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 3 of 8</Text>
      </View>
    </Page>
  );
}
