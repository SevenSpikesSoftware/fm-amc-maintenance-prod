insert into status_values (code, label, sort_order)
values
  ('NEW', 'New', 3),
  ('DAMAGED', 'Damaged', 4),
  ('UNDER_MAINTENANCE', 'Under Maintenance', 5)
on conflict (code) do nothing;

alter table status_values
  add column if not exists parent_id uuid references status_values(id);
-- New/Damaged/Under Maintenance are sub-reasons under Not Operational, tracked via parent_id
update status_values
set parent_id = (select id from status_values where code = 'NOT_OPERATIONAL')
where code in ('NEW', 'DAMAGED', 'UNDER_MAINTENANCE');