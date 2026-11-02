import { notFound } from "next/navigation";
import { Container, Typography } from "@mui/material";
import { createClient } from "@/lib/supabase/server";
import { updateStatusValue } from "@/features/admin/commands";
import AdminCrudForm from "@/features/admin/AdminCrudForm";

export default async function EditStatusPage({ params }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: item, error } = await supabase
    .from("status_values")
    .select("id, code, label, sort_order, is_active, parent_id")
    .eq("id", id)
    .single();

  const { data: statuses } = await supabase
    .from("status_values")
    .select("id, label")
    .neq("id", id)
    .order("label");
  if (error || !item) notFound();
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Edit status value
      </Typography>
      <AdminCrudForm
        action={updateStatusValue}
        redirectTo="/statuses"
        initialValues={{ ...item, parent_id: item.parent_id ?? "" }}
        fields={[
          { name: "code", label: "Code" },
          { name: "label", label: "Label" },
          { name: "sort_order", label: "Display order", type: "number" },
          {
            name: "parent_id",
            label: "Parent status",
            type: "select",
            required: false,
            options: [
              { value: "", label: "None (top-level status)" },
              ...(statuses ?? []).map((s) => ({ value: s.id, label: s.label })),
            ],
          },
        ]}
      />
    </Container>
  );
}
