import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const pages = [
  { n: 1, name: "Cover Page", d: "Bundle cover. Laminate for durability." },
  { n: 2, name: "Shift Scheduler", d: "Plan 2-3 week rotation. D/N/OFF codes." },
  { n: 3, name: "SBAR Handoff Sheet", d: "Full SBAR with vitals, labs, concerns. One per patient." },
  { n: 4, name: "Med & Task Timeline", d: "1900-0700 with meds, pain reassess, I&O, rounds." },
  { n: 5, name: "Fatigue & Self-Care", d: "Rate fatigue 1-10. Log triggers, actions, sleep, mood." },
  { n: 6, name: "Sleep Recovery", d: "Wind-down, blackout, blue-light, recovery day planner." },
  { n: 7, name: "Tips & Nurse Brain", d: "Nutrition, system cues, vitals reference, burnout prevention." },
  { n: 8, name: "How to Use (This)", d: "Remove once familiar, or keep as reference." },
];

const tips = [
  "Print on cardstock for durability (especially handoff sheets).",
  "Use a clipboard with storage to carry active sheets.",
  "Laminate scheduler + tips for dry-erase reuse.",
  "Store completed trackers in a binder to spot patterns.",
  "Share with your night shift team for consistent tools.",
  "Use on tablet + stylus for paperless (iPad + GoodNotes).",
];

export default function HowToUsePage() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={sharedStyles.pageHeader}>
        <Text style={sharedStyles.headerBadge}>Getting Started</Text>
        <Text style={[sharedStyles.pageTitle, { marginTop: 5 }]}>{"\u{1F4D6}"} How to Use This Bundle</Text>
        <Text style={sharedStyles.pageSubtitle}>8 pages designed as your night shift survival system. Each has a filled sample showing how to use it.</Text>
      </View>

      <View style={sharedStyles.tip}>
        <Text style={{ fontSize: 6, marginRight: 3 }}>{"\u{1F4A1}"}</Text>
        <Text style={sharedStyles.tipText}>Follow the blue sample entries on each page, then fill in your own data. Your patterns will emerge within 1-2 weeks.</Text>
      </View>

      {pages.map((p) => (
        <View key={p.n} style={{ flexDirection: "row", marginBottom: 2, gap: 4, paddingTop: 2, paddingBottom: 2, paddingLeft: 4, paddingRight: 4, borderRadius: 2, backgroundColor: p.n % 2 === 0 ? colors.offWhite : colors.white, borderWidth: 0.5, borderColor: colors.lightGray }}>
          <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: colors.tealPale, justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
            <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: colors.teal }}>{p.n}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.deepNavy, marginBottom: 0.5 }}>{p.name}</Text>
            <Text style={{ fontSize: 4.5, color: colors.textMid, lineHeight: 1.2 }}>{p.d}</Text>
          </View>
        </View>
      ))}

      <View style={{ marginTop: 4 }}>
        <Text style={sharedStyles.sectionTitle}>Pro Tips</Text>
        <View style={{ backgroundColor: colors.ice, paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5, borderRadius: 2, borderWidth: 0.5, borderColor: colors.tealPale }}>
          {tips.map((t, i) => (
            <View key={t} style={{ flexDirection: "row", marginBottom: 1.5 }}>
              <Text style={{ fontSize: 4.5, fontFamily: "Helvetica-Bold", color: colors.ocean, marginRight: 3, width: 8 }}>{i + 1}.</Text>
              <Text style={{ fontSize: 4.5, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{t}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={{ marginTop: 4, paddingTop: 5, paddingBottom: 5, paddingLeft: 8, paddingRight: 8, backgroundColor: colors.tealPale, borderRadius: 2, alignItems: "center", borderWidth: 0.5, borderColor: colors.tealMuted }}>
        <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>{"\u263E"} Thank You for Choosing This Bundle</Text>
        <Text style={{ fontSize: 5, color: colors.textMid, textAlign: "center", lineHeight: 1.4 }}>Built with real shift life in mind. Stay safe, stay organized, and take care of yourself.</Text>
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>{"\u263E"} 2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 8 of 8</Text>
      </View>
    </Page>
  );
}
