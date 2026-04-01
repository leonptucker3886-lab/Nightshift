import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const slots = [
  {t:"1900",l:"Shift Start",p:"Receive report / SBAR",s:"",n:"",g:false,c:false,k:true},
  {t:"1930",l:"",p:"Rounding \u2014 assess pain",s:"All 5 patients rounded. Rm 415-B pain 6/10.",n:"Torres requesting pain med",g:true,c:true},
  {t:"2000",l:"Evening Meds",p:"Scheduled meds + PRN pain",s:"Dilaudid 0.5mg IV \u2014 Rm 415-B (Torres)",n:"BP 96/58 \u2014 hold HTN meds",g:true,c:true,m:true},
  {t:"2030",l:"",p:"Pain reassessment (30 min)",s:"Rm 415-B: 6/10 to 4/10 after Dilaudid",n:"Pt less anxious, resting",g:true,c:true},
  {t:"2100",l:"",p:"I&O count / Foley check",s:"Rm 415-B Foley: 150mL since 1900",n:"UOP adequate",g:true,c:true},
  {t:"2130",l:"",p:"Turning / repositioning q2h",s:"",n:"",g:false,c:false},
  {t:"2200",l:"",p:"Vital signs (all patients)",s:"Rm 415-B: T37.0 HR90 BP100/62 RR17 SpO2 97%",n:"BP improved from 96/58",g:true,c:true},
  {t:"2230",l:"",p:"Rounding \u2014 safety, call lights",s:"Rounding done. Rm 418 call light replaced.",n:"",g:true,c:false},
  {t:"2300",l:"Midnight Meds",p:"Scheduled meds (hold caffeine)",s:"Enoxaparin 40mg SQ \u2014 Rm 415-B",n:"",g:true,c:true,m:true},
  {t:"2330",l:"",p:"Pain reassessment / comfort",s:"",n:"",g:false,c:false},
  {t:"0000",l:"Midnight",p:"Rounding \u2014 fall risk check",s:"Rounding done. Rm 415-B sleeping.",n:"Torres resting, no distress",g:true,c:true,k:true},
  {t:"0030",l:"",p:"I&O count / intake check",s:"",n:"",g:false,c:false},
  {t:"0100",l:"",p:"Turning / repositioning",s:"Rm 415-B turned to R side",n:"Pt briefly awake, repositioned",g:true,c:true},
  {t:"0130",l:"",p:"Cluster care \u2014 check all",s:"",n:"",g:false,c:false},
  {t:"0200",l:"",p:"Rounding \u2014 safety",s:"",n:"",g:false,c:false},
  {t:"0230",l:"",p:"Pain reassessment q2h",s:"Rm 415-B: 5/10 \u2014 requesting PRN",n:"Pt awake, mild nausea",g:true,c:true},
  {t:"0300",l:"",p:"Vital signs",s:"Rm 415-B: T37.1 HR88 BP98/60 RR18 SpO2 96%",n:"BP still low. MD aware.",g:true,c:true},
  {t:"0330",l:"",p:"I&O count",s:"",n:"",g:false,c:false},
  {t:"0400",l:"AM Meds",p:"Scheduled meds + AM labs",s:"CBC/CMP drawn Rm 415-B. Ondansetron PRN.",n:"Hgb pending",g:true,c:true,m:true},
  {t:"0430",l:"",p:"Pain reassessment",s:"",n:"",g:false,c:false},
  {t:"0500",l:"AM Vitals",p:"AM vital signs (all patients)",s:"Rm 415-B: T36.9 HR86 BP102/64 RR16 SpO2 97%",n:"BP trending up. Good sign.",g:true,c:true},
  {t:"0530",l:"",p:"Turning / repositioning",s:"",n:"",g:false,c:false},
  {t:"0600",l:"AM Assess",p:"Full assessment + I&O totals",s:"Rm 415-B: UOP 720mL total. Drain 45mL. Wt 86kg.",n:"I&O documented. Hgb 9.8 stable.",g:true,c:true},
  {t:"0630",l:"",p:"Chart review / orders check",s:"",n:"",g:false,c:false},
  {t:"0700",l:"Shift End",p:"Give report / SBAR to day RN",s:"Report to day RN (Martinez). SBAR complete.",n:"BP low but stable. Hgb pending.",g:true,c:true,k:true},
];

