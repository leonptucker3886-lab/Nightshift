import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

// Sample patient: post-op med-surg with pain and low BP
const s = {
  name: "Angela Torres",
  mrn: "MRN 6174829",
  room: "415-B",
  ageSex: "45 / F",
  codeStatus: "Full Code",
  allergies: "Latex (anaphylaxis), Morphine (pruritus)",
  admitDate: "03/30/2026",
  admitSource: "OR (post-op)",
  attending: "Dr. Okonkwo",
  fallRisk: "Morse: 55 (high) \u2014 post-op, IV pole, pain",
  isolation: "None",
  dx: "Post-op Day 1 \u2014 L knee arthroplasty (TKA). Moderate pain, BP trending low.",
  pmhx: "OA bilateral knees, HTN (controlled), BMI 31, no cardiac hx",
  surgicalHx: "L TKA 03/30/2026, Cholecystectomy 2012",
  iv: "20g L hand \u2014 LR @ 100mL/hr. PCA (hydromorphone) discontinued 0400.",
  lines: "Foley (UOP 35mL/hr, amber), surgical drain (serosanguinous 45mL/shift)",
  vitals: "T 37.0 / HR 92 / BP 96/58 / RR 18 / SpO2 97% RA",
  pain: "6/10 L knee (aching, constant), worse with movement. Last dilaudid 0230.",
  neuro: "A&Ox3, anxious about pain. Moving toes bilat. No numbness/tingling.",
  cardio: "Tachy 92, BP low 96/58, no edema LLE, pulses palpable, cap refill 2s",
  resp: "CTA bilat, SpO2 97% RA, IS doing 1250mL, denies SOB",
  giGu: "Clear liquids tolerated, nausea PRN given x1. UOP 35mL/hr amber. No BM since surgery.",
  skin: "Incision clean/dry/intact, Steri-Strips in place. No redness. Braden: 19.",
  orders: "CBC 0600 (watch Hgb post-op), BMP, PT/INR. DVT ppx: SCDs + Enoxaparin 40mg SQ.",
  medChanges: "Dilaudid 0.5mg IV q3h PRN (hold if RR <12 or sedation). Transition to PO Norco when tolerating diet. Hold HTN meds if SBP <100.",
  concerns: "BP trending low (110/70 \u2192 96/58 overnight). Watch for bleeding \u2192 check Hgb 0600. Pain control challenging. Nausea may limit PO transition.",
  asks: "Call MD if SBP <90 or MAP <65. Ambulate with PT at 0900. Encourage IS q1h. Encourage PO intake.",
  family: "Husband called at 0100, updated on surgery. Wants to visit at 0800. Patient anxious about pain management plan.",
};

const vitalsTrend = [
  { time: "1900", hr: "88", bp: "110/70", rr: "16", spo2: "98%", temp: "37.2" },
  { time: "2300", hr: "90", bp: "104/64", rr: "17", spo2: "97%", temp: "37.1" },
  { time: "0300", hr: "92", bp: "96/58", rr: "18", spo2: "97%", temp: "37.0" },
  { time: "0700", hr: "", bp: "", rr: "", spo2: "", temp: "" },
];

