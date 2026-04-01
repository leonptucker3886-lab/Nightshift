import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

// Complete sample patient: med-surg night shift scenario
const sample = {
  name: "James Rodriguez",
  mrn: "MRN 5039281",
  room: "308-A",
  ageSex: "58 / M",
  codeStatus: "Full Code",
  allergies: "Penicillin (rash), Sulfa (hives)",
  admitDate: "03/30/2026",
  admitSource: "ED",
  attending: "Dr. Nakamura",
  dx: "Post-op Day 2 \u2014 R hip ORIF after fall",
  iv: "18g R forearm \u2014 NS @ 75mL/hr, PCA pump (morphine)",
  lines: "Foley (UOP 45mL/hr), surgical drain (serosanguinous 30mL)",
  isolation: "None",
  pmhx: "HTN, Obesity (BMI 34), OSA (uses CPAP at home), GERD",
  surgicalHx: "R hip ORIF 03/28, Cholecystectomy 2018",
  vitals: "T 37.4 / HR 78 / BP 136/82 / RR 16 / SpO2 96% RA",
  pain: "5/10 R hip (sharp, movement-related), PCA button x2 last 4hrs",
  neuro: "A&Ox3, moving all extremities, no neuro deficits",
  cardio: "RRR, no edema, cap refill <2s",
  resp: "CTA bilat, no SOB, using IS q1h (doing 1500mL)",
  giGu: "Regular diet tolerated, last BM yesterday, UOP 45mL/hr clear yellow",
  skin: "Incision clean/dry/intact, no redness. Braden: 18",
  orders: "CBC/CMP 0600, PT/INR pending, DVT prophylaxis (SCDs + Lovenox)",
  medChanges: "PCA wean to PRN if pain <4, start PO Norco 10/325 q4h PRN",
  concerns: "Watch for post-op bleeding (drain output), DVT risk (obese + immobile), OSA \u2014 keep HOB 30deg, CPAP at bedside",
  asks: "Ambulate with PT at 0800. Call MD if drain >50mL/hr or Hgb drops. Ensure CPAP on for sleep.",
  familyUpdate: "Wife called at 2300, updated on surgery success. Patient wants to Facetime grandkids tomorrow.",
};

const vitalsTrend = [
  { time: "1900", hr: "84", bp: "140/88", rr: "18", spo2: "95%", temp: "37.6" },
  { time: "2300", hr: "78", bp: "136/82", rr: "16", spo2: "96%", temp: "37.4" },
  { time: "0300", hr: "", bp: "", rr: "", spo2: "", temp: "" },
  { time: "0700", hr: "", bp: "", rr: "", spo2: "", temp: "" },
];

