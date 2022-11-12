# dashboard

A simple comment moderation dashboard made using [Airplane](https://airplane.dev)!

## Developing

1. [Create a free Airplane account](https://app.airplane.dev/signup)!
1. [Install and configure the Airplane CLI](https://docs.airplane.dev/platform/airplane-cli#installing-the-cli)...
1. Clone this repository and install the NPM dependecies:

   ```shell
   git clone https://github.com/lukephillippi/dashboard.git && \
       cd dashboard && \
       npm install -y
   ```

1. [Create a dev config file](https://docs.airplane.dev/dev-lifecycle/dev-config-file) to configure your `scratch` [PostgreSQL resource](https://docs.airplane.dev/resources/postgresql) (replacing `$POSTGRESQL_*` variables accordingly):

   ```yaml
   # ./airplane.dev.yaml
   configVars: {}
   resources:
     - database: $POSTGRESQL_DATABASE
       dsn: "postgres://${POSTGRESQL_USERNAME}:${POSTGRESQL_PASSWORD}@${POSTGRESQL_HOST}/${POSTGRESQL_DATABASE}"
       host: $POSTGRESQL_HOST
       kind: postgres
       name: scratch
       password: $POSTGRESQL_PASSWORD
       port: "5432"
       slug: scratch
       ssl: require
       username: $POSTGRESQL_USERNAME
   ```

1. Create the `comments` table:

   ```sql
   CREATE TABLE "public"."comments" (
       "id" uuid NOT NULL DEFAULT gen_random_uuid (),
       "content" text NOT NULL,
       "is_approved" bool,
       PRIMARY KEY ("id")
   );
   ```

1. Start the local Airplane development server:

   ```shell
   airplane dev
   ```

1. _Iterate!_
1. Deploy your dashboard view:

   ```shell
   airplane deploy .
   ```
