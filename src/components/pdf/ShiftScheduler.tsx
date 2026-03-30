import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function ShiftScheduler() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Shift Planning</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>Rotating Shift Scheduler</Text>
          <Text style={sharedStyles.pageSubtitle}>Plan your 2–3 week rotation. Mark D (Day), N (Night), OFF, or your custom code.</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 10, marginBottom: 6 }}>
          {["Month", "Year", "Name"].map((l) => (
            <View key={l} style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginRight: 3 }}>{l}:</Text>
              <View style={{ flex: 1, borderBottomWidth: 0.5, borderBottomColor: colors.tealMuted, paddingBottom: 1 }}><Text style={{ fontSize: 6, color: "transparent" }}>.</Text></View>
            </View>
          ))}
        </View>

        <View style={{ flexDirection: "row", gap: 12, marginBottom: 6, paddingTop: 4, paddingBottom: 4, paddingLeft: 8, paddingRight: 8, backgroundColor: colors.ice, borderRadius: 3 }}>
          {[{ l: "D=Day", c: colors.ocean }, { l: "N=Night", c: colors.midnight }, { l: "OFF", c: colors.softGreen }, { l: "C=Call", c: colors.warmOrange }].map((i) => (
            <View key={i.l} style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: 7, height: 7, borderRadius: 1.5, backgroundColor: i.c, marginRight: 3 }} />
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid }}>{i.l}</Text>
            </View>
          ))}
        </View>

        {Array.from({ length: 3 }, (_, w) => (
          <View key={w} style={{ marginBottom: 6 }}>
            <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>WEEK {w + 1}</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: 22 }}>
                <View style={{ height: 14, justifyContent: "center", marginBottom: 0.5 }}><Text style={{ fontSize: 4, color: "transparent" }}>.</Text></View>
                {days.map((d) => (
                  <View key={d} style={{ height: 18, justifyContent: "center", marginBottom: 0.5 }}>
                    <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textLight }}>{d}</Text>
                  </View>
                ))}
              </View>
              <View style={{ flex: 1, flexDirection: "row", gap: 0.5 }}>
                {Array.from({ length: 7 }, (_, di) => {
                  const n = w * 7 + di + 1;
                  return (
                    <View key={di} style={{ flex: 1 }}>
                      <View style={{ height: 14, backgroundColor: colors.tealPale, justifyContent: "center", alignItems: "center", borderRadius: 2, marginBottom: 0.5 }}>
                        <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal }}>{n <= 21 ? n : ""}</Text>
                      </View>
                      {days.map((d) => (
                        <View key={d} style={{ height: 18, borderWidth: 0.5, borderColor: colors.tealPale, justifyContent: "center", alignItems: "center", marginBottom: 0.5, borderRadius: 1 }}>
                          <Text style={{ fontSize: 8, color: "transparent" }}>.</Text>
                        </View>
                      ))}
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        ))}

        <View style={{ marginTop: 4 }}>
          <Text style={sharedStyles.sectionTitle}>Notes</Text>
          {Array.from({ length: 4 }, (_, i) => (<View key={i} style={sharedStyles.lineSpacious} />))}
        </View>
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 2 of 8</Text>
      </View>
    </Page>
  );
}
