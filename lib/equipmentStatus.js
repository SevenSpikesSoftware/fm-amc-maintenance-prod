// Exclusion-based on purpose: any new sub-status under "Not Operational" is automatically caught here, no code change needed.

export function isNotOperational(status) {
  const s = (status ?? "").trim().toLowerCase();
  if (!s) return false; // no status set — don't hide equipment over missing data
  return s !== "operational";
}
