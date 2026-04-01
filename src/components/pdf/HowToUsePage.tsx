import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const pages = [
  {
    n: 1,
    name: "Cover Page",
    icon: "\u{1F319}",
    d: "Your bundle cover. Laminate or use a binder cover for durability.",
    tip: "",
  },
  {
    n: 2,
    name: "Shift Scheduler",
    icon: "\u{1F4C5}",
    d: "Fill in at start of each month. Use D/N/OFF codes. Track 2-3 week rotations.",
    tip: "Plan recovery days between night blocks",
  },
  {
    n: 3,
    name: "SBAR Handoff Sheet",
    icon: "\u{1F4CB}",
    d: "One per patient per shift. Full SBAR with vitals trend, system cues, and shift-end checklist.",
    tip: "Print 5+ per shift for your patient load",
  },
  {
    n: 4,
    name: "Med & Task Timeline",
    icon: "\u{1F48A}",
    d: "1900-0700 in 30-min slots. Track meds, pain reassessment, I&O, rounds, and charting.",
    tip: "Cluster care during peak fatigue (0200-0400)",
  },
  {
    n: 5,
    name: "Fatigue & Self-Care Tracker",
    icon: "\u{1F9EC}",
    d: "Rate fatigue 1-10 per shift. Log triggers, actions taken. Track weekly patterns.",
    tip: "Track patterns to fight burnout",
  },
  {
    n: 6,
    name: "Sleep Recovery Checklist",
    icon: "\u{1F634}",
    d: "Evidence-based wind-down, blackout setup, nutrition, recovery day planner, sleep log.",
    tip: "Prioritize sleep to reset circadian rhythm",
  },
  {
    n: 7,
    name: "Tips & Nurse Brain",
    icon: "\u{1F4A1}",
    d: "Nutrition guide, system assessment cues, vitals reference, burnout prevention.",
    tip: "Keep visible on your clipboard or locker",
  },
  {
    n: 8,
    name: "How to Use (This Page)",
    icon: "\u{1F4D6}",
    d: "You're reading it! Remove once familiar, or keep as a quick reference.",
    tip: "",
  },
];

const proTips = [
  { tip: "Print on cardstock for durability", detail: "Especially the SBAR handoff sheets \u2014 they take a beating during 12-hr shifts" },
  { tip: "Use a clipboard with storage", detail: "Keeps your active sheets organized and accessible during rounds" },
  { tip: "Laminate the scheduler + tips page", detail: "Use dry-erase markers so you can reuse month to month" },
  { tip: "Store completed trackers in a binder", detail: "Spot long-term fatigue patterns and share with your manager if needed" },
  { tip: "Share with your night shift team", detail: "Consistent tools = better handoffs and fewer missed details" },
  { tip: "Use on a tablet for paperless option", detail: "iPad + GoodNotes or Notability works well with a stylus" },
  { tip: "Print multiple SBAR sheets per shift", detail: "You'll need one per patient. Keep extras in your clipboard" },
  { tip: "Color-code by shift type", detail: "Blue for nights, green for days. Makes it easy to flip through" },
];

export default function HowToUsePage() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Getting Started</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>
            {"\u{1F4D6}"} How to Use This Bundle
          </Text>
          <Text style={sharedStyles.pageSubtitle}>
            8 pages designed to work together as your night shift survival system.
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
            marginBottom: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 8, marginRight: 4 }}>{"\u{1F4A1}"}</Text>
          <Text style={{ fontSize: 5, color: colors.teal, fontFamily: "Helvetica-Bold" }}>
            Each page has a filled sample example showing exactly how to use it. Follow the sample, then make it your own.
          </Text>
        </View>

        {/* Page guide */}
        {pages.map((p) => (
          <View
            key={p.n}
            style={{
              flexDirection: "row",
              marginBottom: 3,
              gap: 5,
              paddingTop: 3,
              paddingBottom: 3,
              paddingLeft: 5,
              paddingRight: 5,
              borderRadius: 2,
              backgroundColor: p.n % 2 === 0 ? colors.offWhite : colors.white,
              borderWidth: 0.5,
              borderColor: colors.lightGray,
            }}
          >
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: colors.tealPale,
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", color: colors.teal }}>
                {p.n}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 0.5 }}>
                <Text style={{ fontSize: 7, marginRight: 3 }}>{p.icon}</Text>
                <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.deepNavy }}>
                  {p.name}
                </Text>
              </View>
              <Text style={{ fontSize: 5, color: colors.textMid, lineHeight: 1.2 }}>{p.d}</Text>
              {p.tip && (
                <Text style={{ fontSize: 4, color: colors.teal, fontFamily: "Helvetica-Bold", marginTop: 0.5 }}>
                  {"\u2713"} {p.tip}
                </Text>
              )}
            </View>
          </View>
        ))}

        {/* Pro Tips */}
        <View style={{ marginTop: 5 }}>
          <Text style={sharedStyles.sectionTitle}>
            {"\u2B50"} Pro Tips for Getting the Most Out of This Bundle
          </Text>
          <View
            style={{
              backgroundColor: colors.ice,
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 6,
              paddingRight: 6,
              borderRadius: 2,
              borderWidth: 0.5,
              borderColor: colors.tealPale,
            }}
          >
            {proTips.map((t, i) => (
              <View key={t.tip} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 2 }}>
                <Text
                  style={{
                    fontSize: 5,
                    fontFamily: "Helvetica-Bold",
                    color: colors.ocean,
                    marginRight: 4,
                    width: 10,
                  }}
                >
                  {i + 1}.
                </Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 5, color: colors.textDark, fontFamily: "Helvetica-Bold", lineHeight: 1.2 }}>
                    {t.tip}
                  </Text>
                  <Text style={{ fontSize: 4, color: colors.textLight, fontFamily: "Helvetica-Oblique" }}>
                    {t.detail}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Thank you note */}
        <View
          style={{
            marginTop: 5,
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
          <Text
            style={{
              fontSize: 9,
              fontFamily: "Helvetica-Bold",
              color: colors.teal,
              marginBottom: 2,
            }}
          >
            {"\u263E"} Thank You for Choosing This Bundle
          </Text>
          <Text
            style={{
              fontSize: 5,
              color: colors.textMid,
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            Built with real shift life in mind by someone who understands what 12-hour nights feel like.
            Stay safe, stay organized, and take care of yourself as well as you take care of your patients.
          </Text>
          <Text
            style={{
              fontSize: 5,
              color: colors.teal,
              fontFamily: "Helvetica-Bold",
              textAlign: "center",
              marginTop: 3,
            }}
          >
            You have got this. {"\u2764"}
          </Text>
        </View>
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>{"\u263E"} 2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 8 of 8</Text>
      </View>
    </Page>
  );
}
