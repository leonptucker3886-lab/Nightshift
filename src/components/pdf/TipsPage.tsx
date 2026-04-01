import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const snacks = [
  {t:"Pre-Shift (1800)",d:"Grilled protein + complex carbs + veggies"},
  {t:"Break 1 (~2100)",d:"Greek yogurt + berries, hummus + veggies"},
  {t:"Mid-Shift (~0000)",d:"Trail mix, cheese + crackers, apple + PB"},
  {t:"Break 2 (~0300)",d:"Hard-boiled egg, banana, handful of almonds"},
  {t:"Post-Shift (~0730)",d:"Oatmeal, toast + avocado, or smoothie (light)"},
];
const brain = [
  {s:"Neuro",c:"A&O x__ | Pupils: ___ | Motor: ___ | GCS: ___ | Pain: ___/10"},
  {s:"Cardio",c:"Rhythm: ___ | Rate: ___ | Edema: Y/N | JVD: Y/N | Pulses: ___"},
  {s:"Resp",c:"Lungs: ___ | SpO2: ___% | O2: ___ | IS: ___mL | Cough: ___"},
  {s:"GI/GU",c:"Diet: ___ | Last BM: ___ | UO: ___mL/hr | N/V: Y/N | Abd: ___"},
  {s:"Skin",c:"Integrity: ___ | Wounds: ___ | Braden: ___ | Dressing: ___"},
  {s:"IV/Meds",c:"Access: ___ | Rate: ___ | Due at: ___ | PRN last: ___"},
];
const burn = ["Dreading shifts more than usual","Snapping at colleagues or patients","Cynicism about nursing","Headaches, GI issues, insomnia","Feeling numb during care","Using food/alcohol to cope"];
const cope = [
  {i:"Talk to a trusted colleague or mentor",n:"Verbalizing stress reduces its power"},
  {i:"Use your EAP \u2014 free and confidential",n:"Most facilities offer 6-8 free sessions"},
  {i:"Say no to extra shifts when depleted",n:"You cannot pour from an empty cup"},
  {i:"Journal 5 min post-shift (brain dump)",n:"Gets worries out of your head and on paper"},
  {i:"Reconnect with your why monthly",n:"Read a patient thank-you or remember your first day"},
  {i:"Seek support if symptoms persist 2+ weeks",n:"Burnout is a signal, not a personal failure"},
];

