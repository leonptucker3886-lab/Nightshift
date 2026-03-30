import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const timeSlots = [
  { time: "1900", label: "Shift Start", h: true },
  { time: "2000" }, { time: "2100" }, { time: "2200" },
  { time: "2300", label: "Midnight Meds", m: true },
  { time: "0000", label: "Midnight", h: true },
  { time: "0100" }, { time: "0200" }, { time: "0300" },
  { time: "0400", label: "AM Meds", m: true },
  { time: "0500", label: "Vitals" }, { time: "0600", label: "Lab Draw" },
  { time: "0700", label: "Shift End", h: true },
];

const cols = ["Meds", "Vitals", "I&O", "Chart", "Assess", "Notes"];

export default function MedicationTimeline() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Medication & Tasks</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>Hourly Night Shift Timeline</Text>
          <Text style={sharedStyles.pageSubtitle}>1900–0700 with checkboxes for meds, vitals, charting, and assessments.</Text>
        </View>

        <View style={{ flexDirection: "row", backgroundColor: colors.warmOrangePale, paddingTop: 4, paddingBottom: 4, paddingLeft: 8, paddingRight: 8, borderRadius: 3, marginBottom: 6, gap: 10, borderWidth: 0.5, borderColor: "#F0D9B5" }}>
          {["Patient", "Room", "Date", "RN"].map((l) => (
            <View key={l} style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.warmOrange, marginRight: 2 }}>{l}:</Text>
              <View style={{ flex: 1, borderBottomWidth: 0.5, borderBottomColor: "#E0C9A0" }}><Text style={{ fontSize: 5, color: "transparent" }}>.</Text></View>
            </View>
          ))}
        </View>

        <View style={sharedStyles.tableHeader}>
          <Text style={{ width: 38, fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase" }}>Time</Text>
          {cols.map((c) => (<View key={c} style={{ flex: 1, alignItems: "center" }}><Text style={sharedStyles.tableHeaderText}>{c}</Text></View>))}
          <Text style={{ flex: 2, fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase" }}>Details</Text>
        </View>

        {timeSlots.map((s, i) => {
          const rs = s.h ? { ...sharedStyles.tableRow, backgroundColor: colors.ice, borderLeftWidth: 2, borderLeftColor: colors.ocean, paddingLeft: 4 }
            : s.m ? { ...sharedStyles.tableRow, backgroundColor: colors.warmOrangePale, borderLeftWidth: 2, borderLeftColor: colors.warmOrange, paddingLeft: 4 }
            : i % 2 === 0 ? sharedStyles.tableRow : sharedStyles.tableRowAlt;
          return (
            <View key={s.time} style={rs}>
              <View style={{ width: 38 }}>
                <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: s.h ? colors.ocean : s.m ? colors.warmOrange : colors.textDark }}>{s.time}</Text>
                {s.label && <Text style={{ fontSize: 4, color: colors.textLight }}>{s.label}</Text>}
              </View>
              {cols.map((c) => (
                <View key={c} style={{ flex: 1, alignItems: "center" }}>
                  <View style={{ width: 8, height: 8, borderWidth: 0.75, borderColor: s.m && c === "Meds" ? colors.warmOrange : colors.tealMuted, borderRadius: 1.5 }} />
                </View>
              ))}
              <View style={{ flex: 2, height: 12, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray, marginLeft: 3 }} />
            </View>
          );
        })}

        <View style={{ marginTop: 6 }}>
          <Text style={sharedStyles.sectionTitle}>Key Medication Times</Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            {[{ t: "2000–2200", d: "Evening scheduled meds" }, { t: "2300–0100", d: "Midnight med pass" }, { t: "0400–0600", d: "AM med pass / labs" }].map((r) => (
              <View key={r.t} style={{ flex: 1, backgroundColor: colors.warmOrangePale, borderRadius: 2, paddingTop: 4, paddingBottom: 4, paddingLeft: 6, paddingRight: 6, borderWidth: 0.5, borderColor: "#F0D9B5" }}>
                <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.warmOrange }}>{r.t}</Text>
                <Text style={{ fontSize: 5, color: colors.textMid }}>{r.d}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ marginTop: 6 }}>
          <Text style={sharedStyles.sectionTitle}>Notes</Text>
          {Array.from({ length: 5 }, (_, i) => (<View key={i} style={sharedStyles.line} />))}
        </View>
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 4 of 8</Text>
      </View>
    </Page>
  );
}
