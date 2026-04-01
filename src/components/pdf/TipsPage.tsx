import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const snacks = [
  { t: "Pre-Shift (1800)", d: "Grilled chicken, brown rice, roasted veggies" },
  { t: "Break 1 (~2100)", d: "Greek yogurt + berries, or hummus + veggies" },
  { t: "Mid-Shift (~0000)", d: "Trail mix, cheese + crackers, apple + PB" },
  { t: "Break 2 (~0300)", d: "Hard-boiled egg, banana, handful of almonds" },
  { t: "Post-Shift (~0730)", d: "Oatmeal, toast + avocado, or smoothie (light)" },
];

const brainRef = [
  { sys: "Neuro", cues: "A&O x__ | Pupils: ___ | Motor: ___ | GCS: ___ | Pain: ___/10" },
  { sys: "Cardio", cues: "Rhythm: ___ | Rate: ___ | Edema: Y/N | JVD: Y/N | Pulses: ___" },
  { sys: "Resp", cues: "Lungs: ___ | SpO2: ___% | O2: ___ | IS: ___mL | Cough: ___" },
  { sys: "GI/GU", cues: "Diet: ___ | Last BM: ___ | UO: ___mL/hr | N/V: Y/N | Abd: ___" },
  { sys: "Skin", cues: "Integrity: ___ | Wounds: ___ | Braden: ___ | Dressing: ___" },
  { sys: "IV/Meds", cues: "Access: ___ | Rate: ___ | Due at: ___ | PRN last: ___" },
];

const vitalsNorm = [
  { v: "HR", n: "60–100 bpm" },
  { v: "BP", n: "90/60–140/90" },
  { v: "RR", n: "12–20 /min" },
  { v: "SpO2", n: ">95% on RA" },
  { v: "Temp", n: "36.1–37.2C" },
  { v: "Pain", n: "0–10 scale" },
];

const burnout = [
  "Dreading shifts more than usual",
  "Snapping at colleagues or patients",
  "Cynicism about nursing profession",
  "Headaches, GI issues, insomnia on off-days",
  "Feeling numb or detached during care",
  "Using food/alcohol to cope more than usual",
];

const coping = [
  { item: "Talk to a trusted colleague or mentor", note: "Verbalizing stress reduces its power" },
  { item: "Use your EAP \u2014 it's free and confidential", note: "Most facilities offer 6-8 free sessions" },
  { item: "Say no to extra shifts when depleted", note: "You can't pour from an empty cup" },
  { item: "Journal 5 min post-shift (brain dump)", note: "Gets worries out of your head and on paper" },
  { item: "Reconnect with your 'why' monthly", note: "Read a patient thank-you or remember your first day" },
  { item: "Seek support if symptoms persist >2 weeks", note: "Burnout is not a personal failure \u2014 it's a signal" },
];

