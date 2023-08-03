--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: ltree; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS ltree WITH SCHEMA public;


--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


SET default_table_access_method = heap;

--
-- Name: comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.comments (
    post bigint NOT NULL,
    id public.ltree NOT NULL,
    content text NOT NULL,
    "time" timestamp without time zone DEFAULT now() NOT NULL,
    attitude "char",
    mutagen text DEFAULT ''::text NOT NULL
);


--
-- Name: posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.posts (
    id bigint NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    views bigint DEFAULT 0 NOT NULL,
    "time" timestamp without time zone DEFAULT now() NOT NULL,
    tags text DEFAULT ''::text NOT NULL,
    mutagen text DEFAULT ''::text NOT NULL,
    caste integer DEFAULT 0 NOT NULL,
    search_tsv tsvector GENERATED ALWAYS AS (((to_tsvector('simple'::regconfig, title) || to_tsvector('russian'::regconfig, content)) || to_tsvector('simple'::regconfig, tags))) STORED NOT NULL
);


--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.posts ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.posts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (post, id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: comments commnets_to_posts; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT commnets_to_posts FOREIGN KEY (post) REFERENCES public.posts(id) ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

