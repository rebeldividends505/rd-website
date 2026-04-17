import { redirect } from "next/navigation";

// Sophisticated investor questionnaire — redirects to the /apply portal
// The original Zoho form is replaced by the integrated /apply flow
export default function SophisticatedPage() {
  redirect("/apply");
}
