import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Sample filled week showing a realistic night shift rotation
const sampleWeek = [
  // Week 1
  ["N", "N", "N", "OFF", "OFF", "N", "N"],
  // Week 2
  ["N", "OFF", "OFF", "N", "N", "N", "OFF"],
  // Week 3
  ["OFF", "OFF", "N", "N", "OFF", "OFF", "OFF"],
];

const sampleColors: Record<string, string> = {
  N: colors.midnight,
  D: colors.ocean,
  OFF: colors.softGreen,
  C: colors.warmOrange,
};

export default function ShiftScheduler() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Shift Planning</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>
            {"\u{1F4C5}"} Rotating Shift Scheduler
          </Text>
          <Text style={sharedStyles.pageSubtitle}>
            Plan your 2–3 week night shift rotation. Mark D (Day), N (Night), OFF, or C (Call). One page per month.
          </Text>
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
            marginBottom: 6,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 8, marginRight: 4 }}>{"\u{1F4A1}"}</Text>
          <Text style={{ fontSize: 5, color: colors.teal, fontFamily: "Helvetica-Bold" }}>
            Plan recovery days between night blocks. Limit consecutive nights to 3–4 when possible to protect sleep health.
          </Text>
        </View>

        {/* Month / Name fields */}
        <View style={{ flexDirection: "row", gap: 10, marginBottom: 6 }}>
          {[
            { label: "Month", sample: "April 2026" },
            { label: "Year", sample: "2026" },
            { label: "Name", sample: "J. Rodriguez, RN" },
          ].map((f) => (
            <View key={f.label} style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginRight: 3 }}>
                {f.label}:
              </Text>
              <View style={{ flex: 1 }}>
                <View style={sharedStyles.sampleBox}>
                  <Text style={sharedStyles.sampleText}>{f.sample}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Legend */}
        <View
          style={{
            flexDirection: "row",
            gap: 14,
            marginBottom: 6,
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 8,
            paddingRight: 8,
            backgroundColor: colors.ice,
            borderRadius: 3,
            borderWidth: 0.5,
            borderColor: colors.tealPale,
          }}
        >
          {[
            { label: "N = Night (1900–0700)", color: colors.midnight, key: "N" },
            { label: "D = Day (0700–1900)", color: colors.ocean, key: "D" },
            { label: "OFF = Off", color: colors.softGreen, key: "OFF" },
            { label: "C = Call", color: colors.warmOrange, key: "C" },
          ].map((item) => (
            <View key={item.label} style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 2,
                  backgroundColor: item.color,
                  marginRight: 4,
                }}
              />
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid }}>
                {item.label}
              </Text>
            </View>
          ))}
        </View>

        {/* Calendar Grids — 3 weeks with sample data */}
        {Array.from({ length: 3 }, (_, weekIdx) => (
          <View key={weekIdx} style={{ marginBottom: 6 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
              <View
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 2.5,
                  backgroundColor: colors.teal,
                  marginRight: 4,
                }}
              />
              <Text
                style={{
                  fontSize: 6,
                  fontFamily: "Helvetica-Bold",
                  color: colors.teal,
                  letterSpacing: 0.4,
                }}
              >
                WEEK {weekIdx + 1}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              {/* Day labels */}
              <View style={{ width: 24 }}>
                <View style={{ height: 14, justifyContent: "center", marginBottom: 0.5 }}>
                  <Text style={{ fontSize: 4, color: "transparent" }}>.</Text>
                </View>
                {days.map((day) => (
                  <View key={day} style={{ height: 20, justifyContent: "center", marginBottom: 0.5 }}>
                    <Text
                      style={{
                        fontSize: 5,
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
              <View style={{ flex: 1, flexDirection: "row", gap: 0.5 }}>
                {Array.from({ length: 7 }, (_, dayIdx) => {
                  const dateNum = weekIdx * 7 + dayIdx + 1;
                  const sampleVal = sampleWeek[weekIdx][dayIdx];
                  return (
                    <View key={dayIdx} style={{ flex: 1 }}>
                      <View
                        style={{
                          height: 14,
                          backgroundColor: colors.tealPale,
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 2,
                          marginBottom: 0.5,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 6,
                            fontFamily: "Helvetica-Bold",
                            color: colors.teal,
                          }}
                        >
                          {dateNum <= 21 ? dateNum : ""}
                        </Text>
                      </View>
                      {days.map((d, di) => {
                        const hasSample = sampleVal === "N" || sampleVal === "D" || sampleVal === "C";
                        return (
                          <View
                            key={d}
                            style={{
                              height: 20,
                              borderWidth: 0.5,
                              borderColor: colors.tealPale,
                              justifyContent: "center",
                              alignItems: "center",
                              marginBottom: 0.5,
                              borderRadius: 1,
                              backgroundColor:
                                hasSample && di < 1
                                  ? (sampleColors[sampleVal] || colors.white) + "18"
                                  : undefined,
                            }}
                          >
                            {hasSample && di === 0 ? (
                              <Text
                                style={{
                                  fontSize: 8,
                                  fontFamily: "Helvetica-Bold",
                                  color: sampleColors[sampleVal] || colors.textMid,
                                }}
                              >
                                {sampleVal}
                              </Text>
                            ) : (
                              <Text style={{ fontSize: 7, color: "transparent" }}>.</Text>
                            )}
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        ))}

        {/* Sample indicator */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
          <View
            style={{
              width: 5,
              height: 5,
              borderRadius: 2.5,
              backgroundColor: colors.midnight,
              marginRight: 3,
            }}
          />
          <Text style={{ fontSize: 4, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>
            Sample rotation shown: 3 nights ON, 2 OFF, 2 ON pattern. Adjust to your unit schedule.
          </Text>
        </View>

        {/* Notes + Quick Reference */}
        <View style={{ flexDirection: "row", gap: 6 }}>
          <View style={{ flex: 1 }}>
            <Text style={sharedStyles.sectionTitle}>Notes</Text>
            {Array.from({ length: 3 }, (_, i) => (
              <View key={i} style={sharedStyles.lineSpacious} />
            ))}
          </View>
          <View style={{ flex: 1 }}>
            <Text style={sharedStyles.sectionTitle}>Rotation Tips</Text>
            {[
              "Max 3–4 consecutive nights",
              "Schedule OFF day after last night",
              "Block sleep time on calendar",
              "Meal prep before night block",
            ].map((tip) => (
              <View key={tip} style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
                <View style={{ ...sharedStyles.checkbox, width: 6, height: 6, marginRight: 2 }} />
                <Text style={{ fontSize: 5, color: colors.textDark }}>{tip}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>{"\u263E"} 2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 2 of 8</Text>
      </View>
    </Page>
  );
}
