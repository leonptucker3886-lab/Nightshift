import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

// Predefined time slots with task categories relevant to night shift
const timeSlots = [
  { time: "1900", label: "Shift Start / Report", tasks: ["SBAR", "Rounds", "", "", ""] },
  { time: "2000", label: "Evening Meds", tasks: ["", "", "I&O", "", ""] },
  { time: "2100", label: "Rounding", tasks: ["", "Pain", "", "", ""] },
  { time: "2200", label: "", tasks: ["", "", "", "", ""] },
  { time: "2300", label: "Midnight Meds", tasks: ["", "", "I&O", "", ""] },
  { time: "0000", label: "Midnight", tasks: ["", "Pain", "Rounds", "", ""] },
  { time: "0100", label: "", tasks: ["", "", "", "", ""] },
  { time: "0200", label: "Rounding", tasks: ["", "", "I&O", "", ""] },
  { time: "0300", label: "", tasks: ["", "Pain", "", "", ""] },
  { time: "0400", label: "AM Meds / Labs", tasks: ["", "", "", "", ""] },
  { time: "0500", label: "Vitals", tasks: ["", "", "I&O", "Rounds", ""] },
  { time: "0600", label: "AM Assess", tasks: ["", "Pain", "", "", ""] },
  { time: "0700", label: "Shift End / Report", tasks: ["SBAR", "", "", "", ""] },
];

const taskCols = ["Med Pass", "Pain Reassess", "I&O", "Rounds", "Other"];

// Column headers for the task tracking grid
const taskCategories = [
  { label: "Med Pass", desc: "Scheduled & PRN meds" },
  { label: "Pain", desc: "Pain reassessment (q2h)" },
  { label: "I&O", desc: "Intake & output" },
  { label: "Rounds", desc: "Safety rounds (q2h)" },
  { label: "Chart", desc: "Charting / Notes" },
];

export default function MedicationTimeline() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={{ flex: 1 }}>
        <View style={sharedStyles.pageHeader}>
          <Text style={sharedStyles.headerBadge}>Medication & Tasks</Text>
          <Text style={[sharedStyles.pageTitle, { marginTop: 6 }]}>Night Shift Task & Med Timeline</Text>
          <Text style={sharedStyles.pageSubtitle}>1900–0700 with checkboxes for meds, pain reassessment, I&O, rounds, and charting.</Text>
        </View>

        {/* Patient info bar */}
        <View style={{ flexDirection: "row", backgroundColor: colors.warmOrangePale, paddingTop: 4, paddingBottom: 4, paddingLeft: 8, paddingRight: 8, borderRadius: 3, marginBottom: 6, gap: 8, borderWidth: 0.5, borderColor: "#F0D9B5" }}>
          {["Patient", "Room", "Dx", "RN"].map((l) => (
            <View key={l} style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.warmOrange, marginRight: 2 }}>{l}:</Text>
              <View style={{ flex: 1, borderBottomWidth: 0.5, borderBottomColor: "#E0C9A0" }}><Text style={{ fontSize: 4, color: "transparent" }}>.</Text></View>
            </View>
          ))}
        </View>

        {/* Task category legend */}
        <View style={{ flexDirection: "row", gap: 6, marginBottom: 6, paddingTop: 3, paddingBottom: 3, paddingLeft: 6, paddingRight: 6, backgroundColor: colors.ice, borderRadius: 2 }}>
          {taskCategories.map((tc) => (
            <View key={tc.label} style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal }}>{tc.label}</Text>
              <Text style={{ fontSize: 4, color: colors.textLight }}>{tc.desc}</Text>
            </View>
          ))}
        </View>

        {/* Table header */}
        <View style={sharedStyles.tableHeader}>
          <Text style={{ width: 36, fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase" }}>Time</Text>
          <Text style={{ width: 60, fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase" }}>Task</Text>
          {taskCols.map((c) => (
            <View key={c} style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 4, fontFamily: "Helvetica-Bold", color: colors.tealLight, textTransform: "uppercase" }}>{c}</Text>
            </View>
          ))}
          <Text style={{ flex: 2, fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.white, textTransform: "uppercase" }}>Details</Text>
        </View>

        {/* Time rows */}
        {timeSlots.map((s, i) => {
          const isKey = s.label.includes("Start") || s.label === "Midnight" || s.label.includes("End");
          const isMeds = s.label.includes("Meds") || s.label.includes("Labs");
          const rs = isKey
            ? { ...sharedStyles.tableRow, backgroundColor: colors.ice, borderLeftWidth: 2, borderLeftColor: colors.ocean, paddingLeft: 4 }
            : isMeds
              ? { ...sharedStyles.tableRow, backgroundColor: colors.warmOrangePale, borderLeftWidth: 2, borderLeftColor: colors.warmOrange, paddingLeft: 4 }
              : i % 2 === 0 ? sharedStyles.tableRow : sharedStyles.tableRowAlt;
          return (
            <View key={s.time} style={rs}>
              <View style={{ width: 36 }}>
                <Text style={{ fontSize: 7, fontFamily: "Helvetica-Bold", color: isKey ? colors.ocean : isMeds ? colors.warmOrange : colors.textDark }}>{s.time}</Text>
                {s.label && <Text style={{ fontSize: 4, color: colors.textLight }}>{s.label}</Text>}
              </View>
              <View style={{ width: 60 }}>
                {s.tasks.filter(Boolean).map((t, ti) => (
                  <Text key={ti} style={{ fontSize: 4, color: colors.textMid, fontFamily: "Helvetica-Bold" }}>{t}</Text>
                ))}
              </View>
              {taskCols.map((c) => (
                <View key={c} style={{ flex: 1, alignItems: "center" }}>
                  <View style={{
                    width: 8, height: 8, borderWidth: 0.5,
                    borderColor: isMeds && c === "Med Pass" ? colors.warmOrange : colors.tealMuted,
                    borderRadius: 1.5,
                  }} />
                </View>
              ))}
              <View style={{ flex: 2, height: 10, borderBottomWidth: 0.5, borderBottomColor: colors.lightGray, marginLeft: 2 }} />
            </View>
          );
        })}

        {/* Key med times + Shift reminders */}
        <View style={{ marginTop: 4, flexDirection: "row", gap: 6 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>Key Med Times</Text>
            {[
              { t: "2000–2200", d: "Evening scheduled" },
              { t: "2300–0100", d: "Midnight pass" },
              { t: "0400–0600", d: "AM pass / labs" },
            ].map((r) => (
              <View key={r.t} style={{ flexDirection: "row", marginBottom: 1 }}>
                <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.warmOrange, width: 55 }}>{r.t}</Text>
                <Text style={{ fontSize: 5, color: colors.textMid }}>{r.d}</Text>
              </View>
            ))}
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 2 }}>Shift Reminders</Text>
            {["Rounding q2h (fall risk)", "Pain reassess q2h post-med", "I&O count q4h", "Daily weight 0600", "Skin check q shift"].map((r) => (
              <View key={r} style={{ flexDirection: "row", alignItems: "center", marginBottom: 1 }}>
                <View style={{ ...sharedStyles.checkbox, width: 6, height: 6, marginRight: 2 }} />
                <Text style={{ fontSize: 4, color: colors.textDark }}>{r}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 4 of 8</Text>
      </View>
    </Page>
  );
}
