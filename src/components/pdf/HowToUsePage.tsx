import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const pages = [
  { n: 1, name: "Cover Page", d: "Your bundle cover. Laminate or use a binder cover." },
  { n: 2, name: "Shift Scheduler", d: "Fill in at start of each month. Use D/N/OFF codes." },
  { n: 3, name: "SBAR Handoff Sheet", d: "One per patient per shift. Print extras." },
  { n: 4, name: "Medication Timeline", d: "Check off meds, vitals, and tasks each shift." },
  { n: 5, name: "Fatigue & Self-Care Tracker", d: "Rate fatigue 1-10. Track sleep, caffeine, mood." },
  { n: 6, name: "Sleep Recovery Checklist", d: "Follow wind-down steps. Use recovery planner." },
  { n: 7, name: "Tips & Self-Care", d: "Reference page. Snack ideas, burnout prevention." },
  { n: 8, name: "How to Use (This Page)", d: "Remove once familiar, or keep as reference." },
];

const tips = [
  "Print on cardstock for durability.",
  "Use a clipboard with storage during shift.",
  "Laminate scheduler + tips for dry-erase reuse.",
  "Store trackers in a binder to spot patterns.",
  "Share with your unit \u2014 consistent tools help teams.",
  "Use on tablet + stylus for paperless (iPad + GoodNotes).",
];

export default function HowToUsePage() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Getting Started</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>How to Use This Bundle</Text>
          <Text style={sharedStyles.pageSubtitle}>8 pages designed to work together for your night shift survival.</Text>
        </View>

        {pages.map((p) => (
          <View key={p.n} style={{ flexDirection: "row", marginBottom: 3, gap: 5, paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5, borderRadius: 2, backgroundColor: p.n % 2 === 0 ? colors.offWhite : colors.white }}>
            <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: colors.tealPale, justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
              <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: colors.teal }}>{p.n}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: colors.deepNavy, marginBottom: 0.5 }}>{p.name}</Text>
              <Text style={{ fontSize: 5, color: colors.textMid, lineHeight: 1.2 }}>{p.d}</Text>
            </View>
          </View>
        ))}

        <Text style={sharedStyles.sectionTitle}>Pro Tips</Text>
        <View style={{ backgroundColor: colors.ice, paddingTop: 4, paddingBottom: 4, paddingLeft: 6, paddingRight: 6, borderRadius: 2, borderWidth: 0.5, borderColor: colors.tealPale }}>
          {tips.map((t, i) => (
            <View key={t} style={{ flexDirection: "row", marginBottom: 1.5 }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.ocean, marginRight: 3, width: 8 }}>{i + 1}.</Text>
              <Text style={{ fontSize: 5, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{t}</Text>
            </View>
          ))}
        </View>

        <View style={{ marginTop: 6, paddingTop: 6, paddingBottom: 6, paddingLeft: 8, paddingRight: 8, backgroundColor: colors.tealPale, borderRadius: 2, alignItems: "center" }}>
          <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>Thank You for Choosing This Bundle</Text>
          <Text style={{ fontSize: 5, color: colors.textMid, textAlign: "center", lineHeight: 1.3 }}>Built with real shift life in mind. Stay safe, stay organized.</Text>
        </View>
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 8 of 8</Text>
      </View>
    </Page>
  );
}
