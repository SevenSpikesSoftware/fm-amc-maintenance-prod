import LogoutButton from "@/features/auth/components/LogoutButton";
import { Container, Grid, Paper, Typography, Badge } from "@mui/material";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
export default async function InspectionsHomePage() {
  const supabase = await createClient();

  const { count } = await supabase
    .from("maintenance_issues")
    .select("id", { count: "exact", head: true })
    .eq("status", "open");

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 4, textAlign: "center" }}>
        Select Inspection Type
      </Typography>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Link
            href="/inspections/amc"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Paper variant="outlined" sx={{ p: 3, textAlign: "center" }}>
              AMC
            </Paper>
          </Link>
        </Grid>
        <Grid size={6}>
          <Link
            href="/inspections/maintenance"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Badge
              badgeContent={count}
              invisible={!count}
              color="error"
              sx={{ width: "100%" }}
            >
              <Paper
                variant="outlined"
                sx={{ p: 3, textAlign: "center", width: "100%" }}
              >
                Maintenance
              </Paper>
            </Badge>
          </Link>
        </Grid>
        <Grid size={12} sx={{ mt: 4, textAlign: "center" }}>
          <LogoutButton />
        </Grid>
      </Grid>
    </Container>
  );
}
