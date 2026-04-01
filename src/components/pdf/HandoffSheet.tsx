import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const s = {
  name:"Angela Torres", mrn:"MRN 6174829", room:"415-B", age:"45 / F", code:"Full Code",
  allergies:"Latex (anaphylaxis), Morphine (pruritus)", iv:"20g L hand \u2014 LR @ 100mL/hr",
  fallRisk:"Morse: 55 (high)", isolation:"None", attending:"Dr. Okonkwo",
  admit:"03/30/2026 / OR", dx:"Post-op Day 1 \u2014 L TKA. Pain 6/10, BP trending low 96/58.",
  pmhx:"OA knees, HTN, BMI 31", surgHx:"L TKA 03/30, Cholecystectomy 2012",
  lines:"Foley (UOP 35mL/hr), surgical drain (45mL/shift)",
  orders:"CBC 0600 (watch Hgb), BMP, PT/INR. SCDs + Enoxaparin 40mg SQ.",
  vitals:"T 37.0 / HR 92 / BP 96/58 / RR 18 / SpO2 97% RA",
  pain:"6/10 L knee (aching, constant), worse with movement. Last dilaudid 0230.",
  neuro:"A&Ox3, anxious about pain. Moving toes bilat.",
  cardio:"Tachy 92, BP low, no edema, pulses palpable",
  resp:"CTA bilat, SpO2 97%, IS doing 1250mL",
  giGu:"Clear liquids tolerated, nausea PRN x1. UOP 35mL/hr.",
  skin:"Incision C/D/I, Steri-Strips. Braden: 19.",
  meds:"Dilaudid 0.5mg IV q3h PRN. Hold HTN meds if SBP <100.",
  concerns:"BP low (110/70 to 96/58). Watch bleeding. Hgb 0600.",
  asks:"Call MD if SBP <90. Ambulate with PT 0900. IS q1h.",
  family:"Husband called 0100. Visiting 0800. Pt anxious about pain.",
};
const vt = [
  {t:"1900",hr:"88",bp:"110/70",rr:"16",sp:"98%",tp:"37.2"},
  {t:"2300",hr:"90",bp:"104/64",rr:"17",sp:"97%",tp:"37.1"},
  {t:"0300",hr:"92",bp:"96/58",rr:"18",sp:"97%",tp:"37.0"},
  {t:"0700",hr:"",bp:"",rr:"",sp:"",tp:""},
];

