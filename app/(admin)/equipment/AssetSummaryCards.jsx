"use client";
import { useState } from "react";
import { Grid, MenuItem, Stack, TextField } from "@mui/material";
import { isNotOperational } from "@/lib/equipmentStatus";
import MetricCard from "@/features/admin/MetricCard";
import AdminList from "../AdminList";
import { matchesStatus } from "@/lib/equipmentStatus";
export default function AssetSummaryCards({ equipment, rows, columns }) {
  const [selectedType, setSelectedType] = useState("");
  const [selectedSite, setSelectedSite] = useState("");

  const typeOptions = [
    ...new Set(
      equipment.map((item) => item.equipment_types?.name).filter(Boolean),
    ),
  ];
  const siteOptions = [
    ...new Set(
      equipment.map((item) => item.locations?.site_code).filter(Boolean),
    ),
  ];
  const filtered = equipment.filter(
    (item) =>
      (!selectedType || item.equipment_types?.name === selectedType) &&
      (!selectedSite || item.locations?.site_code === selectedSite),
  );
  const filteredRows = rows.filter(
    (row) =>
      (!selectedType || row.filters?.category === selectedType) &&
      (!selectedSite || row.filters?.site === selectedSite),
  );

  const total = filtered.length;
  const operationalCount = filtered.filter(
    (item) => !isNotOperational(item.status),
  ).length;
  const nonOperationalCount = total - operationalCount;
  const newCount = filtered.filter((item) =>
    matchesStatus(item.status, "NEW"),
  ).length;
  const damagedCount = filtered.filter((item) =>
    matchesStatus(item.status, "DAMAGED"),
  ).length;
  const underMaintenanceCount = filtered.filter((item) =>
    matchesStatus(item.status, "UNDER_MAINTENANCE"),
  ).length;

  return (
    <Stack spacing={3}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <TextField
            select
            label="Asset Type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            sx={{ minWidth: 200, flex: 1, maxWidth: 300 }}
          >
            <MenuItem value="">All Types</MenuItem>
            {typeOptions.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Site"
            value={selectedSite}
            onChange={(e) => setSelectedSite(e.target.value)}
            sx={{ minWidth: 200, flex: 1, maxWidth: 300 }}
          >
            <MenuItem value="">All Sites</MenuItem>
            {siteOptions.map((code) => (
              <MenuItem key={code} value={code}>
                {code}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <MetricCard label="Total Assets" value={total} color="primary" />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <MetricCard
              label="Operational"
              value={operationalCount}
              color="success"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <MetricCard
              label="Non-Operational"
              value={nonOperationalCount}
              color="error"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <MetricCard label="Damaged" value={damagedCount} color="error" />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <MetricCard
              label="Under Maintenance"
              value={underMaintenanceCount}
              color="warning"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <MetricCard label="New" value={newCount} color="success" />
          </Grid>
        </Grid>
      </Stack>
      <AdminList
        columns={columns}
        rows={filteredRows}
        searchLabel="Search assets"
        filters={[{ key: "status", label: "Status" }]}
      />
    </Stack>
  );
}
