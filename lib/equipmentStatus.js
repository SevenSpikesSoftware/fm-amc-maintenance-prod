// Exclusion-based on purpose: any new sub-status under "Not Operational" is automatically caught here, no code change needed.

export function isNotOperational(status) {
  const s = (status ?? "").trim().toLowerCase();
  if (!s) return false; // no status set — don't hide equipment over missing data
  return s !== "operational";
}
function normalize(status) {
  return (status ?? "").trim().toLowerCase().replace(/_/g, " ");
}

export function matchesStatus(status, code) {
  return normalize(status) === normalize(code);
}
