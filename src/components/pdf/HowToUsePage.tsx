import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const pages = [
  {
    num: 1,
    name: "Cover Page",
    icon: "\u{1F319}",
    howToUse:
      "Your bundle cover. Keeps everything together when printed. Consider laminating or using a binder cover.",
  },
  {
    num: 2,
    name: "Rotating Shift Scheduler",
    icon: "\u{1F4C5}",
    howToUse:
      "Fill in at the start of each month. Use D/N/OFF codes. Track your 2-4 week rotation. Pin to your fridge or keep in your work bag.",
  },
  {
    num: 3,
    name: "SBAR Patient Handoff Sheet",
    icon: "\u{1F4CB}",
    howToUse:
      "One per patient per shift. Fill in during your shift, use during bedside report. Print extras \u2014 you'll need multiple per shift.",
  },
  {
    num: 4,
    name: "Hourly Medication & Task Timeline",
    icon: "\u{1F48A}",
    howToUse:
      "Start each shift by filling in patient info. Check off meds, vitals, and tasks. Use the Details column for specifics.",
  },
  {
    num: 5,
    name: "Daily Fatigue & Self-Care Tracker",
    icon: "\u{1F9EC}",
    howToUse:
      "Rate fatigue after each shift (1-10). Track sleep, caffeine, and mood weekly. Use the self-care checklist daily.",
  },
  {
    num: 6,
    name: "Post-Shift Sleep Recovery Checklist",
    icon: "\u{1F634}",
    howToUse:
      "Follow the wind-down steps after each night shift. Use the Recovery Day Planner on your off days.",
  },
  {
    num: 7,
    name: "Night Shift Tips & Self-Care Prompts",
    icon: "\u{1F4A1}",
    howToUse:
      "Reference page. Keep visible (fridge, locker, or desk). Use snack ideas for meal prep. Monitor burnout signs monthly.",
  },
  {
    num: 8,
    name: "How to Use (This Page)",
    icon: "\u{1F4D6}",
    howToUse:
      "You're reading it! Remove this page once you're familiar with the bundle. Or keep it as a reference.",
  },
];

const tips = [
  "Print on cardstock for durability (especially the handoff sheets).",
  "Use a clipboard with storage to carry your active sheets during shift.",
  "Laminate the scheduler and tips page for reuse with dry-erase markers.",
  "Store completed trackers in a binder to spot long-term patterns.",
  "Share with your unit \u2014 night shift teams benefit from consistent tools.",
  "Use on a tablet with a stylus for a paperless option (iPad + GoodNotes works well).",
];

export default function HowToUsePage() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      {/* Header */}
      <View style={sharedStyles.pageHeader}>
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
            marginBottom: 5,
            gap: 8,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 8,
            paddingRight: 8,
            borderRadius: 4,
            backgroundColor: page.num % 2 === 0 ? colors.offWhite : colors.white,
          }}
        >
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: colors.tealPale,
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                fontFamily: "Helvetica-Bold",
                color: colors.teal,
              }}
            >
              {page.num}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 1 }}>
              <Text style={{ fontSize: 8, marginRight: 4 }}>{page.icon}</Text>
              <Text
                style={{
                  fontSize: 9,
                  fontFamily: "Helvetica-Bold",
                  color: colors.deepNavy,
                }}
              >
                {page.name}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 7,
                color: colors.textMid,
                lineHeight: 1.4,
              }}
            >
              {page.howToUse}
            </Text>
          </View>
        </View>
      ))}

      {/* Pro Tips */}
      <View style={{ marginTop: 6 }}>
        <Text style={sharedStyles.sectionTitle}>
          {"\u{1F4A1}"} Pro Tips
        </Text>
        <View
          style={{
            backgroundColor: colors.ice,
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: colors.tealPale,
          }}
        >
          {tips.map((tip, i) => (
            <View
              key={tip}
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 3,
              }}
            >
              <Text
                style={{
                  fontSize: 7,
                  fontFamily: "Helvetica-Bold",
                  color: colors.ocean,
                  marginRight: 5,
                  width: 10,
                }}
              >
                {i + 1}.
              </Text>
              <Text
                style={{
                  fontSize: 7,
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
          marginTop: 8,
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 12,
          paddingRight: 12,
          backgroundColor: colors.tealPale,
          borderRadius: 4,
          alignItems: "center",
          borderWidth: 0.5,
          borderColor: colors.tealMuted,
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontFamily: "Helvetica-Bold",
            color: colors.teal,
            marginBottom: 3,
          }}
        >
          Thank You for Choosing This Bundle
        </Text>
        <Text
          style={{
            fontSize: 7,
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
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>
          {"\u263E"} 2026 Night Shift Nurse Survival Bundle
        </Text>
        <Text style={sharedStyles.footerText}>Page 8 of 8</Text>
      </View>
    </Page>
  );
}
