import { Page, View, Text } from "@react-pdf/renderer";
import { colors, sharedStyles } from "./styles";

const wd = [
  {s:"Sunglasses on for commute home",d:"Blocks morning light that signals wakefulness"},
  {s:"Head straight to bed \u2014 no detours",d:"Every minute of wakefulness reduces sleep quality"},
  {s:"Keep car cool (65-68F), avoid bright stops",d:"Pre-pack snacks/gas to avoid fluorescent light"},
  {s:"Change into sleep clothes immediately",d:"Psychological signal: shift is over, recovery mode"},
  {s:"Warm shower (10 min) \u2192 core temp drops \u2192 sleepiness",d:"Proven to reduce sleep onset by 10-15 min"},
];
const bo = [
  "Blackout curtains (100% light-blocking)",
  "Seal door gaps with towel or draft stopper",
  "Cover all LED lights with tape",
  "Eye mask as backup (contoured style)",
  "Phone face-down + Do Not Disturb",
  "White noise machine or earplugs (50-65dB)",
];
const bl = [
  "No screens 1 hour before sleep",
  "If needed: Night Shift filter + lowest brightness",
  "Amber blue-light glasses on commute home",
  "Dim nightlight in bathroom after shower",
  "Set phone auto Night Mode at 0700",
];
const nut = [
  {t:"Light protein snack within 30 min of home",e:"PB toast, yogurt + granola, cheese + crackers"},
  {t:"Avoid heavy meals before sleep",e:"Large meals disrupt sleep architecture"},
  {t:"Hydrate but stop fluids 1hr before sleep",e:"16oz water on commute, then taper"},
  {t:"Avoid sugar/caffeine after 0300",e:"Sugar crashes mid-sleep. Caffeine half-life = 5-6hrs"},
];
const rec = [
  {i:"Stay up until 2200-2300",ck:true,n:"Push bedtime 2hrs later each recovery day"},
  {i:"Consistent sleep window: 7-8hrs",ck:true,n:"Consistency matters more than total hours"},
  {i:"11+ hours between last shift and next sleep",ck:true,n:"Allows circadian rhythm to reset"},
  {i:"Power nap 20-90 min before next night",ck:false,n:"Best 1700-1830. Set alarm!"},
  {i:"Gentle movement: 15-30 min walk/yoga/stretch",ck:true,n:"Avoid intense exercise within 4hrs of sleep"},
  {i:"Nourishing meal (protein + carbs + veggies)",ck:false,n:"Prep for next shift meals at same time"},
  {i:"1 hour of non-work activity you enjoy",ck:true,n:"This prevents burnout, not optional"},
  {i:"Social connection (even 5-min call/text)",ck:false,n:"Isolation worsens shift work depression"},
  {i:"Set alarm to avoid oversleeping",ck:false,n:"Oversleeping pushes window later each cycle"},
];
const sl = [
  {dt:"03/31",bd:"0915",wk:"1530",hr:"6.25",ql:"3",nt:"Woke 2x, neighbors noisy"},
  {dt:"03/30",bd:"0845",wk:"1500",hr:"6.25",ql:"2",nt:"Caffeine at 0400, took 1hr to fall asleep"},
  {dt:"03/29",bd:"0830",wk:"1530",hr:"7",ql:"4",nt:"Blackout curtains working. Good sleep."},
  {dt:"",bd:"",wk:"",hr:"",ql:"",nt:""},
];

