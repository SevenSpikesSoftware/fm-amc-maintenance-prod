import { Container, Typography } from "@mui/material";
import { createClient } from "@/lib/supabase/server";
import AdminCrudForm from "@/features/admin/AdminCrudForm";
import { createStatusValue } from "@/features/admin/commands";

export default async function NewStatusPage() {
  const { data: statuses } = await (await createClient())
    .from("status_values")
    .select("id, label")
    .order("label");
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Add status value
      </Typography>
      <AdminCrudForm
        action={createStatusValue}
        redirectTo="/statuses"
        initialValues={{ code: "", label: "", sort_order: 0 }}
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
        submitLabel="Create status"
      />
    </Container>
  );
}
