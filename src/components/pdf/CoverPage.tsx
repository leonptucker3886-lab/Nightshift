import { Page, View, Text } from "@react-pdf/renderer";
import { colors, pageHeight } from "./styles";

export default function CoverPage() {
  return (
    <Page size="LETTER" style={{ padding: 0, backgroundColor: colors.midnight }}>
      <View style={{ position: "absolute", top: 0, left: 0, right: 0, height: pageHeight * 0.6, backgroundColor: colors.deepNavy }} />
      <View style={{ position: "absolute", top: 0, left: 0, width: 5, height: pageHeight, backgroundColor: colors.teal }} />
      <View style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, backgroundColor: colors.tealLight }} />
      <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, padding: 50, paddingTop: 90, justifyContent: "space-between" }}>
        <View>
          <View style={{ backgroundColor: colors.teal, alignSelf: "flex-start", paddingTop: 4, paddingBottom: 4, paddingLeft: 14, paddingRight: 14, borderRadius: 10, marginBottom: 30 }}>
            <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.white, letterSpacing: 2, textTransform: "uppercase" }}>Printable PDF Bundle</Text>
          </View>
          <View style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 1, borderColor: "rgba(43,168,154,0.2)", marginBottom: 20, justifyContent: "center", alignItems: "center" }}>
            <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: "rgba(43,168,154,0.06)", justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 28, color: colors.tealLight }}>{"\u263E"}</Text>
            </View>
          </View>
          <Text style={{ fontSize: 34, fontFamily: "Helvetica-Bold", color: colors.white, lineHeight: 1.15, marginBottom: 4 }}>2026 Night Shift</Text>
          <Text style={{ fontSize: 34, fontFamily: "Helvetica-Bold", color: colors.tealLight, lineHeight: 1.15, marginBottom: 16 }}>Nurse Survival Bundle</Text>
          <View style={{ width: 45, height: 2, backgroundColor: colors.teal, marginBottom: 16, borderRadius: 1 }} />
          <Text style={{ fontSize: 11, color: colors.oceanLight, lineHeight: 1.5, marginBottom: 3 }}>Shift Scheduler · SBAR Handoff · Med Timeline</Text>
          <Text style={{ fontSize: 11, color: colors.oceanLight, lineHeight: 1.5 }}>Fatigue Tracker · Sleep Recovery · Self-Care</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <Text style={{ fontSize: 8, color: "rgba(255,255,255,0.4)" }}>8 Printable Pages</Text>
          <Text style={{ fontSize: 8, color: "rgba(255,255,255,0.25)" }}>|</Text>
          <Text style={{ fontSize: 8, color: "rgba(255,255,255,0.4)" }}>12-Hour Night Shift RNs</Text>
          <Text style={{ fontSize: 8, color: "rgba(255,255,255,0.25)" }}>|</Text>
          <Text style={{ fontSize: 8, color: "rgba(255,255,255,0.4)" }}>Print Unlimited</Text>
        </View>
      </View>
      <View style={{ position: "absolute", bottom: 45, right: 40, width: 120, height: 120, borderRadius: 60, borderWidth: 0.75, borderColor: "rgba(43,168,154,0.1)" }} />
      <View style={{ position: "absolute", bottom: 65, right: 60, width: 80, height: 80, borderRadius: 40, borderWidth: 0.5, borderColor: "rgba(43,168,154,0.06)" }} />
    </Page>
  );
}
