create extension if not exists pgcrypto;

create table if not exists app_users (
  id uuid primary key default gen_random_uuid(),
  phone text not null unique,
  password_hash text not null,
  nickname text not null default '某只猪',
  avatar text not null default '🐷',
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references app_users(id) on delete cascade,
  token_hash text not null unique,
  expires_at timestamptz not null,
  created_at timestamptz not null default now()
);

create table if not exists answers (
  id uuid primary key default gen_random_uuid(),
  text text not null,
  mood text not null default 'book',
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists question_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references app_users(id) on delete set null,
  question text not null,
  answer_text text not null,
  answer_id uuid references answers(id) on delete set null,
  mood text,
  created_at timestamptz not null default now()
);

create table if not exists feedback (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references app_users(id) on delete set null,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references app_users(id) on delete cascade,
  answer_text text not null,
  question text,
  created_at timestamptz not null default now()
);

create index if not exists sessions_token_hash_idx on sessions(token_hash);
create index if not exists question_logs_created_at_idx on question_logs(created_at desc);
create index if not exists feedback_created_at_idx on feedback(created_at desc);
create index if not exists answers_mood_active_idx on answers(mood, active);
create index if not exists favorites_user_created_at_idx on favorites(user_id, created_at desc);

alter table app_users enable row level security;
alter table sessions enable row level security;
alter table answers enable row level security;
alter table question_logs enable row level security;
alter table feedback enable row level security;
alter table favorites enable row level security;

drop policy if exists "service role manages app_users" on app_users;
drop policy if exists "service role manages sessions" on sessions;
drop policy if exists "service role manages answers" on answers;
drop policy if exists "service role manages question_logs" on question_logs;
drop policy if exists "service role manages feedback" on feedback;
drop policy if exists "service role manages favorites" on favorites;

create policy "service role manages app_users" on app_users for all to service_role using (true) with check (true);
create policy "service role manages sessions" on sessions for all to service_role using (true) with check (true);
create policy "service role manages answers" on answers for all to service_role using (true) with check (true);
create policy "service role manages question_logs" on question_logs for all to service_role using (true) with check (true);
create policy "service role manages feedback" on feedback for all to service_role using (true) with check (true);
create policy "service role manages favorites" on favorites for all to service_role using (true) with check (true);
