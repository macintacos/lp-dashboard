# dashboard

A simple comment moderation dashboard made using [Airplane](https://airplane.dev)!

## Developing

1. [Create a free Airplane account](https://app.airplane.dev/signup)!
1. [Install and configure the Airplane CLI](https://docs.airplane.dev/platform/airplane-cli#installing-the-cli)...
1. Clone this repository and install the dependencies:

   ```shell
   git clone https://github.com/lukephillippi/dashboard.git && \
       cd dashboard && \
       npm install -y
   ```

1. [Create an Airplane dev config file](https://docs.airplane.dev/dev-lifecycle/dev-config-file) to configure your `scratch` [MongoDB resource](https://docs.airplane.dev/resources/mongodb) (replacing `$MONGODB_*` variables accordingly):

   ```yaml
   # ./airplane.dev.yaml
   configVars: {}
   resources:
     - database: $MONGODB_DATABASE
       dsn: "mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_DATABASE}"
       host: $MONGODB_HOST
       kind: mongodb
       name: scratch
       password: $MONGODB_PASSWORD
       port: "5432"
       slug: scratch
       ssl: require
       username: $MONGODB_USERNAME
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