export default function RecoveryChecklist() {
  return (
    <Page size="LETTER" style={sharedStyles.page}>
      <View style={sharedStyles.pageHeader}>
        <Text style={sharedStyles.headerBadge}>Recovery &amp; Rest</Text>
        <Text style={[sharedStyles.pageTitle,{marginTop:8}]}>Post-Shift Sleep Recovery Checklist</Text>
        <Text style={sharedStyles.pageSubtitle}>Wind-down, blackout, blue-light, nutrition, recovery day planner, sleep log.</Text>
      </View>
      <View style={sharedStyles.tip}>
        <Text style={{fontSize:6,marginRight:3}}>Tip:</Text>
        <Text style={sharedStyles.tipText}>Prioritize sleep reset. It takes 2-4 days after consecutive nights. 11+ hours between shifts is ideal.</Text>
      </View>
      <View style={{backgroundColor:colors.goldPale,borderLeftWidth:2,borderLeftColor:colors.warmOrange,paddingTop:2,paddingBottom:2,paddingLeft:5,paddingRight:5,borderRadius:2,marginBottom:3,flexDirection:"row",alignItems:"center"}}>
        <Text style={{fontSize:9,marginRight:3}}>Coffee:</Text>
        <View><Text style={{fontSize:5,fontFamily:"Helvetica-Bold",color:colors.warmOrange}}>CAFFEINE CUTOFF (after 0300)</Text><Text style={{fontSize:3.5,color:colors.textMid}}>Last caffeine by 0300 if sleeping at 0900. Half-life = 5-6hrs.</Text></View>
      </View>
      <View style={{marginBottom:2}}><Text style={sharedStyles.sectionTitle}>Immediate Wind-Down Routine</Text>
        {wd.map((item)=><View key={item.s} style={{flexDirection:"row",alignItems:"flex-start",marginBottom:1}}><View style={{...sharedStyles.checkbox,width:6,height:6}} /><View style={{flex:1}}><Text style={{fontSize:4.5,color:colors.textDark,fontFamily:"Helvetica-Bold",lineHeight:1.2}}>{item.s}</Text><Text style={{fontSize:3.5,color:colors.textLight,fontFamily:"Helvetica-Oblique"}}>{item.d}</Text></View></View>)}
      </View>
      <View style={{flexDirection:"row",gap:4,marginBottom:2}}>
        <View style={{flex:1}}><Text style={sharedStyles.sectionTitle}>Blackout &amp; Sleep Environment</Text>
          {bo.map((item)=><View key={item} style={{flexDirection:"row",alignItems:"flex-start",marginBottom:0.5}}><View style={{...sharedStyles.checkbox,width:5,height:5}} /><Text style={{fontSize:3.5,color:colors.textDark,flex:1,lineHeight:1.2}}>{item}</Text></View>)}
        </View>
        <View style={{flex:1}}><Text style={sharedStyles.sectionTitle}>Blue-Light Avoidance</Text>
          {bl.map((item)=><View key={item} style={{flexDirection:"row",alignItems:"flex-start",marginBottom:0.5}}><View style={{...sharedStyles.checkbox,width:5,height:5}} /><Text style={{fontSize:3.5,color:colors.textDark,flex:1,lineHeight:1.2}}>{item}</Text></View>)}
        </View>
      </View>
      <View style={{marginBottom:2}}><Text style={sharedStyles.sectionTitle}>Nutrition &amp; Recovery Notes</Text>
        {nut.map((n)=><View key={n.t} style={{flexDirection:"row",alignItems:"flex-start",marginBottom:1}}><View style={{...sharedStyles.checkbox,width:5,height:5}} /><View style={{flex:1}}><Text style={{fontSize:4,color:colors.textDark,fontFamily:"Helvetica-Bold",lineHeight:1.2}}>{n.t}</Text><Text style={{fontSize:3,color:colors.textLight,fontFamily:"Helvetica-Oblique"}}>{n.e}</Text></View></View>)}
      </View>
      <View style={{marginBottom:2}}><Text style={sharedStyles.sectionTitle}>Recovery Day Planner (sample filled)</Text>
        <View style={{backgroundColor:colors.ice,borderRadius:2,paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,borderWidth:0.5,borderColor:colors.tealPale}}>
          {rec.map((r)=><View key={r.i} style={{flexDirection:"row",alignItems:"flex-start",marginBottom:1}}>
            <View style={{width:6,height:6,borderWidth:0.75,borderColor:r.ck?colors.teal:colors.tealMuted,borderRadius:1,backgroundColor:r.ck?colors.tealPale:undefined,justifyContent:"center",alignItems:"center",marginRight:3,marginTop:0.5}}>{r.ck&&<Text style={{fontSize:4,color:colors.teal,fontFamily:"Helvetica-Bold"}}>check</Text>}</View>
            <View style={{flex:1}}><Text style={{fontSize:4,color:colors.textDark,fontFamily:"Helvetica-Bold",lineHeight:1.2}}>{r.i}</Text><Text style={{fontSize:3,color:colors.textLight,fontFamily:"Helvetica-Oblique"}}>{r.n}</Text></View>
          </View>)}
        </View>
      </View>
      <Text style={sharedStyles.sectionTitle}>Sleep Hours Log (track 4 shifts)</Text>
      <View style={{flexDirection:"row",backgroundColor:colors.deepNavy,paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,borderTopLeftRadius:2,borderTopRightRadius:2}}>
        {["Date","Bed","Wake","Hrs","Quality","Notes"].map((h)=><View key={h} style={{flex:h==="Notes"?2.5:1,alignItems:"center"}}><Text style={{fontSize:4,fontFamily:"Helvetica-Bold",color:colors.tealLight,textTransform:"uppercase"}}>{h}</Text></View>)}
      </View>
      {sl.map((r,i)=>{
        const is = r.dt !== "";
        return <View key={i} style={{flexDirection:"row",paddingTop:1,paddingBottom:1,paddingLeft:3,paddingRight:3,backgroundColor:is?colors.sampleBlue:i%2===0?colors.offWhite:colors.white,borderBottomWidth:0.5,borderBottomColor:colors.lightGray}}>
          {[r.dt,r.bd,r.wk,r.hr,r.ql].map((v,vi)=><View key={vi} style={{flex:1,alignItems:"center"}}><Text style={{fontSize:4.5,color:is?colors.sampleText:"transparent",fontFamily:is?"Helvetica-Oblique":"Helvetica"}}>{v||"."}</Text></View>)}
          <View style={{flex:2.5,paddingLeft:2}}>{is?<Text style={{fontSize:3.5,color:colors.sampleText,fontFamily:"Helvetica-Oblique"}}>{r.nt}</Text>:<View style={{height:7,borderBottomWidth:0.5,borderBottomColor:colors.lightGray}} />}</View>
        </View>;
      })}
      <View style={sharedStyles.footer}>
        <Text style={sharedStyles.footerText}>2026 Night Shift Nurse Survival Bundle</Text>
        <Text style={sharedStyles.footerText}>Page 6 of 8</Text>
      </View>
    </Page>
  );
}
