import { redirect } from "next/navigation";

// Investor questionnaire — redirects to /apply
// The accredited/sophisticated questionnaire is now handled in the /apply flow
export default function InvestorQuestionnairePage() {
  redirect("/apply");
}
