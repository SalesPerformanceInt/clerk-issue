alter table "public"."event" alter column "timestamp" set default now();
alter table "public"."event" alter column "timestamp" drop not null;
alter table "public"."event" add column "timestamp" timestamptz;
