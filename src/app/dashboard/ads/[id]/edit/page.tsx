import { redirect } from "next/navigation";

export default function DashboardAdEditPage({ params }: { params: { id: string } }) {
  redirect(`/dashboard/listings/${params.id}/edit`);
}
