PGDMP     2    2                 z            toolswappin    14.1    14.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16394    toolswappin    DATABASE     h   CREATE DATABASE toolswappin WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Canada.1252';
    DROP DATABASE toolswappin;
                postgres    false            �            1259    16422    tools    TABLE     J  CREATE TABLE public.tools (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    deposit character varying(10) NOT NULL,
    availability character varying(10) NOT NULL,
    date_borrowed character varying NOT NULL,
    date_return character varying(50) NOT NULL,
    borrower_id integer,
    owner_id integer
);
    DROP TABLE public.tools;
       public         heap    postgres    false            �            1259    16421    tools_id_seq    SEQUENCE     u   CREATE SEQUENCE public.tools_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.tools_id_seq;
       public          postgres    false    212                       0    0    tools_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.tools_id_seq OWNED BY public.tools.id;
          public          postgres    false    211            �            1259    16454    user_messages    TABLE     �   CREATE TABLE public.user_messages (
    id bigint NOT NULL,
    id_recipient integer,
    id_message bigint,
    is_read boolean,
    id_sender character varying,
    send_date date
);
 !   DROP TABLE public.user_messages;
       public         heap    postgres    false            �            1259    16453    user_messages_id_seq    SEQUENCE     }   CREATE SEQUENCE public.user_messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.user_messages_id_seq;
       public          postgres    false    214                       0    0    user_messages_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.user_messages_id_seq OWNED BY public.user_messages.id;
          public          postgres    false    213            �            1259    16415    users    TABLE     �   CREATE TABLE public.users (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    area character varying(50) NOT NULL,
    passwords character varying(50) NOT NULL,
    user_name character varying(50) NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16414    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    210            	           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    209            g           2604    16425    tools id    DEFAULT     d   ALTER TABLE ONLY public.tools ALTER COLUMN id SET DEFAULT nextval('public.tools_id_seq'::regclass);
 7   ALTER TABLE public.tools ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212            h           2604    16457    user_messages id    DEFAULT     t   ALTER TABLE ONLY public.user_messages ALTER COLUMN id SET DEFAULT nextval('public.user_messages_id_seq'::regclass);
 ?   ALTER TABLE public.user_messages ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    214    214            f           2604    16418    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            �          0    16422    tools 
   TABLE DATA           s   COPY public.tools (id, name, deposit, availability, date_borrowed, date_return, borrower_id, owner_id) FROM stdin;
    public          postgres    false    212   F                  0    16454    user_messages 
   TABLE DATA           d   COPY public.user_messages (id, id_recipient, id_message, is_read, id_sender, send_date) FROM stdin;
    public          postgres    false    214   �       �          0    16415    users 
   TABLE DATA           E   COPY public.users (id, name, area, passwords, user_name) FROM stdin;
    public          postgres    false    210   �       
           0    0    tools_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.tools_id_seq', 1, true);
          public          postgres    false    211                       0    0    user_messages_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.user_messages_id_seq', 1, false);
          public          postgres    false    213                       0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    209            l           2606    16427    tools tools_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.tools
    ADD CONSTRAINT tools_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.tools DROP CONSTRAINT tools_pkey;
       public            postgres    false    212            n           2606    16459     user_messages user_messages_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.user_messages
    ADD CONSTRAINT user_messages_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.user_messages DROP CONSTRAINT user_messages_pkey;
       public            postgres    false    214            j           2606    16420    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210            o           2606    16460 -   user_messages user_messages_id_recipient_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_messages
    ADD CONSTRAINT user_messages_id_recipient_fkey FOREIGN KEY (id_recipient) REFERENCES public.users(id);
 W   ALTER TABLE ONLY public.user_messages DROP CONSTRAINT user_messages_id_recipient_fkey;
       public          postgres    false    214    210    3178            �   -   x�3�N,�4�30���44�70�7202�qr��"�=... ��n             x������ � �      �   J   x�3����t*-���,H,..�/J1��M��,*���2���,I��.�S����S/��2�LM.�M�K����� s�9     