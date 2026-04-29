import { redirect } from "next/navigation";

export default function DashboardAdViewPage({ params }: { params: { id: string } }) {
  redirect(`/dashboard/listings/${params.id}`);
}
