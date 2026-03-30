import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const pages = [
  { num: 1, name: "Cover Page", icon: "\u{1F319}", howToUse: "Your bundle cover. Keeps everything together when printed. Laminate or use a binder cover." },
  { num: 2, name: "Rotating Shift Scheduler", icon: "\u{1F4C5}", howToUse: "Fill in at start of each month. Use D/N/OFF codes. Track your 2-4 week rotation." },
  { num: 3, name: "SBAR Patient Handoff Sheet", icon: "\u{1F4CB}", howToUse: "One per patient per shift. Fill in during shift, use during bedside report. Print extras." },
  { num: 4, name: "Hourly Medication & Task Timeline", icon: "\u{1F48A}", howToUse: "Start each shift by filling in patient info. Check off meds, vitals, and tasks." },
  { num: 5, name: "Daily Fatigue & Self-Care Tracker", icon: "\u{1F9EC}", howToUse: "Rate fatigue after each shift (1-10). Track sleep, caffeine, and mood weekly." },
  { num: 6, name: "Post-Shift Sleep Recovery", icon: "\u{1F634}", howToUse: "Follow wind-down steps after each night shift. Use Recovery Day Planner on off days." },
  { num: 7, name: "Night Shift Tips & Self-Care", icon: "\u{1F4A1}", howToUse: "Reference page. Keep visible. Use snack ideas for meal prep. Monitor burnout signs." },
  { num: 8, name: "How to Use (This Page)", icon: "\u{1F4D6}", howToUse: "You're reading it! Remove once familiar, or keep as a reference." },
];

const tips = [
  "Print on cardstock for durability (especially the handoff sheets).",
  "Use a clipboard with storage to carry active sheets during shift.",
  "Laminate the scheduler and tips page for reuse with dry-erase markers.",
  "Store completed trackers in a binder to spot long-term patterns.",
  "Share with your unit \u2014 night shift teams benefit from consistent tools.",
  "Use on a tablet with a stylus for a paperless option (iPad + GoodNotes).",
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
            marginBottom: 4,
            gap: 6,
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 6,
            paddingRight: 6,
            borderRadius: 3,
            backgroundColor: page.num % 2 === 0 ? colors.offWhite : colors.white,
          }}
        >
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 11,
              backgroundColor: colors.tealPale,
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <Text style={{ fontSize: 10, fontFamily: "Helvetica-Bold", color: colors.teal }}>
              {page.num}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 1 }}>
              <Text style={{ fontSize: 7, marginRight: 3 }}>{page.icon}</Text>
              <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: colors.deepNavy }}>
                {page.name}
              </Text>
            </View>
            <Text style={{ fontSize: 6, color: colors.textMid, lineHeight: 1.3 }}>
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
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 8,
            paddingRight: 8,
            borderRadius: 3,
            borderWidth: 0.5,
            borderColor: colors.tealPale,
          }}
        >
          {tips.map((tip, i) => (
            <View key={tip} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 2 }}>
              <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.ocean, marginRight: 4, width: 9 }}>
                {i + 1}.
              </Text>
              <Text style={{ fontSize: 6, color: colors.textDark, flex: 1, lineHeight: 1.3 }}>
                {tip}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Thank you note */}
      <View
        style={{
          marginTop: 6,
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: colors.tealPale,
          borderRadius: 3,
          alignItems: "center",
          borderWidth: 0.5,
          borderColor: colors.tealMuted,
        }}
      >
        <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>
          Thank You for Choosing This Bundle
        </Text>
        <Text style={{ fontSize: 6, color: colors.textMid, textAlign: "center", lineHeight: 1.4 }}>
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
