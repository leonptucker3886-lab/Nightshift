import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weeks = 4;

export default function ShiftScheduler() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      {/* Header */}
      <View style={{ marginBottom: 12 }}>
        <Text style={sharedStyles.headerBadge}>Shift Planning</Text>
        <Text style={[sharedStyles.pageTitle, { marginTop: 8 }]}>
          Rotating Shift Scheduler
        </Text>
        <Text style={sharedStyles.pageSubtitle}>
          Plan your 2-4 week rotation. Mark D (Day), N (Night), OFF, or your
          custom code.
        </Text>
      </View>

      {/* Month / Name fields */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 9,
              fontFamily: "Helvetica-Bold",
              color: colors.textMid,
              marginRight: 6,
            }}
          >
            Month:
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.mediumGray,
              width: 120,
              paddingBottom: 2,
            }}
          >
            <Text style={{ fontSize: 9, color: "transparent" }}>.</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 9,
              fontFamily: "Helvetica-Bold",
              color: colors.textMid,
              marginRight: 6,
            }}
          >
            Year:
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.mediumGray,
              width: 60,
              paddingBottom: 2,
            }}
          >
            <Text style={{ fontSize: 9, color: "transparent" }}>.</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 9,
              fontFamily: "Helvetica-Bold",
              color: colors.textMid,
              marginRight: 6,
            }}
          >
            Name:
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.mediumGray,
              width: 100,
              paddingBottom: 2,
            }}
          >
            <Text style={{ fontSize: 9, color: "transparent" }}>.</Text>
          </View>
        </View>
      </View>

      {/* Legend */}
      <View
        style={{
          flexDirection: "row",
          gap: 14,
          marginBottom: 10,
          paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 10,
            paddingRight: 10,
          backgroundColor: colors.offWhite,
          borderRadius: 3,
        }}
      >
        {[
          { label: "D = Day (0700-1900)", color: colors.ocean },
          { label: "N = Night (1900-0700)", color: colors.midnight },
          { label: "OFF = Off", color: colors.softGreen },
          { label: "C = Call", color: colors.warmOrange },
        ].map((item) => (
          <View key={item.label} style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 1,
                backgroundColor: item.color,
                marginRight: 4,
              }}
            />
            <Text style={{ fontSize: 7, color: colors.textMid }}>
              {item.label}
            </Text>
          </View>
        ))}
      </View>

      {/* Calendar Grids - one per week */}
      {Array.from({ length: weeks }, (_, weekIdx) => (
        <View key={weekIdx} style={{ marginBottom: 8 }}>
          <Text
            style={{
              fontSize: 8,
              fontFamily: "Helvetica-Bold",
              color: colors.teal,
              marginBottom: 4,
            }}
          >
            WEEK {weekIdx + 1}
          </Text>
          <View style={{ flexDirection: "row" }}>
            {/* Day labels column */}
            <View style={{ width: 36 }}>
              <View
                style={{
                  height: 18,
                  justifyContent: "center",
                  marginBottom: 1,
                }}
              >
                <Text style={{ fontSize: 7, color: "transparent" }}>.</Text>
              </View>
              {days.map((day) => (
                <View
                  key={day}
                  style={{
                    height: 32,
                    justifyContent: "center",
                    marginBottom: 1,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 7,
                      fontFamily: "Helvetica-Bold",
                      color: colors.textMid,
                    }}
                  >
                    {day}
                  </Text>
                </View>
              ))}
            </View>

            {/* Date columns */}
            <View style={{ flex: 1, flexDirection: "row", gap: 2 }}>
              {Array.from({ length: 7 }, (_, dayIdx) => {
                const dateNum = weekIdx * 7 + dayIdx + 1;
                return (
                  <View key={dayIdx} style={{ flex: 1 }}>
                    {/* Date header */}
                    <View
                      style={{
                        height: 18,
                        backgroundColor: colors.ice,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 2,
                        marginBottom: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 7,
                          fontFamily: "Helvetica-Bold",
                          color: colors.slate,
                        }}
                      >
                        {dateNum <= 28 ? dateNum : ""}
                      </Text>
                    </View>
                    {/* Write-in cells */}
                    {days.map((d) => (
                      <View
                        key={d}
                        style={{
                          height: 32,
                          borderWidth: 0.5,
                          borderColor: colors.lightGray,
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 14,
                            color: "transparent",
                          }}
                        >
                          .
                        </Text>
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
          <View
            key={i}
            style={{
              ...sharedStyles.line,
              height: 20,
            }}
          />
        ))}
      </View>

      {/* Footer */}
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>
          2026 Night Shift Nurse Survival Bundle
        </Text>
        <Text
          render={({ pageNumber }) => `Page ${pageNumber} of 8`}
          style={sharedStyles.footerText}
        />
      </View>
    </Page>
  );
}
