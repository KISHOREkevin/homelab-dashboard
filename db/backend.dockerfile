FROM alpine:latest


ARG PB_VERSION=0.28.1

RUN apk add --no-cache \
  unzip \
  ca-certificates

ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip

RUN unzip /tmp/pb.zip -d .

COPY ./pb_migrations/ /pb_migrations

COPY ./pb_data /pb_data

EXPOSE 8090

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090","--origins=*"]