export default function HandoffSheet() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Patient Safety</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>
            {"\u{1F4CB}"} SBAR Patient Handoff / Report Sheet
          </Text>
          <Text style={sharedStyles.pageSubtitle}>
            Use SBAR for clear, concise handoffs to reduce errors and improve safety. One sheet per patient per shift.
          </Text>
        </View>

        {/* Patient ID Row 1: Name, Room, Age/Gender */}
        <View style={{ flexDirection: "row", backgroundColor: colors.ice, paddingTop: 4, paddingBottom: 4, paddingLeft: 6, paddingRight: 6, borderRadius: 3, marginBottom: 4, gap: 5, borderWidth: 0.5, borderColor: colors.tealPale }}>
          {[
            { label: "Patient / MRN", value: s.name + " / " + s.mrn },
            { label: "Room / Bed", value: s.room },
            { label: "Age / Gender", value: s.ageSex },
          ].map((f) => (
            <View key={f.label} style={{ flex: 1 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 1 }}>{f.label}</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{f.value}</Text></View>
            </View>
          ))}
        </View>

        {/* Patient ID Row 2: Code Status, Allergies, IV Access, Fall Risk */}
        <View style={{ flexDirection: "row", gap: 5, marginBottom: 4 }}>
          {[
            { label: "Code Status", value: s.codeStatus },
            { label: "Allergies", value: s.allergies },
            { label: "IV Access / Site", value: s.iv.split(".")[0] },
            { label: "Fall Risk", value: s.fallRisk },
          ].map((f) => (
            <View key={f.label} style={{ flex: 1 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 1 }}>{f.label}</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{f.value}</Text></View>
            </View>
          ))}
        </View>

        {/* Patient ID Row 3: Isolation, Attending, Admit Date */}
        <View style={{ flexDirection: "row", gap: 5, marginBottom: 5 }}>
          {[
            { label: "Isolation", value: s.isolation },
            { label: "Attending", value: s.attending },
            { label: "Admit Date / Source", value: s.admitDate + " / " + s.admitSource },
          ].map((f) => (
            <View key={f.label} style={{ flex: 1 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 1 }}>{f.label}</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{f.value}</Text></View>
            </View>
          ))}
        </View>

        {/* S - Situation */}
        <View style={{ marginBottom: 4 }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
            <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: colors.ocean, justifyContent: "center", alignItems: "center", marginRight: 5 }}>
              <Text style={{ fontSize: 10, fontFamily: "Helvetica-Bold", color: colors.white }}>S</Text>
            </View>
            <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: colors.deepNavy }}>Situation</Text>
            <Text style={{ fontSize: 4, color: colors.textLight, marginLeft: 3 }}>\u2014 What is happening right now?</Text>
          </View>
          <View style={{ marginLeft: 23 }}>
            <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>Primary Dx / Reason for Call</Text>
            <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.dx}</Text></View>
            <View style={{ height: 14, backgroundColor: colors.offWhite, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray, paddingLeft: 3, justifyContent: "center", borderRadius: 1, marginTop: 2 }}>
              <Text style={{ fontSize: 4, color: "transparent" }}>.</Text>
            </View>
          </View>
        </View>

        {/* B - Background */}
        <View style={{ marginBottom: 4 }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
            <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: colors.teal, justifyContent: "center", alignItems: "center", marginRight: 5 }}>
              <Text style={{ fontSize: 10, fontFamily: "Helvetica-Bold", color: colors.white }}>B</Text>
            </View>
            <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: colors.deepNavy }}>Background</Text>
            <Text style={{ fontSize: 4, color: colors.textLight, marginLeft: 3 }}>\u2014 Relevant history and context</Text>
          </View>
          <View style={{ marginLeft: 23, flexDirection: "row", gap: 5 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>PMHx / Surgical Hx</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.pmhx}</Text></View>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.surgicalHx}</Text></View>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginTop: 1, marginBottom: 1 }}>Pending Labs / Tests</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.orders.split(".")[0]}</Text></View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>IV Access / Lines / Drains</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.iv}</Text></View>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.lines}</Text></View>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginTop: 1, marginBottom: 1 }}>DVT Prophylaxis / Code Status</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.orders.split(".").slice(1).join(".").trim()}</Text></View>
            </View>
          </View>
        </View>

        {/* A - Assessment */}
        <View style={{ marginBottom: 4 }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
            <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: colors.warmOrange, justifyContent: "center", alignItems: "center", marginRight: 5 }}>
              <Text style={{ fontSize: 10, fontFamily: "Helvetica-Bold", color: colors.white }}>A</Text>
            </View>
            <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: colors.deepNavy }}>Assessment</Text>
            <Text style={{ fontSize: 4, color: colors.textLight, marginLeft: 3 }}>\u2014 What do I think is going on?</Text>
          </View>
          <View style={{ marginLeft: 23 }}>
            <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>Vital Signs Summary: T / HR / BP / RR / SpO2</Text>
            <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.vitals}</Text></View>
            <View style={{ flexDirection: "row", gap: 5, marginTop: 2 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>Pain (0-10 / location / quality)</Text>
                <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.pain}</Text></View>
                <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginTop: 1, marginBottom: 1 }}>Neuro / Mental Status</Text>
                <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.neuro}</Text></View>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>Cardio / Resp</Text>
                <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.cardio + ". " + s.resp}</Text></View>
                <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginTop: 1, marginBottom: 1 }}>GI-GU / Skin / Wounds</Text>
                <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.giGu + ". " + s.skin}</Text></View>
              </View>
            </View>
          </View>
        </View>

        {/* R - Recommendation */}
        <View style={{ marginBottom: 4 }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
            <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: colors.softGreen, justifyContent: "center", alignItems: "center", marginRight: 5 }}>
              <Text style={{ fontSize: 10, fontFamily: "Helvetica-Bold", color: colors.white }}>R</Text>
            </View>
            <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: colors.deepNavy }}>Recommendation</Text>
            <Text style={{ fontSize: 4, color: colors.textLight, marginLeft: 3 }}>\u2014 What do I need / suggest?</Text>
          </View>
          <View style={{ marginLeft: 23, flexDirection: "row", gap: 5 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>Med Changes / IV Fluids Expected</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.medChanges}</Text></View>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginTop: 1, marginBottom: 1 }}>Specific Asks of Next RN / MD</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.asks}</Text></View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>Concerns to Watch / Anticipated Needs</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.concerns}</Text></View>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginTop: 1, marginBottom: 1 }}>Patient/Family Updates Given</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.family}</Text></View>
            </View>
          </View>
        </View>

        {/* Vitals Trend Strip */}
        <View style={{ marginBottom: 3 }}>
          <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 1 }}>Vitals Trend This Shift</Text>
          <View style={{ flexDirection: "row", backgroundColor: colors.deepNavy, paddingTop: 2, paddingBottom: 2, paddingLeft: 4, paddingRight: 4, borderTopLeftRadius: 2, borderTopRightRadius: 2 }}>
            {["Time", "HR", "BP", "RR", "SpO2", "Temp"].map((h) => (
              <View key={h} style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 4, fontFamily: "Helvetica-Bold", color: colors.tealLight, textTransform: "uppercase" }}>{h}</Text>
              </View>
            ))}
          </View>
          {vitalsTrend.map((v, i) => (
            <View key={v.time} style={{ flexDirection: "row", paddingTop: 1.5, paddingBottom: 1.5, paddingLeft: 4, paddingRight: 4, backgroundColor: i % 2 === 0 ? colors.sampleBlue : colors.white, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray }}>
              <View style={{ flex: 1, alignItems: "center" }}><Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textDark }}>{v.time}</Text></View>
              {[v.hr, v.bp, v.rr, v.spo2, v.temp].map((val, vi) => (
                <View key={vi} style={{ flex: 1, alignItems: "center" }}>
                  <Text style={{ fontSize: 5, color: val ? colors.sampleText : "transparent", fontFamily: val ? "Helvetica-Oblique" : "Helvetica" }}>{val || "."}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Concerns for Next Shift + Shift-End Checklist */}
        <View style={{ flexDirection: "row", gap: 5 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 1 }}>Concerns for Next Shift</Text>
            <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>BP trending low (96/58). Hgb 0600 critical. Pain management plan unclear. Husband visiting 0800.</Text></View>
            <View style={{ height: 18, backgroundColor: colors.offWhite, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray, paddingLeft: 3, justifyContent: "center", borderRadius: 1, marginTop: 1 }}>
              <Text style={{ fontSize: 4, color: "transparent" }}>.</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 1 }}>Shift-End Checklist</Text>
            {["I&O charted (total: _____)", "Pain reassessed & documented", "DVT prophylaxis given", "Code status confirmed", "Patient/family updated", "Orders reviewed"].map((item) => (
              <View key={item} style={{ flexDirection: "row", alignItems: "center", marginBottom: 1 }}>
                <View style={{ ...sharedStyles.checkbox, width: 6, height: 6 }} />
                <Text style={{ fontSize: 4, color: colors.textDark, flex: 1 }}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Sample indicator */}
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 2 }}>
          <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: colors.sampleBlue, marginRight: 2 }} />
          <Text style={{ fontSize: 4, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>
            Blue = sample patient (Angela Torres, 45F, post-op L TKA, pain 6/10, BP 96/58 trending low)
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>{"\u263E"} 2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 3 of 8</Text>
      </View>
    </Page>
  );
}
