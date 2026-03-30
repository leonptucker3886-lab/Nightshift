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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 12,
          gap: 16,
        }}
      >
        {[
          { label: "Month", width: 140 },
          { label: "Year", width: 70 },
          { label: "Name", width: 120 },
        ].map((field) => (
          <View
            key={field.label}
            style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
          >
            <Text
              style={{
                fontSize: 8,
                fontFamily: "Helvetica-Bold",
                color: colors.teal,
                marginRight: 6,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              {field.label}:
            </Text>
            <View
              style={{
                flex: 1,
                borderBottomWidth: 0.75,
                borderBottomColor: colors.tealMuted,
                paddingBottom: 2,
              }}
            >
              <Text style={{ fontSize: 8, color: "transparent" }}>.</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Legend */}
      <View
        style={{
          flexDirection: "row",
          gap: 16,
          marginBottom: 12,
          paddingTop: 7,
          paddingBottom: 7,
          paddingLeft: 12,
          paddingRight: 12,
          backgroundColor: colors.ice,
          borderRadius: 4,
          borderWidth: 0.5,
          borderColor: colors.tealPale,
        }}
      >
        {[
          { label: "D = Day (0700–1900)", color: colors.ocean },
          { label: "N = Night (1900–0700)", color: colors.midnight },
          { label: "OFF = Off", color: colors.softGreen },
          { label: "C = Call", color: colors.warmOrange },
        ].map((item) => (
          <View
            key={item.label}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
                backgroundColor: item.color,
                marginRight: 5,
              }}
            />
            <Text style={{ fontSize: 7, color: colors.textMid, fontFamily: "Helvetica-Bold" }}>
              {item.label}
            </Text>
          </View>
        ))}
      </View>

      {/* Calendar Grids */}
      {Array.from({ length: weeks }, (_, weekIdx) => (
        <View key={weekIdx} style={{ marginBottom: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: colors.teal,
                marginRight: 5,
              }}
            />
            <Text
              style={{
                fontSize: 8,
                fontFamily: "Helvetica-Bold",
                color: colors.teal,
                letterSpacing: 0.5,
              }}
            >
              WEEK {weekIdx + 1}
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            {/* Day labels column */}
            <View style={{ width: 32 }}>
              <View style={{ height: 20, justifyContent: "center", marginBottom: 1 }}>
                <Text style={{ fontSize: 6, color: "transparent" }}>.</Text>
              </View>
              {days.map((day) => (
                <View
                  key={day}
                  style={{
                    height: 30,
                    justifyContent: "center",
                    marginBottom: 1,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 6,
                      fontFamily: "Helvetica-Bold",
                      color: colors.textLight,
                    }}
                  >
                    {day}
                  </Text>
                </View>
              ))}
            </View>

            {/* Date columns */}
            <View style={{ flex: 1, flexDirection: "row", gap: 1.5 }}>
              {Array.from({ length: 7 }, (_, dayIdx) => {
                const dateNum = weekIdx * 7 + dayIdx + 1;
                return (
                  <View key={dayIdx} style={{ flex: 1 }}>
                    <View
                      style={{
                        height: 20,
                        backgroundColor: colors.tealPale,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 3,
                        marginBottom: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 8,
                          fontFamily: "Helvetica-Bold",
                          color: colors.teal,
                        }}
                      >
                        {dateNum <= 28 ? dateNum : ""}
                      </Text>
                    </View>
                    {days.map((d) => (
                      <View
                        key={d}
                        style={{
                          height: 30,
                          borderWidth: 0.5,
                          borderColor: colors.tealPale,
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: 1,
                          borderRadius: 1,
                        }}
                      >
                        <Text style={{ fontSize: 12, color: "transparent" }}>.</Text>
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
      <View style={{ marginTop: 4 }}>
        <Text style={sharedStyles.sectionTitle}>Notes</Text>
        {Array.from({ length: 3 }, (_, i) => (
          <View key={i} style={sharedStyles.lineSpacious} />
        ))}
      </View>

      {/* Footer */}
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>
          {"\u263E"} 2026 Night Shift Nurse Survival Bundle
        </Text>
        <Text style={sharedStyles.footerText}>Page 2 of 8</Text>
      </View>
    </Page>
  );
}
