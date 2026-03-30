import { Document } from "@react-pdf/renderer";
import CoverPage from "./CoverPage";
import ShiftScheduler from "./ShiftScheduler";
import HandoffSheet from "./HandoffSheet";
import MedicationTimeline from "./MedicationTimeline";
import SelfCareTracker from "./SelfCareTracker";
import RecoveryChecklist from "./RecoveryChecklist";
import TipsPage from "./TipsPage";
import HowToUsePage from "./HowToUsePage";

export default function NightShiftBundlePDF() {
  return (
    <Document
      title="2026 Night Shift Nurse Survival Bundle"
      author="Night Shift Nurse Survival"
      subject="Printable PDF Bundle for Night Shift RNs"
      keywords="night shift, nurse, planner, SBAR, handoff, medication tracker, fatigue, self-care"
    >
      <CoverPage />
      <ShiftScheduler />
      <HandoffSheet />
      <MedicationTimeline />
      <SelfCareTracker />
      <RecoveryChecklist />
      <TipsPage />
      <HowToUsePage />
    </Document>
  );
}
