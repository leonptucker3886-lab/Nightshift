import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const pages = [
  {
    num: 1,
    name: "Cover Page",
    howToUse:
      "Your bundle cover. Keeps everything together when printed. Consider laminating or using a binder cover.",
  },
  {
    num: 2,
    name: "Rotating Shift Scheduler",
    howToUse:
      "Fill in at the start of each month. Use D/N/OFF codes. Great for tracking your 2-4 week rotation pattern. Pin to your fridge or keep in your work bag.",
  },
  {
    num: 3,
    name: "SBAR Patient Handoff Sheet",
    howToUse:
      "One per patient per shift. Fill in during your shift, use during bedside report. The SBAR format ensures you never miss critical handoff info. Print extras - you'll need multiple per shift.",
  },
  {
    num: 4,
    name: "Hourly Medication & Task Timeline",
    howToUse:
      "Start each shift by filling in patient info. Check off meds, vitals, and tasks as you complete them. Use the Details column for specifics. Great for orientation or high-acuity patients.",
  },
  {
    num: 5,
    name: "Daily Fatigue & Self-Care Tracker",
    howToUse:
      "Rate fatigue after each shift (1-10). Track sleep, caffeine, and mood weekly. Use the self-care checklist daily. Patterns will emerge - use them to adjust your routine.",
  },
  {
    num: 6,
    name: "Post-Shift Sleep Recovery Checklist",
    howToUse:
      "Follow the wind-down steps chronologically after each night shift. Use the Recovery Day Planner on your off days. Audit your sleep environment weekly.",
  },
  {
    num: 7,
    name: "Night Shift Tips & Self-Care Prompts",
    howToUse:
      "Reference page. Keep visible (fridge, locker, or desk). Use snack ideas for meal prep. Monitor burnout signs monthly. Share coping strategies with your team.",
  },
  {
    num: 8,
    name: "How to Use (This Page)",
    howToUse:
      "You're reading it! Remove this page once you're familiar with the bundle. Or keep it as a reference.",
  },
];

const tips = [
  "Print on cardstock for durability (especially the handoff sheets).",
  "Use a clipboard with storage to carry your active sheets during shift.",
  "Laminate the scheduler and tips page for reuse with dry-erase markers.",
  "Store completed trackers in a binder to spot long-term patterns.",
  "Share with your unit - night shift teams benefit from consistent tools.",
  "Use on a tablet with a stylus for a paperless option (iPad + GoodNotes works well).",
];

export default function HowToUsePage() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      {/* Header */}
      <View style={{ marginBottom: 12 }}>
        <Text style={sharedStyles.headerBadge}>Getting Started</Text>
        <Text style={[sharedStyles.pageTitle, { marginTop: 8 }]}>
          How to Use This Bundle
        </Text>
        <Text style={sharedStyles.pageSubtitle}>
          8 pages designed to work together for your night shift survival.
        </Text>
      </View>

      {/* Page guide */}
      {pages.map((page) => (
        <View
          key={page.num}
          style={{
            flexDirection: "row",
            marginBottom: 7,
            gap: 8,
          }}
        >
          <View
            style={{
              width: 28,
              height: 28,
              borderRadius: 14,
              backgroundColor: colors.tealPale,
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Helvetica-Bold",
                color: colors.teal,
              }}
            >
              {page.num}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 9,
                fontFamily: "Helvetica-Bold",
                color: colors.deepNavy,
                marginBottom: 2,
              }}
            >
              {page.name}
            </Text>
            <Text style={{ fontSize: 7.5, color: colors.textMid, lineHeight: 1.4 }}>
              {page.howToUse}
            </Text>
          </View>
        </View>
      ))}

      {/* Pro Tips */}
      <View style={{ marginTop: 8 }}>
        <Text style={sharedStyles.sectionTitle}>Pro Tips</Text>
        <View
          style={{
            backgroundColor: colors.ice,
            padding: "8 10",
            borderRadius: 4,
          }}
        >
          {tips.map((tip, i) => (
            <View
              key={tip}
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 8,
                  fontFamily: "Helvetica-Bold",
                  color: colors.ocean,
                  marginRight: 6,
                  width: 12,
                }}
              >
                {i + 1}.
              </Text>
              <Text
                style={{
                  fontSize: 8,
                  color: colors.textDark,
                  flex: 1,
                  lineHeight: 1.4,
                }}
              >
                {tip}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Thank you note */}
      <View
        style={{
          marginTop: 12,
          padding: "10 14",
          backgroundColor: colors.tealPale,
          borderRadius: 4,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Helvetica-Bold",
            color: colors.teal,
            marginBottom: 4,
          }}
        >
          Thank You for Choosing This Bundle
        </Text>
        <Text
          style={{
            fontSize: 8,
            color: colors.textMid,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Built with real shift life in mind. Stay safe, stay organized, and
          take care of yourself as well as you take care of your patients.
        </Text>
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
