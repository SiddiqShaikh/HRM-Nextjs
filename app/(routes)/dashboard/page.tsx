import Announcement from "./announcementsection";
import AttendanceSummary from "./attendance";
import CertificationSection from "./certificationsection";
import ProfileSection from "./profile";

export default function Dashboard() {
  return (
    <main className="z-[1] w-full ">
      <ProfileSection />
      <AttendanceSummary />
      <Announcement />
      <CertificationSection />
     
    </main>
  );
}
