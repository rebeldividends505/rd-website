import { redirect } from "next/navigation";

// Dividends For Life sign-up page — redirects to /apply
// Original Zoho form replaced by integrated application flow
export default function DividendsForLifePage() {
  redirect("/apply");
}