export default function TipsPage() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Quick Reference</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>
            {"\u{1F4A1}"} Night Shift Tips & Nurse Brain
          </Text>
          <Text style={sharedStyles.pageSubtitle}>
            Nutrition guide, system assessment cues, vitals reference, and burnout prevention.
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
          <Text style={{ fontSize: 8, marginRight: 4 }}>{"\u{1F319}"}</Text>
          <Text style={{ fontSize: 5, color: colors.teal, fontFamily: "Helvetica-Bold" }}>
            Keep this page visible (locker, clipboard, or desk). Quick reference saves time when you are tired at hour 10.
          </Text>
        </View>

        {/* Night Shift Nutrition */}
        <Text style={sharedStyles.sectionTitle}>Night Shift Nutrition Guide</Text>
        {snacks.map((s, i) => (
          <View
            key={s.t}
            style={{
              flexDirection: "row",
              marginBottom: 1,
              paddingTop: 1.5,
              paddingBottom: 1.5,
              paddingLeft: 4,
              paddingRight: 4,
              backgroundColor: i % 2 === 0 ? colors.offWhite : colors.white,
              borderRadius: 1,
            }}
          >
            <Text style={{ width: 85, fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal }}>
              {s.t}
            </Text>
            <Text style={{ fontSize: 5, color: colors.textDark, flex: 1 }}>{s.d}</Text>
          </View>
        ))}
        <View
          style={{
            backgroundColor: colors.softGreenPale,
            borderRadius: 2,
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 5,
            paddingRight: 5,
            marginTop: 1,
            marginBottom: 4,
            borderWidth: 0.5,
            borderColor: colors.softGreenMuted,
          }}
        >
          <Text style={{ fontSize: 4, color: colors.softGreen, fontFamily: "Helvetica-Bold" }}>
            Rule: Protein + complex carbs every 3–4 hrs. Avoid sugar spikes after 0300. Caffeine cutoff by 0300 if sleeping at 0900.
          </Text>
        </View>

        {/* Nurse Brain Quick Reference */}
        <Text style={sharedStyles.sectionTitle}>
          System Assessment Cues (Nurse Brain)
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 3, marginBottom: 4 }}>
          {brainRef.map((b) => (
            <View
              key={b.sys}
              style={{
                width: "32%",
                backgroundColor: colors.ice,
                borderRadius: 2,
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 4,
                paddingRight: 4,
                borderWidth: 0.5,
                borderColor: colors.tealPale,
              }}
            >
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.ocean }}>
                {b.sys}
              </Text>
              <Text style={{ fontSize: 4, color: colors.textMid, lineHeight: 1.2 }}>{b.cues}</Text>
            </View>
          ))}
        </View>

        {/* Vitals Normal Ranges */}
        <View
          style={{
            backgroundColor: colors.ice,
            borderRadius: 2,
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 5,
            paddingRight: 5,
            marginBottom: 4,
            borderWidth: 0.5,
            borderColor: colors.tealPale,
          }}
        >
          <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>
            {"\u{1F4CF}"} Adult Vitals Normal Ranges
          </Text>
          <View style={{ flexDirection: "row", gap: 6 }}>
            {vitalsNorm.map((v) => (
              <View key={v.v} style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 4, fontFamily: "Helvetica-Bold", color: colors.ocean }}>{v.v}</Text>
                <Text style={{ fontSize: 5, color: colors.textDark, fontFamily: "Helvetica-Bold" }}>{v.n}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Burnout Warning Signs */}
        <Text style={sharedStyles.sectionTitle}>
          {"\u26A0"} Burnout Warning Signs
        </Text>
        <View
          style={{
            backgroundColor: colors.warmOrangePale,
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 5,
            paddingRight: 5,
            borderRadius: 2,
            marginBottom: 4,
          }}
        >
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 2 }}>
            {burnout.map((s) => (
              <View key={s} style={{ flexDirection: "row", width: "48%", marginBottom: 1 }}>
                <Text style={{ fontSize: 4, color: colors.coral, marginRight: 1 }}>{"\u25CF"}</Text>
                <Text style={{ fontSize: 4, color: colors.textDark, flex: 1, lineHeight: 1.2 }}>{s}</Text>
              </View>
            ))}
          </View>
          <View
            style={{
              backgroundColor: colors.white,
              borderRadius: 2,
              paddingTop: 2,
              paddingBottom: 2,
              paddingLeft: 4,
              paddingRight: 4,
              marginTop: 2,
              borderWidth: 0.5,
              borderColor: "#F0D9B5",
            }}
          >
            <Text style={{ fontSize: 4, color: colors.coral, fontFamily: "Helvetica-Bold" }}>
              If 3+ signs persist more than 2 weeks, talk to your manager or EAP. You deserve support.
            </Text>
          </View>
        </View>

        {/* Coping Strategies */}
        <Text style={sharedStyles.sectionTitle}>
          {"\u2705"} Coping Strategies
        </Text>
        <View
          style={{
            backgroundColor: colors.softGreenPale,
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 5,
            paddingRight: 5,
            borderRadius: 2,
          }}
        >
          {coping.map((s) => (
            <View key={s.item} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 2 }}>
              <View style={{ ...sharedStyles.checkbox, borderColor: colors.softGreen, width: 6, height: 6 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 5, color: colors.textDark, fontFamily: "Helvetica-Bold", lineHeight: 1.2 }}>
                  {s.item}
                </Text>
                <Text style={{ fontSize: 4, color: colors.textLight, fontFamily: "Helvetica-Oblique" }}>
                  {s.note}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>{"\u263E"} 2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 7 of 8</Text>
      </View>
    </Page>
  );
}