export default function HandoffSheet() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Patient Safety</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>SBAR Patient Handoff / Report Sheet</Text>
          <Text style={sharedStyles.pageSubtitle}>
            Use this for safe, complete handoffs to reduce errors. One sheet per patient per shift.
          </Text>
        </View>

        {/* Patient ID Bar */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: colors.ice,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 8,
            paddingRight: 8,
            borderRadius: 3,
            marginBottom: 6,
            gap: 6,
            borderWidth: 0.5,
            borderColor: colors.tealPale,
          }}
        >
          {[
            { label: "Patient / MRN", value: sample.name + " / " + sample.mrn },
            { label: "Room", value: sample.room },
            { label: "Age/Sex", value: sample.ageSex },
          ].map((f) => (
            <View key={f.label} style={{ flex: 1 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 1 }}>
                {f.label}
              </Text>
              <View style={sharedStyles.sampleBox}>
                <Text style={sharedStyles.sampleText}>{f.value}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Secondary ID Row */}
        <View
          style={{
            flexDirection: "row",
            gap: 6,
            marginBottom: 6,
          }}
        >
          {[
            { label: "Code Status", value: sample.codeStatus },
            { label: "Allergies", value: sample.allergies },
            { label: "Admit Date / Source", value: sample.admitDate + " / " + sample.admitSource },
          ].map((f) => (
            <View key={f.label} style={{ flex: 1 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 1 }}>
                {f.label}
              </Text>
              <View style={sharedStyles.sampleBox}>
                <Text style={sharedStyles.sampleText}>{f.value}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* SBAR Sections */}
        {/* S - Situation */}
        <View style={{ marginBottom: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
            <View
              style={{
                width: 20, height: 20, borderRadius: 10,
                backgroundColor: colors.ocean,
                justifyContent: "center", alignItems: "center", marginRight: 5,
              }}
            >
              <Text style={{ fontSize: 11, fontFamily: "Helvetica-Bold", color: colors.white }}>S</Text>
            </View>
            <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", color: colors.deepNavy }}>
              Situation
            </Text>
            <Text style={{ fontSize: 5, color: colors.textLight, marginLeft: 4 }}>
              \u2014 What is going on right now?
            </Text>
          </View>
          <View style={{ marginLeft: 25 }}>
            <View style={{ marginBottom: 2 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>
                Primary Dx / Reason for Admission
              </Text>
              <View style={sharedStyles.sampleBox}>
                <Text style={sharedStyles.sampleText}>{sample.dx}</Text>
              </View>
            </View>
            <View style={{ marginBottom: 2 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>
                Attending / Primary Provider
              </Text>
              <View style={sharedStyles.sampleBox}>
                <Text style={sharedStyles.sampleText}>{sample.attending}</Text>
              </View>
            </View>
            <View style={{ marginBottom: 1 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>
                Current Concern / Reason for Call
              </Text>
              <View style={{ height: 16, backgroundColor: colors.offWhite, borderBottomWidth: 0.75, borderBottomColor: colors.lightGray, paddingLeft: 3, justifyContent: "center", borderRadius: 1 }}>
                <Text style={{ fontSize: 4, color: "transparent" }}>.</Text>
              </View>
            </View>
          </View>
        </View>

        {/* B - Background */}
        <View style={{ marginBottom: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
            <View
              style={{
                width: 20, height: 20, borderRadius: 10,
                backgroundColor: colors.teal,
                justifyContent: "center", alignItems: "center", marginRight: 5,
              }}
            >
              <Text style={{ fontSize: 11, fontFamily: "Helvetica-Bold", color: colors.white }}>B</Text>
            </View>
            <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", color: colors.deepNavy }}>
              Background
            </Text>
            <Text style={{ fontSize: 5, color: colors.textLight, marginLeft: 4 }}>
              \u2014 Relevant clinical context
            </Text>
          </View>
          <View style={{ marginLeft: 25, flexDirection: "row", gap: 6 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>PMHx</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{sample.pmhx}</Text></View>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginTop: 2, marginBottom: 1 }}>IV Access / Lines / Drains</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{sample.iv}</Text></View>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{sample.lines}</Text></View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>Surgical Hx / Implants</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{sample.surgicalHx}</Text></View>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginTop: 2, marginBottom: 1 }}>Isolation Precautions</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{sample.isolation}</Text></View>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginTop: 2, marginBottom: 1 }}>Code Status / Allergies (repeated)</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{sample.codeStatus} / {sample.allergies}</Text></View>
            </View>
          </View>
        </View>

        {/* A - Assessment */}
        <View style={{ marginBottom: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
            <View
              style={{
                width: 20, height: 20, borderRadius: 10,
                backgroundColor: colors.warmOrange,
                justifyContent: "center", alignItems: "center", marginRight: 5,
              }}
            >
              <Text style={{ fontSize: 11, fontFamily: "Helvetica-Bold", color: colors.white }}>A</Text>
            </View>
            <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", color: colors.deepNavy }}>
              Assessment
            </Text>
            <Text style={{ fontSize: 5, color: colors.textLight, marginLeft: 4 }}>
              \u2014 What do I think is going on?
            </Text>
          </View>
          <View style={{ marginLeft: 25 }}>
            {/* Vitals strip */}
            <View style={{ marginBottom: 3 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>Current Vitals: T / HR / BP / RR / SpO2</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{sample.vitals}</Text></View>
            </View>
            <View style={{ flexDirection: "row", gap: 6 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>Pain (0-10 / location / quality)</Text>
                <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{sample.pain}</Text></View>
                <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginTop: 2, marginBottom: 1 }}>Neuro / Mental Status</Text>
                <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{sample.neuro}</Text></View>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>Cardio / Resp</Text>
                <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{sample.cardio + ". " + sample.resp}</Text></View>
                <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginTop: 2, marginBottom: 1 }}>GI-GU / Skin / Fall Risk</Text>
                <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{sample.giGu + ". " + sample.skin}</Text></View>
              </View>
            </View>
          </View>
        </View>

        {/* R - Recommendation */}
        <View style={{ marginBottom: 4 }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
            <View
              style={{
                width: 20, height: 20, borderRadius: 10,
                backgroundColor: colors.softGreen,
                justifyContent: "center", alignItems: "center", marginRight: 5,
              }}
            >
              <Text style={{ fontSize: 11, fontFamily: "Helvetica-Bold", color: colors.white }}>R</Text>
            </View>
            <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", color: colors.deepNavy }}>
              Recommendation
            </Text>
            <Text style={{ fontSize: 5, color: colors.textLight, marginLeft: 4 }}>
              \u2014 What do I need / suggest?
            </Text>
          </View>
          <View style={{ marginLeft: 25, flexDirection: "row", gap: 6 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>Pending Orders / Labs / Tests</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{sample.orders}</Text></View>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginTop: 2, marginBottom: 1 }}>Med Changes / IV Fluids Expected</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{sample.medChanges}</Text></View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginBottom: 1 }}>Concerns to Watch / Anticipated Needs</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{sample.concerns}</Text></View>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid, marginTop: 2, marginBottom: 1 }}>Specific Asks of Next RN / Provider</Text>
              <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{sample.asks}</Text></View>
            </View>
          </View>
        </View>

        {/* Vitals Trend Strip */}
        <View style={{ marginBottom: 4 }}>
          <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>
            Vitals Trend This Shift
          </Text>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: colors.deepNavy,
              paddingTop: 3,
              paddingBottom: 3,
              paddingLeft: 4,
              paddingRight: 4,
              borderTopLeftRadius: 3,
              borderTopRightRadius: 3,
            }}
          >
            {["Time", "HR", "BP", "RR", "SpO2", "Temp"].map((h) => (
              <View key={h} style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.tealLight, textTransform: "uppercase" }}>{h}</Text>
              </View>
            ))}
          </View>
          {vitalsTrend.map((v, i) => (
            <View
              key={v.time}
              style={{
                flexDirection: "row",
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 4,
                paddingRight: 4,
                backgroundColor: i % 2 === 0 ? colors.offWhite : colors.white,
                borderBottomWidth: 0.5,
                borderBottomColor: colors.lightGray,
              }}
            >
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.textDark }}>{v.time}</Text>
              </View>
              {[v.hr, v.bp, v.rr, v.spo2, v.temp].map((val, vi) => (
                <View key={vi} style={{ flex: 1, alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 6,
                      color: val ? colors.sampleText : "transparent",
                      fontFamily: val ? "Helvetica-Oblique" : "Helvetica",
                    }}
                  >
                    {val || "."}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Concerns for Next Shift + Don't Forget */}
        <View style={{ flexDirection: "row", gap: 6, marginBottom: 4 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>
              Concerns for Next Shift
            </Text>
            <View style={sharedStyles.sampleBox}>
              <Text style={sharedStyles.sampleText}>{sample.familyUpdate}</Text>
            </View>
            <View style={{ height: 14, backgroundColor: colors.offWhite, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray, paddingLeft: 3, justifyContent: "center", borderRadius: 1, marginTop: 2 }}>
              <Text style={{ fontSize: 4, color: "transparent" }}>.</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>
              {"\u2757"} Shift-End Checklist
            </Text>
            {[
              "I&O charted (total: _____)",
              "Pain reassessed & documented",
              "Daily weight completed",
              "DVT prophylaxis given",
              "Code status confirmed",
              "Patient/family updated",
            ].map((item) => (
              <View key={item} style={{ flexDirection: "row", alignItems: "center", marginBottom: 1.5 }}>
                <View style={{ ...sharedStyles.checkbox, width: 7, height: 7 }} />
                <Text style={{ fontSize: 5, color: colors.textDark, flex: 1 }}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Sample indicator */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: colors.sampleBlue, borderWidth: 0.5, borderColor: "#B8D4E8", marginRight: 3 }} />
          <Text style={{ fontSize: 5, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>
            Blue highlighted = sample patient (James Rodriguez, 58M, post-op R hip ORIF, med-surg 308-A)
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
