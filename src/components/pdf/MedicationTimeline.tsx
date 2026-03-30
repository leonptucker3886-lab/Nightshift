import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const timeSlots = [
  { time: "1900", label: "Shift Start" },
  { time: "1930", label: "" },
  { time: "2000", label: "" },
  { time: "2030", label: "" },
  { time: "2100", label: "" },
  { time: "2130", label: "" },
  { time: "2200", label: "" },
  { time: "2230", label: "" },
  { time: "2300", label: "Midnight Meds" },
  { time: "2330", label: "" },
  { time: "0000", label: "Midnight" },
  { time: "0030", label: "" },
  { time: "0100", label: "" },
  { time: "0130", label: "" },
  { time: "0200", label: "" },
  { time: "0230", label: "" },
  { time: "0300", label: "" },
  { time: "0330", label: "" },
  { time: "0400", label: "AM Meds" },
  { time: "0430", label: "" },
  { time: "0500", label: "Vitals" },
  { time: "0530", label: "" },
  { time: "0600", label: "Lab Draw" },
  { time: "0630", label: "" },
  { time: "0700", label: "Shift End" },
];

const taskColumns = ["Meds", "Vitals", "I&O", "Chart", "Assess", "Notes"];

export default function MedicationTimeline() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      {/* Header */}
      <View style={{ marginBottom: 10 }}>
        <Text style={sharedStyles.headerBadge}>Medication & Tasks</Text>
        <Text style={[sharedStyles.pageTitle, { marginTop: 8 }]}>
          Hourly Night Shift Timeline
        </Text>
        <Text style={sharedStyles.pageSubtitle}>
          1900-0700 with checkboxes for meds, vitals, charting, and assessments.
        </Text>
      </View>

      {/* Patient info bar */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.warmOrangePale,
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 12,
          paddingRight: 12,
          borderRadius: 4,
          marginBottom: 8,
          gap: 16,
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
                color: colors.textMid,
                marginRight: 4,
              }}
            >
              {label}:
            </Text>
            <View
              style={{
                flex: 1,
                borderBottomWidth: 0.5,
                borderBottomColor: colors.mediumGray,
                paddingBottom: 1,
              }}
            >
              <Text style={{ fontSize: 8, color: "transparent" }}>.</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Table header */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.deepNavy,
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 8,
          paddingRight: 8,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
        }}
      >
        <Text
          style={{
            width: 42,
            fontSize: 7,
            fontFamily: "Helvetica-Bold",
            color: colors.white,
          }}
        >
          TIME
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
            <Text
              style={{
                fontSize: 6,
                fontFamily: "Helvetica-Bold",
                color: colors.tealLight,
                textTransform: "uppercase",
              }}
            >
              {col}
            </Text>
          </View>
        ))}
        <Text
          style={{
            flex: 2,
            fontSize: 7,
            fontFamily: "Helvetica-Bold",
            color: colors.white,
            textAlign: "left",
          }}
        >
          DETAILS
        </Text>
      </View>

      {/* Time rows */}
      {timeSlots.map((slot, idx) => {
        const isHighlight =
          slot.label === "Shift Start" ||
          slot.label === "Midnight" ||
          slot.label === "Shift End";
        const isMeds =
          slot.label === "Midnight Meds" ||
          slot.label === "AM Meds";
        return (
          <View
            key={slot.time}
            style={{
              flexDirection: "row",
              paddingTop: 3,
              paddingBottom: 3,
              paddingLeft: 8,
              paddingRight: 8,
              backgroundColor: isHighlight
                ? colors.ice
                : isMeds
                  ? colors.warmOrangePale
                  : idx % 2 === 0
                    ? colors.white
                    : colors.offWhite,
              borderBottomWidth: 0.5,
              borderBottomColor: colors.lightGray,
              alignItems: "center",
            }}
          >
            {/* Time */}
            <View style={{ width: 42 }}>
              <Text
                style={{
                  fontSize: 9,
                  fontFamily: "Helvetica-Bold",
                  color: isHighlight ? colors.ocean : colors.textDark,
                }}
              >
                {slot.time}
              </Text>
              {slot.label && (
                <Text style={{ fontSize: 5, color: colors.textLight }}>
                  {slot.label}
                </Text>
              )}
            </View>

            {/* Checkbox columns */}
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
                    width: 9,
                    height: 9,
                    borderWidth: 0.75,
                    borderColor: isMeds && col === "Meds"
                      ? colors.warmOrange
                      : colors.mediumGray,
                    borderRadius: 1,
                  }}
                />
              </View>
            ))}

            {/* Details line */}
            <View
              style={{
                flex: 2,
                height: 12,
                borderBottomWidth: 0.3,
                borderBottomColor: colors.lightGray,
                marginLeft: 4,
              }}
            />
          </View>
        );
      })}

      {/* Key meds reference */}
      <View style={{ marginTop: 10 }}>
        <Text style={sharedStyles.sectionTitle}>Key Medication Times Reference</Text>
        <View style={{ flexDirection: "row", gap: 20 }}>
          {[
            { time: "2000-2200", desc: "Evening scheduled meds" },
            { time: "2300-0100", desc: "Midnight med pass" },
            { time: "0400-0600", desc: "AM med pass / labs" },
          ].map((ref) => (
            <View key={ref.time} style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 8,
                  fontFamily: "Helvetica-Bold",
                  color: colors.warmOrange,
                }}
              >
                {ref.time}
              </Text>
              <Text style={{ fontSize: 7, color: colors.textMid }}>
                {ref.desc}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={sharedStyles.footer} fixed>
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