export default function HandoffSheet() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={sharedStyles.pageHeader}>
        <Text style={sharedStyles.headerBadge}>Patient Safety</Text>
        <Text style={[sharedStyles.pageTitle,{marginTop:8}]}>SBAR Patient Handoff / Report Sheet</Text>
        <Text style={sharedStyles.pageSubtitle}>Use SBAR for clear, concise handoffs to reduce errors. One sheet per patient per shift.</Text>
      </View>
      <View style={{ flexDirection:"row", gap:4, marginBottom:2 }}>
        {[{l:"Patient / MRN",v:s.name+" / "+s.mrn},{l:"Room",v:s.room},{l:"Age/Gender",v:s.age}].map((f)=>(
          <View key={f.l} style={{flex:1}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.teal,marginBottom:0.5}}>{f.l}</Text><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{f.v}</Text></View></View>
        ))}
      </View>
      <View style={{ flexDirection:"row", gap:4, marginBottom:3 }}>
        {[{l:"Code Status",v:s.code},{l:"Allergies",v:s.allergies},{l:"IV Access/Site",v:s.iv},{l:"Fall Risk",v:s.fallRisk}].map((f)=>(
          <View key={f.l} style={{flex:1}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.teal,marginBottom:0.5}}>{f.l}</Text><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{f.v}</Text></View></View>
        ))}
      </View>
      {/* S */}
      <View style={{marginBottom:2}}>
        <View style={{flexDirection:"row",alignItems:"center",marginBottom:1}}>
          <View style={{width:15,height:15,borderRadius:7.5,backgroundColor:colors.ocean,justifyContent:"center",alignItems:"center",marginRight:4}}><Text style={{fontSize:8,fontFamily:"Helvetica-Bold",color:colors.white}}>S</Text></View>
          <Text style={{fontSize:7,fontFamily:"Helvetica-Bold",color:colors.deepNavy}}>Situation</Text><Text style={{fontSize:3.5,color:colors.textLight,marginLeft:2}}>{"\u2014"} What is happening?</Text>
        </View>
        <View style={{marginLeft:19}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.textMid,marginBottom:0.5}}>Primary Dx / Reason for Call</Text><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.dx}</Text></View></View>
      </View>
      {/* B */}
      <View style={{marginBottom:2}}>
        <View style={{flexDirection:"row",alignItems:"center",marginBottom:1}}>
          <View style={{width:15,height:15,borderRadius:7.5,backgroundColor:colors.teal,justifyContent:"center",alignItems:"center",marginRight:4}}><Text style={{fontSize:8,fontFamily:"Helvetica-Bold",color:colors.white}}>B</Text></View>
          <Text style={{fontSize:7,fontFamily:"Helvetica-Bold",color:colors.deepNavy}}>Background</Text><Text style={{fontSize:3.5,color:colors.textLight,marginLeft:2}}>{"\u2014"} Relevant history</Text>
        </View>
        <View style={{marginLeft:19,flexDirection:"row",gap:4}}>
          <View style={{flex:1}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.textMid,marginBottom:0.5}}>PMHx / Surgical Hx</Text><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.pmhx}</Text></View><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.surgHx}</Text></View></View>
          <View style={{flex:1}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.textMid,marginBottom:0.5}}>IV Access / Lines / Drains</Text><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.iv}</Text></View><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.lines}</Text></View></View>
        </View>
      </View>
      {/* A */}
      <View style={{marginBottom:2}}>
        <View style={{flexDirection:"row",alignItems:"center",marginBottom:1}}>
          <View style={{width:15,height:15,borderRadius:7.5,backgroundColor:colors.warmOrange,justifyContent:"center",alignItems:"center",marginRight:4}}><Text style={{fontSize:8,fontFamily:"Helvetica-Bold",color:colors.white}}>A</Text></View>
          <Text style={{fontSize:7,fontFamily:"Helvetica-Bold",color:colors.deepNavy}}>Assessment</Text><Text style={{fontSize:3.5,color:colors.textLight,marginLeft:2}}>{"\u2014"} What do I think?</Text>
        </View>
        <View style={{marginLeft:19}}>
          <Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.textMid,marginBottom:0.5}}>Vital Signs Summary</Text><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.vitals}</Text></View>
          <View style={{flexDirection:"row",gap:4,marginTop:1}}>
            <View style={{flex:1}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.textMid,marginBottom:0.5}}>Pain (0-10 / location)</Text><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.pain}</Text></View></View>
            <View style={{flex:1}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.textMid,marginBottom:0.5}}>Cardio / Resp</Text><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.cardio+". "+s.resp}</Text></View></View>
          </View>
          <View style={{flexDirection:"row",gap:4,marginTop:1}}>
            <View style={{flex:1}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.textMid,marginBottom:0.5}}>Neuro / Mental Status</Text><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.neuro}</Text></View></View>
            <View style={{flex:1}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.textMid,marginBottom:0.5}}>GI-GU / Skin</Text><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.giGu+" "+s.skin}</Text></View></View>
          </View>
        </View>
      </View>
      {/* R */}
      <View style={{marginBottom:2}}>
        <View style={{flexDirection:"row",alignItems:"center",marginBottom:1}}>
          <View style={{width:15,height:15,borderRadius:7.5,backgroundColor:colors.softGreen,justifyContent:"center",alignItems:"center",marginRight:4}}><Text style={{fontSize:8,fontFamily:"Helvetica-Bold",color:colors.white}}>R</Text></View>
          <Text style={{fontSize:7,fontFamily:"Helvetica-Bold",color:colors.deepNavy}}>Recommendation</Text><Text style={{fontSize:3.5,color:colors.textLight,marginLeft:2}}>{"\u2014"} What do I need?</Text>
        </View>
        <View style={{marginLeft:19,flexDirection:"row",gap:4}}>
          <View style={{flex:1}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.textMid,marginBottom:0.5}}>Pending Labs / Tests</Text><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.orders}</Text></View><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.textMid,marginTop:1,marginBottom:0.5}}>Med Changes Expected</Text><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.meds}</Text></View></View>
          <View style={{flex:1}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.textMid,marginBottom:0.5}}>Concerns for Next Shift</Text><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.concerns}</Text></View><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.textMid,marginTop:1,marginBottom:0.5}}>Specific Asks of Next RN / MD</Text><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.asks}</Text></View></View>
        </View>
      </View>
      {/* Vitals Trend */}
      <View style={{marginBottom:2}}>
        <Text style={{fontSize:5,fontFamily:"Helvetica-Bold",color:colors.teal,marginBottom:1}}>Vitals Trend This Shift</Text>
        <View style={{flexDirection:"row",backgroundColor:colors.deepNavy,paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,borderTopLeftRadius:2,borderTopRightRadius:2}}>
          {["Time","HR","BP","RR","SpO2","Temp"].map((h)=>(<View key={h} style={{flex:1,alignItems:"center"}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.tealLight,textTransform:"uppercase"}}>{h}</Text></View>))}
        </View>
        {vt.map((v,i)=>(
          <View key={v.t} style={{flexDirection:"row",paddingTop:1,paddingBottom:1,paddingLeft:3,paddingRight:3,backgroundColor:i%2===0?colors.sampleBlue:colors.white,borderBottomWidth:0.5,borderBottomColor:colors.lightGray}}>
            <View style={{flex:1,alignItems:"center"}}><Text style={{fontSize:5,fontFamily:"Helvetica-Bold",color:colors.textDark}}>{v.t}</Text></View>
            {[v.hr,v.bp,v.rr,v.sp,v.tp].map((val,vi)=>(<View key={vi} style={{flex:1,alignItems:"center"}}><Text style={{fontSize:4.5,color:val?colors.sampleText:"transparent",fontFamily:val?"Helvetica-Oblique":"Helvetica"}}>{val||"."}</Text></View>))}
          </View>
        ))}
      </View>
      {/* Bottom */}
      <View style={{flexDirection:"row",gap:4}}>
        <View style={{flex:1}}><Text style={{fontSize:5,fontFamily:"Helvetica-Bold",color:colors.teal,marginBottom:1}}>Concerns for Next Shift</Text><View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>{s.family}</Text></View><View style={{height:14,backgroundColor:colors.offWhite,borderBottomWidth:0.5,borderBottomColor:colors.lightGray,marginTop:1}} /></View>
        <View style={{flex:1}}><Text style={{fontSize:5,fontFamily:"Helvetica-Bold",color:colors.teal,marginBottom:1}}>Shift-End Checklist</Text>
          {["I&O charted (total: ___)","Pain reassessed","DVT prophylaxis given","Code status confirmed","Patient/family updated"].map((item)=>(
            <View key={item} style={{flexDirection:"row",alignItems:"center",marginBottom:1}}><View style={{...sharedStyles.checkbox,width:5,height:5,marginRight:2}} /><Text style={{fontSize:4,color:colors.textDark}}>{item}</Text></View>
          ))}
        </View>
      </View>
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>{"\u263E"} 2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 3 of 8</Text>
      </View>
    </Page>
  );
}
