import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const sw = [["N","N","N","OFF","OFF","N","N"],["N","OFF","OFF","N","N","N","OFF"],["OFF","OFF","N","N","OFF","OFF","OFF"]];
const sc: Record<string,string> = { N: colors.midnight, D: colors.ocean, OFF: colors.softGreen, C: colors.warmOrange };

export default function ShiftScheduler() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={sharedStyles.pageHeader}>
        <Text style={sharedStyles.headerBadge}>{"\u{1F4C5}"} Shift Planning</Text>
        <Text style={[sharedStyles.pageTitle, { marginTop: 8 }]}>Rotating Shift Scheduler</Text>
        <Text style={sharedStyles.pageSubtitle}>Plan your 2-3 week night shift rotation. Mark D (Day), N (Night), OFF, or C (Call).</Text>
      </View>
      <View style={sharedStyles.tip}>
        <Text style={{ fontSize: 6, marginRight: 3 }}>{"\u{1F4A1}"}</Text>
        <Text style={sharedStyles.tipText}>Plan recovery days between night blocks. Limit consecutive nights to 3-4 to protect sleep health.</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 8, marginBottom: 4 }}>
        {[{l:"Month",s:"April 2026"},{l:"Year",s:"2026"},{l:"Name",s:"J. Rodriguez, RN"}].map((f) => (
          <View key={f.l} style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginRight: 2 }}>{f.l}:</Text>
            <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{f.s}</Text></View>
          </View>
        ))}
      </View>
      <View style={{ flexDirection: "row", gap: 10, marginBottom: 4, paddingTop: 3, paddingBottom: 3, paddingLeft: 6, paddingRight: 6, backgroundColor: colors.ice, borderRadius: 2, borderWidth: 0.5, borderColor: colors.tealPale }}>
        {[{l:"N = Night",c:colors.midnight},{l:"D = Day",c:colors.ocean},{l:"OFF",c:colors.softGreen},{l:"C = Call",c:colors.warmOrange}].map((i) => (
          <View key={i.l} style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ width: 7, height: 7, borderRadius: 1.5, backgroundColor: i.c, marginRight: 3 }} />
            <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.textMid }}>{i.l}</Text>
          </View>
        ))}
      </View>
      {Array.from({length:3},(_,w)=>(
        <View key={w} style={{ marginBottom: 4 }}>
          <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal, marginBottom: 1 }}>WEEK {w+1}</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: 18 }}>
              <View style={{ height: 12, marginBottom: 0.5 }}><Text style={{ fontSize: 3, color: "transparent" }}>.</Text></View>
              {days.map((d)=>(<View key={d} style={{ height: 16, justifyContent: "center", marginBottom: 0.5 }}><Text style={{ fontSize: 4, fontFamily: "Helvetica-Bold", color: colors.textLight }}>{d}</Text></View>))}
            </View>
            <View style={{ flex: 1, flexDirection: "row", gap: 0.5 }}>
              {Array.from({length:7},(_,di)=>{
                const n=w*7+di+1; const sv=sw[w][di];
                return (<View key={di} style={{ flex: 1 }}>
                  <View style={{ height: 12, backgroundColor: colors.tealPale, justifyContent: "center", alignItems: "center", borderRadius: 1.5, marginBottom: 0.5 }}>
                    <Text style={{ fontSize: 5, fontFamily: "Helvetica-Bold", color: colors.teal }}>{n<=21?n:""}</Text>
                  </View>
                  {days.map((_,dIdx)=>(
                    <View key={dIdx} style={{ height: 16, borderWidth: 0.5, borderColor: colors.tealPale, justifyContent: "center", alignItems: "center", marginBottom: 0.5, borderRadius: 1, backgroundColor: dIdx===0&&sv?(sc[sv]||colors.white)+"18":undefined }}>
                      {dIdx===0&&sv&&n<=21?(<Text style={{ fontSize: 6, fontFamily: "Helvetica-Bold", color: sc[sv]||colors.textMid }}>{sv}</Text>):(<Text style={{ fontSize: 6, color: "transparent" }}>.</Text>)}
                    </View>
                  ))}
                </View>);
              })}
            </View>
          </View>
        </View>
      ))}
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 3 }}>
        <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: colors.midnight, marginRight: 2 }} />
        <Text style={{ fontSize: 4, color: colors.sampleText, fontFamily: "Helvetica-Oblique" }}>Sample: 3N/2OFF/2N pattern. Adjust to your unit schedule.</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 6 }}>
        <View style={{ flex: 1 }}><Text style={sharedStyles.sectionTitle}>Notes</Text>{Array.from({length:3},(_,i)=>(<View key={i} style={sharedStyles.lineSpacious} />))}</View>
        <View style={{ flex: 1 }}>
          <Text style={sharedStyles.sectionTitle}>Rotation Tips</Text>
          {["Max 3-4 consecutive nights","Schedule OFF after last night","Block sleep time on calendar","Meal prep before night block"].map((t)=>(
            <View key={t} style={{ flexDirection: "row", alignItems: "center", marginBottom: 1.5 }}><View style={{...sharedStyles.checkbox,width:5,height:5,marginRight:2}} /><Text style={{ fontSize: 4.5, color: colors.textDark }}>{t}</Text></View>
          ))}
        </View>
      </View>
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>{"\u263E"} 2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 2 of 8</Text>
      </View>
    </Page>
  );
}
