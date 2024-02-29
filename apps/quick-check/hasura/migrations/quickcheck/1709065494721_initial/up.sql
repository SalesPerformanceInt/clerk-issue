SET check_function_bodies = false;
CREATE FUNCTION public.nanoid() RETURNS text
    LANGUAGE plpgsql PARALLEL SAFE
    AS $$
BEGIN
    RETURN uuid_in(overlay(overlay(md5(random()::text || ':' || random()::text) placing '4' from 13) placing to_hex(floor(random()*(11-8+1) + 8)::int)::text from 17)::cstring);
END
$$;
CREATE FUNCTION public.temp_uuid() RETURNS uuid
    LANGUAGE plpgsql PARALLEL SAFE
    AS $$
BEGIN
    RETURN uuid_in(overlay(overlay(md5(random()::text || ':' || random()::text) placing '4' from 13) placing to_hex(floor(random()*(11-8+1) + 8)::int)::text from 17)::cstring);
END
$$;
CREATE TABLE public.event (
    id uuid DEFAULT public.temp_uuid() NOT NULL,
    stream_name text NOT NULL,
    type text NOT NULL,
    data jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.link_token (
    id text DEFAULT public.temp_uuid() NOT NULL,
    user_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    active boolean DEFAULT true NOT NULL,
    tenant_id text NOT NULL
);
CREATE TABLE public.tenant (
    tenant_id text NOT NULL,
    theme_id text DEFAULT 'blt2654e467320c07a2'::text NOT NULL
);
CREATE TABLE public."user" (
    email text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    language_preference text DEFAULT 'en-US'::text NOT NULL,
    user_id uuid DEFAULT public.temp_uuid() NOT NULL,
    phone_number text,
    timezone text DEFAULT 'EDT'::text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    sms_enabled boolean DEFAULT false NOT NULL,
    tenant_id text NOT NULL,
    next_user_question_id uuid,
    daily_email_enabled boolean DEFAULT true NOT NULL,
    show_leaderboard boolean DEFAULT true NOT NULL
);
CREATE TABLE public.user_answer (
    id uuid DEFAULT public.temp_uuid() NOT NULL,
    question_id uuid NOT NULL,
    user_id uuid NOT NULL,
    correct boolean NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.user_enrollment (
    id uuid DEFAULT public.temp_uuid() NOT NULL,
    user_id uuid NOT NULL,
    taxonomy_id text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    score integer DEFAULT 0 NOT NULL,
    rank integer,
    start_date date NOT NULL,
    expiration_date date
);
CREATE TABLE public.user_question (
    id uuid DEFAULT public.temp_uuid() NOT NULL,
    user_id uuid NOT NULL,
    user_enrollment_id uuid NOT NULL,
    taxonomy_id text NOT NULL,
    question_id text NOT NULL,
    active_on date,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    streak integer DEFAULT 0 NOT NULL,
    latest_review_gap integer DEFAULT 3 NOT NULL,
    difficulty numeric DEFAULT 0.3 NOT NULL,
    last_answered_on date,
    retired_on date,
    title text
);
ALTER TABLE ONLY public.event
    ADD CONSTRAINT event_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.link_token
    ADD CONSTRAINT link_token_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.tenant
    ADD CONSTRAINT tenant_pkey PRIMARY KEY (tenant_id);
ALTER TABLE ONLY public.user_answer
    ADD CONSTRAINT user_answer_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.user_enrollment
    ADD CONSTRAINT user_enrollment_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (user_id);
ALTER TABLE ONLY public.user_question
    ADD CONSTRAINT user_question_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.link_token
    ADD CONSTRAINT link_token_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(user_id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.user_answer
    ADD CONSTRAINT user_answer_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.user_question(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.user_answer
    ADD CONSTRAINT user_answer_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(user_id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.user_enrollment
    ADD CONSTRAINT user_enrollment_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(user_id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_next_user_question_id_fkey FOREIGN KEY (next_user_question_id) REFERENCES public.user_question(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public.user_question
    ADD CONSTRAINT user_question_user_enrollment_id_fkey FOREIGN KEY (user_enrollment_id) REFERENCES public.user_enrollment(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.user_question
    ADD CONSTRAINT user_question_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(user_id) ON UPDATE CASCADE ON DELETE CASCADE;
