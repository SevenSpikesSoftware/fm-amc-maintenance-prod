import { Card, CardContent, Typography } from "@mui/material";

export default function MetricCard({ label, value, color }) {
  return (
    <Card
      variant="outlined"
      sx={{ borderTop: 4, borderTopColor: `${color}.main` }}
    >
      <CardContent>
        <Typography color="text.secondary" variant="body2">
          {label}
        </Typography>
        <Typography color={`${color}.dark`} variant="h4">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