export default function TipsPage() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={sharedStyles.pageHeader}>
        <Text style={sharedStyles.headerBadge}>Quick Reference</Text>
        <Text style={[sharedStyles.pageTitle,{marginTop:5}]}>{"\u{1F4A1}"} Night Shift Tips & Nurse Brain</Text>
        <Text style={sharedStyles.pageSubtitle}>Nutrition, system assessment cues, vitals reference, burnout prevention.</Text>
      </View>
      <View style={sharedStyles.tip}>
        <Text style={{fontSize:6,marginRight:3}}>{"\u{1F319}"}</Text>
        <Text style={sharedStyles.tipText}>Keep this page visible (locker, clipboard, or desk). Quick reference saves time when you are tired at hour 10.</Text>
      </View>
      <Text style={sharedStyles.sectionTitle}>Night Shift Nutrition</Text>
      {snacks.map((s,i)=>(<View key={s.t} style={{flexDirection:"row",marginBottom:0.5,paddingTop:1,paddingBottom:1,paddingLeft:3,paddingRight:3,backgroundColor:i%2===0?colors.offWhite:colors.white,borderRadius:1}}><Text style={{width:72,fontSize:4.5,fontFamily:"Helvetica-Bold",color:colors.teal}}>{s.t}</Text><Text style={{fontSize:4.5,color:colors.textDark,flex:1}}>{s.d}</Text></View>))}
      <View style={{backgroundColor:colors.softGreenPale,borderRadius:1.5,paddingTop:1.5,paddingBottom:1.5,paddingLeft:4,paddingRight:4,marginTop:1,marginBottom:3,borderWidth:0.5,borderColor:colors.softGreenMuted}}><Text style={{fontSize:3.5,color:colors.softGreen,fontFamily:"Helvetica-Bold"}}>Rule: Protein + complex carbs every 3-4 hrs. Avoid sugar after 0300. Caffeine cutoff by 0300 if sleeping at 0900.</Text></View>
      <Text style={sharedStyles.sectionTitle}>System Assessment Cues (Nurse Brain)</Text>
      <View style={{flexDirection:"row",flexWrap:"wrap",gap:2,marginBottom:3}}>
        {brain.map((b)=>(<View key={b.s} style={{width:"32%",backgroundColor:colors.ice,borderRadius:1.5,paddingTop:1.5,paddingBottom:1.5,paddingLeft:3,paddingRight:3,borderWidth:0.5,borderColor:colors.tealPale}}><Text style={{fontSize:4.5,fontFamily:"Helvetica-Bold",color:colors.ocean}}>{b.s}</Text><Text style={{fontSize:3.5,color:colors.textMid,lineHeight:1.2}}>{b.c}</Text></View>))}
      </View>
      <View style={{backgroundColor:colors.ice,borderRadius:1.5,paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,marginBottom:3,borderWidth:0.5,borderColor:colors.tealPale}}>
        <Text style={{fontSize:4.5,fontFamily:"Helvetica-Bold",color:colors.teal,marginBottom:1}}>{"\u{1F4CF}"} Adult Vitals Normal Ranges</Text>
        <View style={{flexDirection:"row",gap:6}}>{[{v:"HR",n:"60-100 bpm"},{v:"BP",n:"90/60-140/90"},{v:"RR",n:"12-20/min"},{v:"SpO2",n:">95% RA"},{v:"Temp",n:"36.1-37.2C"}].map((v)=>(<View key={v.v} style={{flex:1,alignItems:"center"}}><Text style={{fontSize:3.5,fontFamily:"Helvetica-Bold",color:colors.ocean}}>{v.v}</Text><Text style={{fontSize:4.5,color:colors.textDark,fontFamily:"Helvetica-Bold"}}>{v.n}</Text></View>))}</View>
      </View>
      <View style={{flexDirection:"row",gap:5}}>
        <View style={{flex:1}}><Text style={sharedStyles.sectionTitle}>{"\u26A0"} Burnout Warning Signs</Text>
          <View style={{backgroundColor:colors.warmOrangePale,paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,borderRadius:1.5}}>
            {burn.map((s)=>(<View key={s} style={{flexDirection:"row",alignItems:"flex-start",marginBottom:1}}><Text style={{fontSize:3.5,color:colors.coral,marginRight:1}}>{"\u25CF"}</Text><Text style={{fontSize:3.5,color:colors.textDark,flex:1,lineHeight:1.2}}>{s}</Text></View>))}
          </View>
        </View>
        <View style={{flex:1}}><Text style={sharedStyles.sectionTitle}>{"\u2705"} Coping Strategies</Text>
          <View style={{backgroundColor:colors.softGreenPale,paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,borderRadius:1.5}}>
            {cope.map((c)=>(<View key={c.i} style={{marginBottom:1.5}}><View style={{flexDirection:"row",alignItems:"flex-start"}}><View style={{...sharedStyles.checkbox,borderColor:colors.softGreen,width:5,height:5}} /><Text style={{fontSize:3.5,color:colors.textDark,fontFamily:"Helvetica-Bold",flex:1,lineHeight:1.2}}>{c.i}</Text></View><Text style={{fontSize:3,color:colors.textLight,fontFamily:"Helvetica-Oblique",marginLeft:10}}>{c.n}</Text></View>))}
          </View>
        </View>
      </View>
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>{"\u263E"} 2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 7 of 8</Text>
      </View>
    </Page>
  );
}
