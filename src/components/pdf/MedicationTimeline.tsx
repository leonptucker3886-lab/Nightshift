import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

// 30-min increment time slots with suggested task prompts and sample entries
// Sample patient: James Rodriguez, 58M, Rm 308-A, post-op R hip ORIF
const timeSlots = [
  { time: "1900", label: "Shift Start", prompt: "Get report / SBAR", sample: "", note: "", given: false, charted: false, isKey: true },
  { time: "1930", label: "", prompt: "Rounding \u2014 introduce self to patients", sample: "Rounding done \u2014 all 5 patients stable", note: "Rm 308-A requesting pain med", given: true, charted: true },
  { time: "2000", label: "Evening Meds", prompt: "Scheduled meds + PRN pain meds", sample: "Norco 10/325 PO \u2014 Rm 308-A (Rodriguez)", note: "Pt rates pain 5/10 R hip", given: true, charted: true, isMeds: true },
  { time: "2030", label: "", prompt: "Pain reassessment q2h (post-med)", sample: "Rm 308-A: 5/10 \u2192 3/10 after Norco", note: "Pt resting comfortably", given: true, charted: true },
  { time: "2100", label: "", prompt: "I&O count / Foley check", sample: "Rm 308-A Foley: 200mL since 1900", note: "UOP adequate", given: true, charted: true },
  { time: "2130", label: "", prompt: "Turning / repositioning (q2h)", sample: "", note: "", given: false, charted: false },
  { time: "2200", label: "", prompt: "Vital signs (or per order)", sample: "Rm 308-A: T37.2 HR76 BP134/80 RR16 SpO2 96%", note: "Vitals stable, no concerns", given: true, charted: true },
  { time: "2230", label: "", prompt: "Rounding \u2014 safety check, call lights", sample: "Rounding done \u2014 all call lights within reach", note: "", given: true, charted: false },
  { time: "2300", label: "Midnight Meds", prompt: "Scheduled meds (hold caffeine)", sample: "Lovenox 40mg SQ \u2014 Rm 308-A. Metoprolol 25mg PO \u2014 Rm 310.", note: "", given: true, charted: true, isMeds: true },
  { time: "2330", label: "", prompt: "Pain reassessment / comfort check", sample: "", note: "", given: false, charted: false },
  { time: "0000", label: "Midnight", prompt: "Rounding \u2014 fall risk check", sample: "Rounding done \u2014 Rm 312 call light on floor (fixed)", note: "Rm 308-A sleeping", given: true, charted: true, isKey: true },
  { time: "0030", label: "", prompt: "I&O count / intake check", sample: "", note: "", given: false, charted: false },
  { time: "0100", label: "", prompt: "Turning / repositioning", sample: "Rm 308-A turned to L side", note: "Pt awake briefly, repositioned", given: true, charted: true },
  { time: "0130", label: "", prompt: "Cluster care \u2014 check all patients", sample: "", note: "", given: false, charted: false },
  { time: "0200", label: "", prompt: "Rounding \u2014 safety, call lights", sample: "", note: "", given: false, charted: false },
  { time: "0230", label: "", prompt: "Pain reassessment q2h", sample: "Rm 308-A: 4/10 \u2014 requesting PRN", note: "Pt awake, wants water + med", given: true, charted: true },
  { time: "0300", label: "", prompt: "Vital signs (or per order)", sample: "Rm 308-A: T37.3 HR80 BP138/84 RR17 SpO2 95%", note: "SpO2 dipped to 95%, watched \u2192 back to 96%", given: true, charted: true },
  { time: "0330", label: "", prompt: "I&O count", sample: "", note: "", given: false, charted: false },
  { time: "0400", label: "AM Meds / Labs", prompt: "Scheduled meds + AM lab draws", sample: "CBC/CMP drawn Rm 308-A. Metoprolol Rm 310.", note: "Lab results pending", given: true, charted: true, isMeds: true },
  { time: "0430", label: "", prompt: "Pain reassessment / comfort", sample: "", note: "", given: false, charted: false },
  { time: "0500", label: "Vitals", prompt: "AM vital signs (all patients)", sample: "Rm 308-A: T37.1 HR78 BP136/82 RR16 SpO2 96%", note: "Vitals stable. Pt sleeping.", given: true, charted: true },
  { time: "0530", label: "", prompt: "Turning / repositioning", sample: "", note: "", given: false, charted: false },
  { time: "0600", label: "AM Assess", prompt: "Full assessment + I&O totals", sample: "Rm 308-A: 800mL UOP total. Drain 30mL. Weight 92kg.", note: "I&O documented. Weight stable.", given: true, charted: true },
  { time: "0630", label: "", prompt: "Chart review / orders check", sample: "", note: "", given: false, charted: false },
  { time: "0700", label: "Shift End", prompt: "Give report / SBAR", sample: "Report given to day RN (Johnson). SBAR complete.", note: "No outstanding concerns.", given: true, charted: true, isKey: true },
];

