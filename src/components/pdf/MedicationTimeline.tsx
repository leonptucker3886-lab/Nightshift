import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const timeSlots = [
  { time: "1900", label: "Shift Start", highlight: true },
  { time: "1930", label: "" },
  { time: "2000", label: "" },
  { time: "2030", label: "" },
  { time: "2100", label: "" },
  { time: "2130", label: "" },
  { time: "2200", label: "" },
  { time: "2230", label: "" },
  { time: "2300", label: "Midnight Meds", meds: true },
  { time: "2330", label: "" },
  { time: "0000", label: "Midnight", highlight: true },
  { time: "0030", label: "" },
  { time: "0100", label: "" },
  { time: "0130", label: "" },
  { time: "0200", label: "" },
  { time: "0230", label: "" },
  { time: "0300", label: "" },
  { time: "0330", label: "" },
  { time: "0400", label: "AM Meds", meds: true },
  { time: "0430", label: "" },
  { time: "0500", label: "Vitals" },
  { time: "0530", label: "" },
  { time: "0600", label: "Lab Draw" },
  { time: "0630", label: "" },
  { time: "0700", label: "Shift End", highlight: true },
];

const taskColumns = ["Meds", "Vitals", "I&O", "Chart", "Assess", "Notes"];

export default function MedicationTimeline() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      {/* Header */}
      <View style={sharedStyles.pageHeader}>
        <Text style={sharedStyles.headerBadge}>Medication & Tasks</Text>
        <Text style={[sharedStyles.pageTitle, { marginTop: 8 }]}>
          Hourly Night Shift Timeline
        </Text>
        <Text style={sharedStyles.pageSubtitle}>
          1900–0700 with checkboxes for meds, vitals, charting, and assessments.
        </Text>
      </View>

      {/* Patient info bar */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.warmOrangePale,
          paddingTop: 7,
          paddingBottom: 7,
          paddingLeft: 12,
          paddingRight: 12,
          borderRadius: 4,
          marginBottom: 10,
          gap: 16,
          borderWidth: 0.5,
          borderColor: "#F0D9B5",
        }}
      >
        {["Patient", "Room", "Date", "RN"].map((label) => (
          <View
            key={label}
            style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
          >
            <Text
              style={{
                fontSize: 7,
                fontFamily: "Helvetica-Bold",
                color: colors.warmOrange,
                marginRight: 4,
                textTransform: "uppercase",
                letterSpacing: 0.3,
              }}
            >
              {label}:
            </Text>
            <View
              style={{
                flex: 1,
                borderBottomWidth: 0.75,
                borderBottomColor: "#E0C9A0",
                paddingBottom: 1,
              }}
            >
              <Text style={{ fontSize: 7, color: "transparent" }}>.</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Table header */}
      <View style={sharedStyles.tableHeader}>
        <Text
          style={{
            width: 44,
            fontSize: 7,
            fontFamily: "Helvetica-Bold",
            color: colors.white,
            textTransform: "uppercase",
            letterSpacing: 0.5,
          }}
        >
          Time
        </Text>
        {taskColumns.map((col) => (
          <View
            key={col}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={sharedStyles.tableHeaderText}>{col}</Text>
          </View>
        ))}
        <Text
          style={{
            flex: 2,
            fontSize: 7,
            fontFamily: "Helvetica-Bold",
            color: colors.white,
            textAlign: "left",
            textTransform: "uppercase",
            letterSpacing: 0.5,
          }}
        >
          Details
        </Text>
      </View>

      {/* Time rows */}
      {timeSlots.map((slot, idx) => {
        const rowStyle = slot.highlight
          ? {
              ...sharedStyles.tableRow,
              backgroundColor: colors.ice,
              borderLeftWidth: 2,
              borderLeftColor: colors.ocean,
              paddingLeft: 6,
            }
          : slot.meds
            ? {
                ...sharedStyles.tableRow,
                backgroundColor: colors.warmOrangePale,
                borderLeftWidth: 2,
                borderLeftColor: colors.warmOrange,
                paddingLeft: 6,
              }
            : idx % 2 === 0
              ? sharedStyles.tableRow
              : sharedStyles.tableRowAlt;

        return (
          <View key={slot.time} style={rowStyle}>
            <View style={{ width: 44 }}>
              <Text
                style={{
                  fontSize: 9,
                  fontFamily: "Helvetica-Bold",
                  color: slot.highlight
                    ? colors.ocean
                    : slot.meds
                      ? colors.warmOrange
                      : colors.textDark,
                }}
              >
                {slot.time}
              </Text>
              {slot.label && (
                <Text
                  style={{
                    fontSize: 5,
                    color: slot.highlight || slot.meds ? colors.textMid : colors.textLight,
                    fontFamily: slot.highlight || slot.meds ? "Helvetica-Bold" : "Helvetica",
                  }}
                >
                  {slot.label}
                </Text>
              )}
            </View>

            {taskColumns.map((col) => (
              <View
                key={col}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderWidth: 0.75,
                    borderColor:
                      slot.meds && col === "Meds"
                        ? colors.warmOrange
                        : colors.tealMuted,
                    borderRadius: 2,
                  }}
                />
              </View>
            ))}

            <View
              style={{
                flex: 2,
                height: 14,
                borderBottomWidth: 0.5,
                borderBottomColor: colors.lightGray,
                marginLeft: 4,
              }}
            />
          </View>
        );
      })}

      {/* Key meds reference */}
      <View style={{ marginTop: 10 }}>
        <Text style={sharedStyles.sectionTitle}>
          {"\u{1F48A}"} Key Medication Times Reference
        </Text>
        <View style={{ flexDirection: "row", gap: 12 }}>
          {[
            { time: "2000–2200", desc: "Evening scheduled meds", icon: "\u{1F319}" },
            { time: "2300–0100", desc: "Midnight med pass", icon: "\u{1F319}" },
            { time: "0400–0600", desc: "AM med pass / labs", icon: "\u{1F305}" },
          ].map((ref) => (
            <View
              key={ref.time}
              style={{
                flex: 1,
                backgroundColor: colors.warmOrangePale,
                borderRadius: 4,
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 8,
                paddingRight: 8,
                borderWidth: 0.5,
                borderColor: "#F0D9B5",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 2 }}>
                <Text style={{ fontSize: 8, marginRight: 4 }}>{ref.icon}</Text>
                <Text
                  style={{
                    fontSize: 9,
                    fontFamily: "Helvetica-Bold",
                    color: colors.warmOrange,
                  }}
                >
                  {ref.time}
                </Text>
              </View>
              <Text style={{ fontSize: 7, color: colors.textMid }}>
                {ref.desc}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>
          {"\u263E"} 2026 Night Shift Nurse Survival Bundle
        </Text>
        <Text style={sharedStyles.footerText}>Page 4 of 8</Text>
      </View>
    </Page>
  );
}
