import Database from "@rcompat/sql/sqlite";

const db = new Database(":memory:", { create: true });
