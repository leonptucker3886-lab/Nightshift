import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const sbarSections = [
  {
    letter: "S",
    title: "Situation",
    subtitle: "What is going on with the patient?",
    color: colors.ocean,
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
    color: colors.teal,
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
    color: colors.warmOrange,
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
    color: colors.softGreen,
    fields: [
      "Pending Orders / Interventions Needed",
      "Anticipated Changes / Concerns to Watch",
      "Specific Asks of Receiving RN / Provider",
      "Patient/Family Updates Given",
    ],
  },
];

const sampleData: Record<string, string> = {
  "Patient Name / Room # / Bed": "Maria Chen / Room 412-B",
  "Age / Sex / Code Status": "67 / F / Full Code",
  "Primary Diagnosis / Reason for Admission": "CHF exacerbation \u2014 increased SOB, weight gain",
  "Current Concern / Issue": "O2 sat dropped to 89% on RA, now on 2L NC",
};

export default function HandoffSheet() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      {/* Header */}
      <View style={sharedStyles.pageHeader}>
        <Text style={sharedStyles.headerBadge}>Patient Safety</Text>
        <Text style={[sharedStyles.pageTitle, { marginTop: 8 }]}>
          SBAR Patient Handoff / Report Sheet
        </Text>
        <Text style={sharedStyles.pageSubtitle}>
          Structured communication for safe shift-to-shift handoffs. One sheet per patient.
        </Text>
      </View>

      {/* Patient info bar */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.ice,
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 12,
          paddingRight: 12,
          borderRadius: 4,
          marginBottom: 12,
          gap: 12,
          borderWidth: 0.5,
          borderColor: colors.tealPale,
        }}
      >
        {["Patient Name", "Room / Bed", "Date", "Shift", "RN"].map((label) => (
          <View
            key={label}
            style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
          >
            <Text
              style={{
                fontSize: 6,
                fontFamily: "Helvetica-Bold",
                color: colors.teal,
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
                borderBottomColor: colors.tealMuted,
                paddingBottom: 1,
              }}
            >
              <Text style={{ fontSize: 7, color: "transparent" }}>.</Text>
            </View>
          </View>
        ))}
      </View>

      {/* SBAR Sections */}
      {sbarSections.map((section, sectionIdx) => (
        <View key={section.letter} style={{ marginBottom: 8 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <View
              style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                backgroundColor: section.color,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
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
                  fontSize: 11,
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

          {section.fields.map((field) => {
            const isSampleField = sectionIdx === 0 && sampleData[field];
            return (
              <View
                key={field}
                style={{
                  marginLeft: 36,
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 7,
                    fontFamily: "Helvetica-Bold",
                    color: colors.textMid,
                    marginBottom: 2,
                  }}
                >
                  {field}
                </Text>
                {isSampleField ? (
                  <View style={sharedStyles.sampleBox}>
                    <Text style={sharedStyles.sampleText}>
                      {sampleData[field]}
                    </Text>
                  </View>
                ) : (
                  <View
                    style={{
                      height: 22,
                      borderBottomWidth: 0.75,
                      borderBottomColor: colors.lightGray,
                      backgroundColor: colors.offWhite,
                      paddingLeft: 4,
                      justifyContent: "center",
                      borderRadius: 2,
                    }}
                  >
                    <Text style={{ fontSize: 7, color: "transparent" }}>.</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      ))}

      {/* Sample indicator */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 6,
        }}
      >
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: colors.sampleBlue,
            borderWidth: 0.5,
            borderColor: "#B8D4E8",
            marginRight: 4,
          }}
        />
        <Text style={{ fontSize: 6, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>
          Blue highlighted entries show sample data filled in
        </Text>
      </View>

      {/* Critical Orders */}
      <View style={{ marginTop: 2 }}>
        <Text style={sharedStyles.sectionTitle}>
          {"\u2757"} Critical Orders / Follow-Up Items
        </Text>
        {Array.from({ length: 3 }, (_, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <View style={sharedStyles.checkbox} />
            <View
              style={{
                flex: 1,
                height: 18,
                borderBottomWidth: 0.5,
                borderBottomColor: colors.lightGray,
              }}
            />
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>
          {"\u263E"} 2026 Night Shift Nurse Survival Bundle
        </Text>
        <Text style={sharedStyles.footerText}>Page 3 of 8</Text>
      </View>
    </Page>
  );
}