export default function MedicationTimeline() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Medication & Tasks</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>
            Night Shift Medication & Task Timeline
          </Text>
          <Text style={sharedStyles.pageSubtitle}>
            1900–0700 in 30-min slots. Track meds, reassessments, rounding, and I&O.
          </Text>
        </View>

        {/* Patient info bar */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: colors.warmOrangePale,
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 8,
            paddingRight: 8,
            borderRadius: 3,
            marginBottom: 5,
            gap: 8,
            borderWidth: 0.5,
            borderColor: "#F0D9B5",
          }}
        >
          {["Patient", "Room", "Dx", "RN"].map((l) => (
            <View key={l} style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 6,
                  fontFamily: "Helvetica-Bold",
                  color: colors.warmOrange,
                  marginRight: 2,
                }}
              >
                {l}:
              </Text>
              <View style={{ flex: 1, borderBottomWidth: 0.5, borderBottomColor: "#E0C9A0" }}>
                <Text style={{ fontSize: 4, color: "transparent" }}>.</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Tip callout */}
        <View
          style={{
            backgroundColor: colors.ice,
            borderLeftWidth: 2,
            borderLeftColor: colors.teal,
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 6,
            paddingRight: 6,
            borderRadius: 2,
            marginBottom: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 8, marginRight: 4 }}>{"\u26A1"}</Text>
          <Text style={{ fontSize: 6, color: colors.teal, fontFamily: "Helvetica-Bold" }}>
            Cluster care during peak fatigue hours (0200–0400). Combine tasks to minimize trips and maximize rest windows.
          </Text>
        </View>

        {/* Table header */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: colors.deepNavy,
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 5,
            paddingRight: 5,
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
          }}
        >
          <Text style={{ width: 36, fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase", letterSpacing: 0.3 }}>
            Time
          </Text>
          <Text style={{ flex: 3, fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase", letterSpacing: 0.3 }}>
            Medication / Dose / Patient
          </Text>
          <View style={{ width: 28, alignItems: "center" }}>
            <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.tealLight, textTransform: "uppercase" }}>Given</Text>
          </View>
          <View style={{ width: 28, alignItems: "center" }}>
            <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.tealLight, textTransform: "uppercase" }}>Chart</Text>
          </View>
          <Text style={{ flex: 2, fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase", letterSpacing: 0.3, marginLeft: 3 }}>
            Notes
          </Text>
        </View>

        {/* Time rows */}
        {timeSlots.map((s, i) => {
          const rs = s.isKey
            ? { backgroundColor: colors.ice, borderLeftWidth: 2, borderLeftColor: colors.ocean }
            : s.isMeds
              ? { backgroundColor: colors.warmOrangePale, borderLeftWidth: 2, borderLeftColor: colors.warmOrange }
              : i % 2 === 0
                ? { backgroundColor: colors.white }
                : { backgroundColor: colors.offWhite };

          return (
            <View
              key={s.time}
              style={{
                flexDirection: "row",
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 5,
                paddingRight: 5,
                borderBottomWidth: 0.5,
                borderBottomColor: colors.lightGray,
                alignItems: "center",
                ...rs,
              }}
            >
              {/* Time + Label */}
              <View style={{ width: 36 }}>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: "Helvetica-Bold",
                    color: s.isKey ? colors.ocean : s.isMeds ? colors.warmOrange : colors.textDark,
                  }}
                >
                  {s.time}
                </Text>
                {s.label && (
                  <Text style={{ fontSize: 4, color: colors.textLight, fontFamily: s.isKey || s.isMeds ? "Helvetica-Bold" : "Helvetica" }}>
                    {s.label}
                  </Text>
                )}
              </View>

              {/* Med/Patient column — sample data or task prompt */}
              <View style={{ flex: 3 }}>
                {s.sample ? (
                  <View style={sharedStyles.sampleBox}>
                    <Text style={sharedStyles.sampleText}>{s.sample}</Text>
                  </View>
                ) : (
                  <Text style={{ fontSize: 5, color: colors.textLight, fontStyle: "italic" }}>
                    {s.prompt}
                  </Text>
                )}
              </View>

              {/* Given checkbox */}
              <View style={{ width: 28, alignItems: "center" }}>
                <View
                  style={{
                    width: 9,
                    height: 9,
                    borderWidth: 0.75,
                    borderColor: s.given ? colors.teal : colors.tealMuted,
                    borderRadius: 1.5,
                    backgroundColor: s.given ? colors.tealPale : undefined,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {s.given && (
                    <Text style={{ fontSize: 6, color: colors.teal, fontFamily: "Helvetica-Bold" }}>
                      {"\u2713"}
                    </Text>
                  )}
                </View>
              </View>

              {/* Charted checkbox */}
              <View style={{ width: 28, alignItems: "center" }}>
                <View
                  style={{
                    width: 9,
                    height: 9,
                    borderWidth: 0.75,
                    borderColor: s.charted ? colors.teal : colors.tealMuted,
                    borderRadius: 1.5,
                    backgroundColor: s.charted ? colors.tealPale : undefined,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {s.charted && (
                    <Text style={{ fontSize: 6, color: colors.teal, fontFamily: "Helvetica-Bold" }}>
                      {"\u2713"}
                    </Text>
                  )}
                </View>
              </View>

              {/* Notes line */}
              <View style={{ flex: 2, marginLeft: 3 }}>
                {s.note ? (
                  <Text style={{ fontSize: 4, color: colors.sampleText, fontFamily: "Helvetica-Oblique", lineHeight: 1.2 }}>
                    {s.note}
                  </Text>
                ) : (
                  <View style={{ height: 12, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray }} />
                )}
              </View>
            </View>
          );
        })}

        {/* Sample indicator */}
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 2, marginBottom: 0 }}>
          <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: colors.sampleBlue, marginRight: 2 }} />
          <Text style={{ fontSize: 4, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>
            Blue = sample entries (James Rodriguez, Rm 308-A, post-op R hip ORIF). Shows how a tired RN documents during a busy night.
          </Text>
        </View>

        {/* Bottom: Key Med Times + Shift Reminders */}
        <View style={{ marginTop: 5, flexDirection: "row", gap: 6 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>
              Key Medication Windows
            </Text>
            {[
              { t: "1930–2130", d: "Evening scheduled meds" },
              { t: "2230–0100", d: "Midnight med pass" },
              { t: "0330–0530", d: "AM med pass + lab draws" },
            ].map((r) => (
              <View key={r.t} style={{ flexDirection: "row", marginBottom: 1 }}>
                <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.warmOrange, width: 60 }}>
                  {r.t}
                </Text>
                <Text style={{ fontSize: 5, color: colors.textMid }}>{r.d}</Text>
              </View>
            ))}
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>
              Recurring Tasks (check when done)
            </Text>
            {[
              "Rounding q2h (safety, call lights, fall risk)",
              "Pain reassessment q2h post-med",
              "I&O count q4h (Foley, drains, PO)",
              "Turning / repositioning q2h",
              "Daily weight 0600",
            ].map((r) => (
              <View key={r} style={{ flexDirection: "row", alignItems: "center", marginBottom: 1 }}>
                <View style={{ ...sharedStyles.checkbox, width: 6, height: 6, marginRight: 2 }} />
                <Text style={{ fontSize: 4, color: colors.textDark }}>{r}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>{"\u263E"} 2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 4 of 8</Text>
      </View>
    </Page>
  );
}
