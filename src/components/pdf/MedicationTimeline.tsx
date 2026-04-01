import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

// 30-min time slots with task prompts and sample documentation
// Sample: Angela Torres, 45F, Rm 415-B, post-op L TKA, pain + low BP
const slots = [
  { time: "1900", label: "Shift Start", prompt: "Receive report / SBAR", sample: "", note: "", g: false, c: false, key: true },
  { time: "1930", label: "", prompt: "Rounding \u2014 introduce self, assess pain", sample: "All 5 patients rounded. Rm 415-A reports pain 6/10.", note: "Torres requesting pain med", g: true, c: true },
  { time: "2000", label: "Evening Meds", prompt: "Scheduled meds + PRN pain meds", sample: "Dilaudid 0.5mg IV \u2014 Rm 415-B (Torres)", note: "BP 96/58 \u2014 hold HTN meds", g: true, c: true, med: true },
  { time: "2030", label: "", prompt: "Pain reassessment (30 min post-med)", sample: "Rm 415-B: 6/10 \u2192 4/10 after Dilaudid", note: "Pt less anxious, resting", g: true, c: true },
  { time: "2100", label: "", prompt: "I&O count / Foley check", sample: "Rm 415-B Foley: 150mL since 1900 (amber)", note: "UOP adequate for now", g: true, c: true },
  { time: "2130", label: "", prompt: "Turning / repositioning q2h", sample: "", note: "", g: false, c: false },
  { time: "2200", label: "", prompt: "Vital signs (all patients)", sample: "Rm 415-B: T37.0 HR90 BP100/62 RR17 SpO2 97%", note: "BP improved slightly from 96/58", g: true, c: true },
  { time: "2230", label: "", prompt: "Rounding \u2014 safety check, call lights", sample: "Rounding done. Rm 418 call light replaced.", note: "", g: true, c: false },
  { time: "2300", label: "Midnight Meds", prompt: "Scheduled meds (hold caffeine)", sample: "Enoxaparin 40mg SQ \u2014 Rm 415-B. Metoprolol Rm 420.", note: "", g: true, c: true, med: true },
  { time: "2330", label: "", prompt: "Pain reassessment / comfort check", sample: "", note: "", g: false, c: false },
  { time: "0000", label: "Midnight", prompt: "Rounding \u2014 fall risk check", sample: "Rounding done. Rm 415-B sleeping. Bed alarm on.", note: "Torres resting, no distress", g: true, c: true, key: true },
  { time: "0030", label: "", prompt: "I&O count / intake check", sample: "", note: "", g: false, c: false },
  { time: "0100", label: "", prompt: "Turning / repositioning q2h", sample: "Rm 415-B turned to R side", note: "Pt briefly awake, repositioned", g: true, c: true },
  { time: "0130", label: "", prompt: "Cluster care \u2014 check all patients", sample: "", note: "", g: false, c: false },
  { time: "0200", label: "", prompt: "Rounding \u2014 safety, call lights", sample: "", note: "", g: false, c: false },
  { time: "0230", label: "", prompt: "Pain reassessment q2h", sample: "Rm 415-B: 5/10 \u2014 requesting PRN", note: "Pt awake, mild nausea noted", g: true, c: true },
  { time: "0300", label: "", prompt: "Vital signs (or per order)", sample: "Rm 415-B: T37.1 HR88 BP98/60 RR18 SpO2 96%", note: "BP still low. Watching. MD aware.", g: true, c: true },
  { time: "0330", label: "", prompt: "I&O count", sample: "", note: "", g: false, c: false },
  { time: "0400", label: "AM Meds / Labs", prompt: "Scheduled meds + AM lab draws", sample: "CBC/CMP drawn Rm 415-B. Ondansetron 4mg IV PRN.", note: "Hgb result pending \u2014 watch post-op", g: true, c: true, med: true },
  { time: "0430", label: "", prompt: "Pain reassessment / comfort", sample: "", note: "", g: false, c: false },
  { time: "0500", label: "AM Vitals", prompt: "AM vital signs (all patients)", sample: "Rm 415-B: T36.9 HR86 BP102/64 RR16 SpO2 97%", note: "BP trending up slightly. Good sign.", g: true, c: true },
  { time: "0530", label: "", prompt: "Turning / repositioning q2h", sample: "", note: "", g: false, c: false },
  { time: "0600", label: "AM Assess", prompt: "Full assessment + I&O totals", sample: "Rm 415-B: UOP 720mL total. Drain 45mL. Wt 86kg.", note: "I&O documented. Hgb 9.8 (stable).", g: true, c: true },
  { time: "0630", label: "", prompt: "Chart review / orders check", sample: "", note: "", g: false, c: false },
  { time: "0700", label: "Shift End", prompt: "Give report / SBAR to day RN", sample: "Report given to day RN (Martinez). SBAR complete.", note: "BP low but stable. Hgb pending.", g: true, c: true, key: true },
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
            1900\u20130700 in 30-min slots. Track meds, reassessments, rounding, I&O, and charting.
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
          {[
            { label: "Patient", value: "Angela Torres" },
            { label: "Room", value: "415-B" },
            { label: "Dx", value: "Post-op L TKA" },
            { label: "RN", value: "" },
          ].map((f) => (
            <View key={f.label} style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.warmOrange, marginRight: 2 }}>
                {f.label}:
              </Text>
              {f.value ? (
                <Text style={{ fontSize: 5, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>{f.value}</Text>
              ) : (
                <View style={{ flex: 1, borderBottomWidth: 0.5, borderBottomColor: "#E0C9A0" }}>
                  <Text style={{ fontSize: 4, color: "transparent" }}>.</Text>
                </View>
              )}
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
            Cluster care during lower-fatigue windows. Combine tasks at 1930, 2200, 0000, and 0500 to minimize trips during the 0200\u20130400 dip.
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
          <Text style={{ width: 38, fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase", letterSpacing: 0.3 }}>
            Time
          </Text>
          <Text style={{ flex: 3, fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase", letterSpacing: 0.3, paddingLeft: 2 }}>
            Medication / Dose / Patient
          </Text>
          <View style={{ width: 26, alignItems: "center" }}>
            <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.tealLight, textTransform: "uppercase" }}>Given</Text>
          </View>
          <View style={{ width: 26, alignItems: "center" }}>
            <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.tealLight, textTransform: "uppercase" }}>Chart</Text>
          </View>
          <Text style={{ flex: 2, fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase", letterSpacing: 0.3, marginLeft: 3 }}>
            Notes
          </Text>
        </View>

        {/* Time rows */}
        {slots.map((s, i) => {
          const rowStyle = s.key
            ? { backgroundColor: colors.ice, borderLeftWidth: 2, borderLeftColor: colors.ocean }
            : s.med
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
                ...rowStyle,
              }}
            >
              {/* Time */}
              <View style={{ width: 38 }}>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: "Helvetica-Bold",
                    color: s.key ? colors.ocean : s.med ? colors.warmOrange : colors.textDark,
                  }}
                >
                  {s.time}
                </Text>
                {s.label && (
                  <Text style={{ fontSize: 4, color: colors.textLight, fontFamily: s.key || s.med ? "Helvetica-Bold" : "Helvetica" }}>
                    {s.label}
                  </Text>
                )}
              </View>

              {/* Medication / Dose / Patient column */}
              <View style={{ flex: 3, paddingLeft: 2 }}>
                {s.sample ? (
                  <View style={sharedStyles.sampleBox}>
                    <Text style={sharedStyles.sampleText}>{s.sample}</Text>
                  </View>
                ) : (
                  <Text style={{ fontSize: 5, color: colors.textLight, fontFamily: "Helvetica-Oblique" }}>
                    {s.prompt}
                  </Text>
                )}
              </View>

              {/* Given checkbox */}
              <View style={{ width: 26, alignItems: "center" }}>
                <View
                  style={{
                    width: 9, height: 9, borderWidth: 0.75,
                    borderColor: s.g ? colors.teal : colors.tealMuted,
                    borderRadius: 1.5,
                    backgroundColor: s.g ? colors.tealPale : undefined,
                    justifyContent: "center", alignItems: "center",
                  }}
                >
                  {s.g && <Text style={{ fontSize: 6, color: colors.teal, fontFamily: "Helvetica-Bold" }}>{"\u2713"}</Text>}
                </View>
              </View>

              {/* Charted checkbox */}
              <View style={{ width: 26, alignItems: "center" }}>
                <View
                  style={{
                    width: 9, height: 9, borderWidth: 0.75,
                    borderColor: s.c ? colors.teal : colors.tealMuted,
                    borderRadius: 1.5,
                    backgroundColor: s.c ? colors.tealPale : undefined,
                    justifyContent: "center", alignItems: "center",
                  }}
                >
                  {s.c && <Text style={{ fontSize: 6, color: colors.teal, fontFamily: "Helvetica-Bold" }}>{"\u2713"}</Text>}
                </View>
              </View>

              {/* Notes column */}
              <View style={{ flex: 2, marginLeft: 3 }}>
                {s.note ? (
                  <Text style={{ fontSize: 4, color: colors.sampleText, fontFamily: "Helvetica-Oblique", lineHeight: 1.2 }}>
                    {s.note}
                  </Text>
                ) : (
                  <View style={{ height: 11, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray }} />
                )}
              </View>
            </View>
          );
        })}

        {/* Sample indicator */}
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 2 }}>
          <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: colors.sampleBlue, marginRight: 2 }} />
          <Text style={{ fontSize: 4, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>
            Blue = sample entries (Angela Torres, Rm 415-B, post-op L TKA, pain 6/10, BP 96/58 trending low)
          </Text>
        </View>

        {/* Bottom: Key Med Windows + Recurring Tasks */}
        <View style={{ marginTop: 4, flexDirection: "row", gap: 6 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>
              Key Medication Windows
            </Text>
            {[
              { t: "1930\u20132130", d: "Evening scheduled meds + PRN" },
              { t: "2230\u20130100", d: "Midnight med pass" },
              { t: "0330\u20130530", d: "AM med pass + lab draws" },
            ].map((r) => (
              <View key={r.t} style={{ flexDirection: "row", marginBottom: 1 }}>
                <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.warmOrange, width: 60 }}>{r.t}</Text>
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
              "I&O count q4h (Foley, drains, PO intake)",
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
