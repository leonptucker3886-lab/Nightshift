import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const fs = [
  {level:"1",face:":D",label:"Wide awake",color:"#4CAF7D"},
  {level:"2-3",face:":)",label:"Alert",color:"#6FBF8E"},
  {level:"4-5",face:":|",label:"Okay",color:"#D4A843"},
  {level:"6-7",face:":/",label:"Tired",color:"#E8943A"},
  {level:"8-9",face:":(",label:"Exhausted",color:"#E07C5A"},
  {level:"10",face:"X(",label:"Can't function",color:"#C0392B"},
];
const acts = ["Hydrate","Stretch","Protein snack","Breathing","Power nap","Walk"];
const shifts = [
  {d:"03/31 Night",f:"8",sl:"5.5",m:"2",tr:"3rd night in a row. Skipped dinner. Code at 0200.",a:[true,true,true,true,false,false]},
  {d:"03/30 Night",f:"6",sl:"6",m:"3",tr:"Slept 5hrs pre-shift. Caffeine at 2200.",a:[true,false,true,false,true,true]},
  {d:"03/29 Night",f:"5",sl:"7",m:"4",tr:"Good sleep (7hrs). Light patient load.",a:[true,true,false,false,false,true]},
  {d:"03/28 Recovery",f:"3",sl:"8",m:"5",tr:"Day off. Nap 90min. Walked 20min. Felt reset.",a:[true,true,true,true,true,true]},
  {d:"",f:"",sl:"",m:"",tr:"",a:[false,false,false,false,false,false]},
  {d:"",f:"",sl:"",m:"",tr:"",a:[false,false,false,false,false,false]},
  {d:"",f:"",sl:"",m:"",tr:"",a:[false,false,false,false,false,false]},
];

