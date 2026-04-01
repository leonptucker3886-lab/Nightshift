import { Page, View, Text } from "@react-pdf/renderer";
import { colors, pageHeight } from "./styles";

export default function CoverPage() {
  return (
    <Page size="LETTER" style={{ padding: 0, backgroundColor: colors.midnight }}>
      <View style={{ position: "absolute", top: 0, left: 0, right: 0, height: pageHeight * 0.6, backgroundColor: colors.deepNavy }} />
      <View style={{ position: "absolute", top: 0, left: 0, width: 5, height: pageHeight, backgroundColor: colors.teal }} />
      <View style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, backgroundColor: colors.tealLight }} />
      <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, padding: 50, paddingTop: 80, justifyContent: "space-between" }}>
        <View>
          <View style={{ backgroundColor: colors.teal, alignSelf: "flex-start", paddingTop: 4, paddingBottom: 4, paddingLeft: 14, paddingRight: 14, borderRadius: 10, marginBottom: 30 }}>
            <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.white, letterSpacing: 2, textTransform: "uppercase" }}>Printable PDF Bundle</Text>
          </View>
          <View style={{ width: 70, height: 70, borderRadius: 35, borderWidth: 1, borderColor: "rgba(43,168,154,0.2)", marginBottom: 18, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 26, color: colors.tealLight }}>{"\u263E"}</Text>
          </View>
          <Text style={{ fontSize: 32, fontFamily: "Helvetica-Bold", color: colors.white, lineHeight: 1.15, marginBottom: 4 }}>2026 Night Shift</Text>
          <Text style={{ fontSize: 32, fontFamily: "Helvetica-Bold", color: colors.tealLight, lineHeight: 1.15, marginBottom: 14 }}>Nurse Survival Bundle</Text>
          <View style={{ width: 40, height: 2, backgroundColor: colors.teal, marginBottom: 14, borderRadius: 1 }} />
          <Text style={{ fontSize: 11, color: colors.oceanLight, lineHeight: 1.5, marginBottom: 2 }}>Shift Scheduler {"\u00B7"} SBAR Handoff {"\u00B7"} Med Timeline</Text>
          <Text style={{ fontSize: 11, color: colors.oceanLight, lineHeight: 1.5 }}>Fatigue Tracker {"\u00B7"} Sleep Recovery {"\u00B7"} Self-Care</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 14 }}>
          <Text style={{ fontSize: 8, color: "rgba(255,255,255,0.4)" }}>8 Printable Pages</Text>
          <Text style={{ fontSize: 8, color: "rgba(255,255,255,0.2)" }}>|</Text>
          <Text style={{ fontSize: 8, color: "rgba(255,255,255,0.4)" }}>12-Hour Night Shift RNs</Text>
          <Text style={{ fontSize: 8, color: "rgba(255,255,255,0.2)" }}>|</Text>
          <Text style={{ fontSize: 8, color: "rgba(255,255,255,0.4)" }}>Print Unlimited</Text>
        </View>
      </View>
      <View style={{ position: "absolute", bottom: 40, right: 35, width: 110, height: 110, borderRadius: 55, borderWidth: 0.75, borderColor: "rgba(43,168,154,0.1)" }} />
      <View style={{ position: "absolute", bottom: 60, right: 55, width: 70, height: 70, borderRadius: 35, borderWidth: 0.5, borderColor: "rgba(43,168,154,0.06)" }} />
    </Page>
  );
}
