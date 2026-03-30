import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weeks = 4;

export default function ShiftScheduler() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      {/* Header */}
      <View style={sharedStyles.pageHeader}>
        <Text style={sharedStyles.headerBadge}>Shift Planning</Text>
        <Text style={[sharedStyles.pageTitle, { marginTop: 8 }]}>
          Rotating Shift Scheduler
        </Text>
        <Text style={sharedStyles.pageSubtitle}>
          Plan your 2–4 week rotation. Mark D (Day), N (Night), OFF, or your custom code.
        </Text>
      </View>

      {/* Month / Name fields */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8, gap: 12 }}>
        {["Month", "Year", "Name"].map((label) => (
          <View key={label} style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.teal, marginRight: 4, textTransform: "uppercase", letterSpacing: 0.4 }}>
              {label}:
            </Text>
            <View style={{ flex: 1, borderBottomWidth: 0.75, borderBottomColor: colors.tealMuted, paddingBottom: 1 }}>
              <Text style={{ fontSize: 7, color: "transparent" }}>.</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Legend */}
      <View style={{
        flexDirection: "row", gap: 14, marginBottom: 8,
        paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10,
        backgroundColor: colors.ice, borderRadius: 3, borderWidth: 0.5, borderColor: colors.tealPale,
      }}>
        {[
          { label: "D = Day (0700–1900)", color: colors.ocean },
          { label: "N = Night (1900–0700)", color: colors.midnight },
          { label: "OFF = Off", color: colors.softGreen },
          { label: "C = Call", color: colors.warmOrange },
        ].map((item) => (
          <View key={item.label} style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ width: 8, height: 8, borderRadius: 2, backgroundColor: item.color, marginRight: 4 }} />
            <Text style={{ fontSize: 6, color: colors.textMid, fontFamily: "Helvetica-Bold" }}>{item.label}</Text>
          </View>
        ))}
      </View>

      {/* Calendar Grids */}
      {Array.from({ length: weeks }, (_, weekIdx) => (
        <View key={weekIdx} style={{ marginBottom: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
            <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: colors.teal, marginRight: 4 }} />
            <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.teal, letterSpacing: 0.4 }}>
              WEEK {weekIdx + 1}
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            {/* Day labels */}
            <View style={{ width: 26 }}>
              <View style={{ height: 16, justifyContent: "center", marginBottom: 0.5 }}>
                <Text style={{ fontSize: 5, color: "transparent" }}>.</Text>
              </View>
              {days.map((day) => (
                <View key={day} style={{ height: 22, justifyContent: "center", marginBottom: 0.5 }}>
                  <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textLight }}>{day}</Text>
                </View>
              ))}
            </View>

            {/* Date columns */}
            <View style={{ flex: 1, flexDirection: "row", gap: 1 }}>
              {Array.from({ length: 7 }, (_, dayIdx) => {
                const dateNum = weekIdx * 7 + dayIdx + 1;
                return (
                  <View key={dayIdx} style={{ flex: 1 }}>
                    <View style={{
                      height: 16, backgroundColor: colors.tealPale,
                      justifyContent: "center", alignItems: "center", borderRadius: 2, marginBottom: 0.5,
                    }}>
                      <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.teal }}>
                        {dateNum <= 28 ? dateNum : ""}
                      </Text>
                    </View>
                    {days.map((d) => (
                      <View key={d} style={{
                        height: 22, borderWidth: 0.5, borderColor: colors.tealPale,
                        justifyContent: "center", alignItems: "center", marginBottom: 0.5, borderRadius: 1,
                      }}>
                        <Text style={{ fontSize: 10, color: "transparent" }}>.</Text>
                      </View>
                    ))}
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      ))}

      {/* Notes section */}
      <View style={{ marginTop: 6 }}>
        <Text style={sharedStyles.sectionTitle}>Notes</Text>
        {Array.from({ length: 3 }, (_, i) => (
          <View key={i} style={sharedStyles.lineSpacious} />
        ))}
      </View>

      {/* Footer */}
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>{"\u263E"} 2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 2 of 8</Text>
      </View>
    </Page>
  );
}
