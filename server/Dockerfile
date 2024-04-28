FROM rust:1.77.2-bullseye

RUN apt-get update && \
    apt-get install -y netcat && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /opt/entrypoint

RUN cargo install cargo-watch

COPY server-entrypoint.sh ./
RUN chmod +x server-entrypoint.sh

ENV SQLX_OFFLINE true
EXPOSE 8080

ENTRYPOINT ["/opt/entrypoint/server-entrypoint.sh"]