export default function MedicationTimeline() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={sharedStyles.pageHeader}>
        <Text style={sharedStyles.headerBadge}>Medication & Tasks</Text>
        <Text style={[sharedStyles.pageTitle,{marginTop:5}]}>Night Shift Medication & Task Timeline</Text>
        <Text style={sharedStyles.pageSubtitle}>1900-0700 in 30-min slots. Track meds, pain reassessment, I&O, rounding, and charting.</Text>
      </View>
      <View style={{flexDirection:"row",backgroundColor:colors.warmOrangePale,paddingTop:3,paddingBottom:3,paddingLeft:6,paddingRight:6,borderRadius:2,marginBottom:3,gap:6,borderWidth:0.5,borderColor:"#F0D9B5"}}>
        {[{l:"Patient",v:"Angela Torres"},{l:"Room",v:"415-B"},{l:"Dx",v:"Post-op L TKA"},{l:"RN",v:""}].map((f)=>(
          <View key={f.l} style={{flex:1,flexDirection:"row",alignItems:"center"}}>
            <Text style={{fontSize:5,fontFamily:"Helvetica-Bold",color:colors.warmOrange,marginRight:1.5}}>{f.l}:</Text>
            {f.v?<Text style={{fontSize:4.5,color:colors.sampleText,fontFamily:"Helvetica-Oblique"}}>{f.v}</Text>:<View style={{flex:1,borderBottomWidth:0.5,borderBottomColor:"#E0C9A0"}}><Text style={{fontSize:3,color:"transparent"}}>.</Text></View>}
          </View>
        ))}
      </View>
      <View style={sharedStyles.tip}>
        <Text style={{fontSize:6,marginRight:3}}>{"\u26A1"}</Text>
        <Text style={sharedStyles.tipText}>Cluster care during lower-fatigue windows. Combine tasks at 1930, 2200, 0000, 0500 to minimize trips during the 0200-0400 dip.</Text>
      </View>
      <View style={sharedStyles.tableHeader}>
        <Text style={{width:30,fontSize:5,fontFamily:"Helvetica-Bold",color:colors.white,textTransform:"uppercase"}}>Time</Text>
        <Text style={{flex:2.5,fontSize:5,fontFamily:"Helvetica-Bold",color:colors.white,textTransform:"uppercase",paddingLeft:2}}>Medication / Dose / Patient</Text>
        <View style={{width:20,alignItems:"center"}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.tealLight,textTransform:"uppercase"}}>Given</Text></View>
        <View style={{width:20,alignItems:"center"}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.tealLight,textTransform:"uppercase"}}>Chart</Text></View>
        <Text style={{flex:1.8,fontSize:5,fontFamily:"Helvetica-Bold",color:colors.white,textTransform:"uppercase",marginLeft:2}}>Notes</Text>
      </View>
      {slots.map((s,i)=>{
        const rs=s.k?{backgroundColor:colors.ice,borderLeftWidth:2,borderLeftColor:colors.ocean}:s.m?{backgroundColor:colors.warmOrangePale,borderLeftWidth:2,borderLeftColor:colors.warmOrange}:{};
        return (<View key={s.t} style={{...sharedStyles.tableRow,...rs,paddingTop:1.5,paddingBottom:1.5}}>
          <View style={{width:30}}><Text style={{fontSize:7,fontFamily:"Helvetica-Bold",color:s.k?colors.ocean:s.m?colors.warmOrange:colors.textDark}}>{s.t}</Text>{s.l&&<Text style={{fontSize:3,color:colors.textLight}}>{s.l}</Text>}</View>
          <View style={{flex:2.5,paddingLeft:2}}>{s.s?<View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.s}</Text></View>:<Text style={{fontSize:3.5,color:colors.textLight,fontFamily:"Helvetica-Oblique"}}>{s.p}</Text>}</View>
          <View style={{width:20,alignItems:"center"}}><View style={{width:7,height:7,borderWidth:0.5,borderColor:s.g?colors.teal:colors.tealMuted,borderRadius:1.5,backgroundColor:s.g?colors.tealPale:undefined,justifyContent:"center",alignItems:"center"}}>{s.g&&<Text style={{fontSize:5,color:colors.teal,fontFamily:"Helvetica-Bold"}}>{"\u2713"}</Text>}</View></View>
          <View style={{width:20,alignItems:"center"}}><View style={{width:7,height:7,borderWidth:0.5,borderColor:s.c?colors.teal:colors.tealMuted,borderRadius:1.5,backgroundColor:s.c?colors.tealPale:undefined,justifyContent:"center",alignItems:"center"}}>{s.c&&<Text style={{fontSize:5,color:colors.teal,fontFamily:"Helvetica-Bold"}}>{"\u2713"}</Text>}</View></View>
          <View style={{flex:1.8,marginLeft:2}}>{s.n?<Text style={{fontSize:3.5,color:colors.sampleText,fontFamily:"Helvetica-Oblique"}}>{s.n}</Text>:<View style={{height:7,borderBottomWidth:0.5,borderBottomColor:colors.lightGray}} />}</View>
        </View>);
      })}
      <View style={{flexDirection:"row",alignItems:"center",marginTop:2}}>
        <View style={{width:4,height:4,borderRadius:2,backgroundColor:colors.sampleBlue,marginRight:2}} />
        <Text style={{fontSize:3.5,color:colors.sampleText,fontFamily:"Helvetica-Oblique"}}>Blue = sample (Angela Torres, Rm 415-B, post-op L TKA)</Text>
      </View>
      <View style={{marginTop:3,flexDirection:"row",gap:5}}>
        <View style={{flex:1}}><Text style={{fontSize:5,fontFamily:"Helvetica-Bold",color:colors.teal,marginBottom:1}}>Key Medication Windows</Text>
          {[{t:"1930-2130",d:"Evening scheduled"},{t:"2230-0100",d:"Midnight pass"},{t:"0330-0530",d:"AM pass + labs"}].map((r)=>(<View key={r.t} style={{flexDirection:"row",marginBottom:0.5}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.warmOrange,width:52}}>{r.t}</Text><Text style={{fontSize:4,color:colors.textMid}}>{r.d}</Text></View>))}
        </View>
        <View style={{flex:1}}><Text style={{fontSize:5,fontFamily:"Helvetica-Bold",color:colors.teal,marginBottom:1}}>Recurring Tasks</Text>
          {["Rounding q2h (safety, fall risk)","Pain reassessment q2h post-med","I&O count q4h","Turning / repositioning q2h","Daily weight 0600"].map((r)=>(<View key={r} style={{flexDirection:"row",alignItems:"center",marginBottom:0.5}}><View style={{...sharedStyles.checkbox,width:5,height:5,marginRight:2}} /><Text style={{fontSize:3.5,color:colors.textDark}}>{r}</Text></View>))}
        </View>
      </View>
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>{"\u263E"} 2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 4 of 8</Text>
      </View>
    </Page>
  );
}