export default function SelfCareTracker() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={sharedStyles.pageHeader}>
        <Text style={sharedStyles.headerBadge}>Wellness Tracking</Text>
        <Text style={[sharedStyles.pageTitle,{marginTop:5}]}>Daily Fatigue & Self-Care Tracker</Text>
        <Text style={sharedStyles.pageSubtitle}>Rate fatigue 1-10 after each shift. Log triggers, actions, sleep hours, and mood. Patterns reveal what helps.</Text>
      </View>
      <View style={{backgroundColor:colors.softGreenPale,borderLeftWidth:2,borderLeftColor:colors.softGreen,paddingTop:2,paddingBottom:2,paddingLeft:5,paddingRight:5,borderRadius:2,marginBottom:4,flexDirection:"row",alignItems:"center"}}>
        <Text style={{fontSize:6,marginRight:3}}>{"\u{1F4A1}"}</Text>
        <Text style={{fontSize:5,color:colors.softGreen,fontFamily:"Helvetica-Bold"}}>Small actions prevent burnout {"\u2014"} track what works for you.</Text>
      </View>
      <View style={{marginBottom:4}}>
        <Text style={{fontSize:6,fontFamily:"Helvetica-Bold",color:colors.teal,marginBottom:2}}>Fatigue Scale (circle your level after each shift)</Text>
        <View style={{flexDirection:"row",gap:2}}>
          {fs.map((s)=>(<View key={s.level} style={{flex:1,alignItems:"center",paddingTop:3,paddingBottom:3,borderRadius:2,borderWidth:0.75,borderColor:s.color+"40",backgroundColor:s.color+"10"}}>
            <Text style={{fontSize:9,marginBottom:0.5}}>{s.face}</Text>
            <Text style={{fontSize:6,fontFamily:"Helvetica-Bold",color:s.color}}>{s.level}</Text>
            <Text style={{fontSize:3.5,color:colors.textMid}}>{s.label}</Text>
          </View>))}
        </View>
      </View>
      <Text style={sharedStyles.sectionTitle}>Shift-by-Shift Log</Text>
      <View style={{flexDirection:"row",backgroundColor:colors.deepNavy,paddingTop:3,paddingBottom:3,paddingLeft:4,paddingRight:4,borderTopLeftRadius:2,borderTopRightRadius:2}}>
        <Text style={{width:48,fontSize:5,fontFamily:"Helvetica-Bold",color:colors.white,textTransform:"uppercase"}}>Date/Shift</Text>
        <View style={{width:22,alignItems:"center"}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.tealLight,textTransform:"uppercase"}}>Fatigue</Text></View>
        <View style={{width:18,alignItems:"center"}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.tealLight,textTransform:"uppercase"}}>Sleep</Text></View>
        <View style={{width:18,alignItems:"center"}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.tealLight,textTransform:"uppercase"}}>Mood</Text></View>
        <Text style={{flex:2,fontSize:5,fontFamily:"Helvetica-Bold",color:colors.white,textTransform:"uppercase",paddingLeft:2}}>Notes / Triggers</Text>
        <Text style={{flex:3,fontSize:5,fontFamily:"Helvetica-Bold",color:colors.white,textTransform:"uppercase",paddingLeft:2}}>Actions Taken</Text>
      </View>
      {shifts.map((sh,i)=>{
        const is=sh.d!=="";const fc=Number(sh.f)>=8?"#E07C5A":Number(sh.f)>=6?"#E8943A":Number(sh.f)>=4?"#D4A843":sh.f?"#4CAF7D":"transparent";
        return (<View key={i} style={{flexDirection:"row",paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,borderBottomWidth:0.5,borderBottomColor:colors.lightGray,alignItems:"center",backgroundColor:is?colors.sampleBlue:i%2===0?colors.offWhite:colors.white}}>
          <View style={{width:48}}>{is?<Text style={{fontSize:5,color:colors.sampleText,fontFamily:"Helvetica-Oblique"}}>{sh.d}</Text>:<View style={{height:10,borderBottomWidth:0.5,borderBottomColor:colors.lightGray}} />}</View>
          <View style={{width:22,alignItems:"center"}}><View style={{width:18,height:12,borderRadius:2,borderWidth:0.75,borderColor:is?fc:colors.tealMuted,backgroundColor:is?fc+"15":undefined,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:7,fontFamily:"Helvetica-Bold",color:is?fc:"transparent"}}>{sh.f||"."}</Text></View></View>
          <View style={{width:18,alignItems:"center"}}><Text style={{fontSize:5,color:is?colors.sampleText:"transparent",fontFamily:is?"Helvetica-Bold":"Helvetica"}}>{sh.sl?sh.sl+"h":"."}</Text></View>
          <View style={{width:18,alignItems:"center"}}><Text style={{fontSize:5,color:is?colors.sampleText:"transparent",fontFamily:is?"Helvetica-Bold":"Helvetica"}}>{sh.m||"."}</Text></View>
          <View style={{flex:2,paddingLeft:2}}>{is?<Text style={{fontSize:4,color:colors.sampleText,fontFamily:"Helvetica-Oblique",lineHeight:1.2}}>{sh.tr}</Text>:<View style={{height:10,borderBottomWidth:0.5,borderBottomColor:colors.lightGray}} />}</View>
          <View style={{flex:3,flexDirection:"row",flexWrap:"wrap",gap:1.5,paddingLeft:2}}>
            {acts.map((a,ai)=>(<View key={a} style={{flexDirection:"row",alignItems:"center",width:"30%"}}>
              <View style={{width:6,height:6,borderWidth:0.5,borderColor:sh.a[ai]?colors.teal:colors.tealMuted,borderRadius:1,backgroundColor:sh.a[ai]?colors.tealPale:undefined,justifyContent:"center",alignItems:"center",marginRight:1.5}}>{sh.a[ai]&&<Text style={{fontSize:4,color:colors.teal,fontFamily:"Helvetica-Bold"}}>{"\u2713"}</Text>}</View>
              <Text style={{fontSize:3.5,color:colors.textDark}}>{a}</Text>
            </View>))}
          </View>
        </View>);
      })}
      <View style={{flexDirection:"row",alignItems:"center",marginTop:1,marginBottom:3}}>
        <View style={{width:4,height:4,borderRadius:2,backgroundColor:colors.sampleBlue,marginRight:2}} /><Text style={{fontSize:3.5,color:colors.sampleText,fontFamily:"Helvetica-Oblique"}}>Blue = sample. Sleep = hours slept before shift. Mood = 1-5.</Text>
      </View>
      <View style={{flexDirection:"row",gap:5,marginBottom:3}}>
        <View style={{flex:1}}><Text style={{fontSize:5,fontFamily:"Helvetica-Bold",color:colors.teal,marginBottom:1}}>Patterns Noticed</Text>
          <View style={sharedStyles.sampleBox}><Text style={sharedStyles.sampleText}>Fatigue peaks after 3+ consecutive nights. Caffeine after 0300 delays sleep 2+ hrs. Skipping mid-shift meal = crash at 0400.</Text></View>
          <View style={{height:18,backgroundColor:colors.offWhite,borderBottomWidth:0.5,borderBottomColor:colors.lightGray,marginTop:1}} />
        </View>
        <View style={{flex:1}}><Text style={{fontSize:5,fontFamily:"Helvetica-Bold",color:colors.teal,marginBottom:1}}>Weekly Averages</Text>
          <View style={{flexDirection:"row",gap:3}}>
            {[{l:"Avg Fatigue",v:"5.5",c:colors.warmOrange},{l:"Avg Sleep",v:"6.6hrs",c:colors.ocean},{l:"Avg Mood",v:"3.5",c:colors.softGreen}].map((a)=>(<View key={a.l} style={{flex:1,backgroundColor:colors.ice,borderRadius:2,paddingTop:2,paddingBottom:2,paddingLeft:2,paddingRight:2,alignItems:"center",borderWidth:0.5,borderColor:colors.tealPale}}><Text style={{fontSize:3.5,color:colors.textMid}}>{a.l}</Text><Text style={{fontSize:7,fontFamily:"Helvetica-Bold",color:a.c}}>{a.v}</Text></View>))}
          </View>
          <View style={{marginTop:1.5}}><Text style={{fontSize:3.5,color:colors.coral}}>Fatigue up 1.2 pts (3 consecutive nights)</Text><Text style={{fontSize:3.5,color:colors.softGreen}}>Sleep improved 0.5hrs (better blackout setup)</Text></View>
        </View>
      </View>
      <Text style={sharedStyles.sectionTitle}>Night-Shift Mitigation Prompts</Text>
      <View style={{flexDirection:"row",gap:3,marginBottom:3}}>
        {[{i:"\u2615",t:"Caffeine cutoff after 0300",d:"Half-life = 5-6hrs. Last coffee by 0300 if sleeping at 0900."},{i:"\u{1F4A7}",t:"Hydrate every 2 hours",d:"Dehydration worsens fatigue. Keep water bottle at nurses station."},{i:"\u{1F634}",t:"Power nap (20 min)",d:"Best 0200-0400 or 1700-1830 pre-shift. Set alarm!"},{i:"\u{1F34E}",t:"Protein snack 0000-0200",d:"Nuts, cheese, yogurt. Avoid sugar crashes after 0300."}].map((p)=>(<View key={p.t} style={{flex:1,backgroundColor:colors.ice,borderRadius:2,paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,borderWidth:0.5,borderColor:colors.tealPale}}><Text style={{fontSize:7,marginBottom:0.5}}>{p.i}</Text><Text style={{fontSize:4.5,fontFamily:"Helvetica-Bold",color:colors.teal,marginBottom:0.5}}>{p.t}</Text><Text style={{fontSize:3.5,color:colors.textMid,lineHeight:1.2}}>{p.d}</Text></View>))}
      </View>
      <Text style={{fontSize:5,fontFamily:"Helvetica-Bold",color:colors.teal,marginBottom:1}}>Quick Self-Care Actions (check off each shift)</Text>
      <View style={{flexDirection:"row",gap:3}}>
        {[{a:"Hydrate",d:"8oz water q2h",i:"\u{1F4A7}"},{a:"Stretch",d:"2-min neck/shoulders",i:"\u{1F9D8}"},{a:"Protein snack",d:"Every 3-4 hrs",i:"\u{1F34E}"},{a:"Breathe",d:"4-7-8 technique x3",i:"\u{1F4A8}"},{a:"Power nap",d:"20 min if possible",i:"\u{1F634}"},{a:"Walk",d:"Break room loop",i:"\u{1F6B6}"}].map((a)=>(<View key={a.a} style={{flex:1,alignItems:"center",paddingTop:2,paddingBottom:2,backgroundColor:colors.softGreenPale,borderRadius:2,borderWidth:0.5,borderColor:colors.softGreenMuted}}><Text style={{fontSize:6}}>{a.i}</Text><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.softGreen}}>{a.a}</Text><Text style={{fontSize:3,color:colors.textMid}}>{a.d}</Text></View>))}
      </View>
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>{"\u263E"} 2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 5 of 8</Text>
      </View>
    </Page>
  );
}
