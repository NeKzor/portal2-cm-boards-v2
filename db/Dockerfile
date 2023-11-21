FROM postgres:13.4-alpine

WORKDIR /docker-entrypoint-initdb.d

COPY ./dbdump/2023.9.23_Pg_Dump.sql ./
