import { redirect } from "next/navigation";

// WordPress used /privacy-policy/ — redirect to canonical Next.js route
export default function PrivacyPolicyRedirect() {
  redirect("/privacy");
}
