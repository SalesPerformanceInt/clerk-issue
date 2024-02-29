alter table "public"."event" add column "timestamp" timestamptz
 not null default now();
