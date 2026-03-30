import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const sbarSections = [
  {
    letter: "S",
    title: "Situation",
    subtitle: "What is going on with the patient?",
    fields: [
      "Patient Name / Room # / Bed",
      "Age / Sex / Code Status",
      "Primary Diagnosis / Reason for Admission",
      "Current Concern / Issue",
    ],
  },
  {
    letter: "B",
    title: "Background",
    subtitle: "What is the clinical context?",
    fields: [
      "Admission Date / Admitting Provider",
      "Relevant Medical / Surgical History",
      "Allergies",
      "Current IV Access / Lines / Drains",
    ],
  },
  {
    letter: "A",
    title: "Assessment",
    subtitle: "What do I think is going on?",
    fields: [
      "Current Vital Signs (T / HR / BP / RR / SpO2)",
      "Pain Assessment (0-10, location, quality)",
      "Neuro / Respiratory / Cardio / GI-GU Status",
      "Lab Results / Imaging Findings",
    ],
  },
  {
    letter: "R",
    title: "Recommendation",
    subtitle: "What do I need / suggest?",
    fields: [
      "Pending Orders / Interventions Needed",
      "Anticipated Changes / Concerns to Watch",
      "Specific Asks of Receiving RN / Provider",
      "Patient/Family Updates Given",
    ],
  },
];

export default function HandoffSheet() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      {/* Header */}
      <View style={{ marginBottom: 10 }}>
        <Text style={sharedStyles.headerBadge}>Patient Safety</Text>
        <Text style={[sharedStyles.pageTitle, { marginTop: 8 }]}>
          SBAR Patient Handoff / Report Sheet
        </Text>
        <Text style={sharedStyles.pageSubtitle}>
          Structured communication for safe shift-to-shift handoffs. One sheet
          per patient.
        </Text>
      </View>

      {/* Patient info bar */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.ice,
          padding: "8 12",
          borderRadius: 4,
          marginBottom: 12,
          gap: 16,
        }}
      >
        {["Patient Name", "Room / Bed", "Date", "Shift", "RN"].map((label) => (
          <View key={label} style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
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

      {/* SBAR Sections */}
      {sbarSections.map((section) => (
        <View key={section.letter} style={{ marginBottom: 10 }}>
          {/* Section header */}
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 6 }}>
            <View
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                backgroundColor:
                  section.letter === "S"
                    ? colors.ocean
                    : section.letter === "B"
                      ? colors.teal
                      : section.letter === "A"
                        ? colors.warmOrange
                        : colors.softGreen,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Helvetica-Bold",
                  color: colors.white,
                }}
              >
                {section.letter}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Helvetica-Bold",
                  color: colors.deepNavy,
                }}
              >
                {section.title}
              </Text>
              <Text style={{ fontSize: 7, color: colors.textLight }}>
                {section.subtitle}
              </Text>
            </View>
          </View>

          {/* Fields */}
          {section.fields.map((field) => (
            <View
              key={field}
              style={{
                marginLeft: 34,
                marginBottom: 6,
              }}
            >
              <Text
                style={{
                  fontSize: 8,
                  fontFamily: "Helvetica-Bold",
                  color: colors.textMid,
                  marginBottom: 3,
                }}
              >
                {field}
              </Text>
              <View
                style={{
                  height: 22,
                  borderWidth: 0.5,
                  borderColor: colors.lightGray,
                  borderRadius: 2,
                  backgroundColor: colors.offWhite,
                  paddingLeft: 4,
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 8, color: "transparent" }}>.</Text>
              </View>
            </View>
          ))}
        </View>
      ))}

      {/* Important notes / orders section */}
      <View style={{ marginTop: 4 }}>
        <Text style={sharedStyles.sectionTitle}>
          Critical Orders / Follow-Up Items
        </Text>
        {Array.from({ length: 3 }, (_, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <View style={sharedStyles.checkbox} />
            <View
              style={{
                flex: 1,
                height: 16,
                borderBottomWidth: 0.5,
                borderBottomColor: colors.lightGray,
              }}
            />
          </View>
        ))}
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
