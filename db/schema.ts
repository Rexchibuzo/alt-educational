import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar({ length: 255 }).notNull().unique(),
});
