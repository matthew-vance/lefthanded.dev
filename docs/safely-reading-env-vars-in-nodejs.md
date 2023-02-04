---
title: Safely Reading Environment Variables in NodeJS
tags: [nodejs, javascript, typescript]
---

Since variables read from `process.env` might not be defined at runtime it is important to verify them prior to referencing them in code.

:::danger

```typescript
// SOME_CLIENT_ID could be undefined!
const someClientId = process.env.SOME_CLIENT_ID;
```

:::

## With [Zod](https://zod.dev/)

```typescript
import { z } from "zod";

const validEnvironmentValues = ["development", "test", "production"];

const envSchema = z.object({
  NODE_ENV: z
    .string()
    .trim()
    .refine((value) => validEnvironmentValues.includes(value), {
      message: `Value must be one of [${validEnvironmentValues.join(", ")}]`,
    }),
  SOME_CLIENT_ID: z.string().trim(),
  SOME_CLIENT_SECRET: z.string().trim(),
});

// An error will be thrown if process.env does not fit the schema.
const env = envSchema.parse(process.env);

// Variables can now be safely referenced from env.
const someClientId = env.SOME_CLIENT_ID;
```

## With [Envalid](https://github.com/af/envalid)

```typescript
import { cleanEnv, str } from "envalid";

// Will throw an error if validation fails.
const env = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ["development", "test", "production"],
    default: "development",
  }),
  SOME_CLIENT_ID: str(),
  SOME_CLIENT_SECRET: str(),
});

// Variables can now be safely referenced from env.
const someClientId = env.SOME_CLIENT_ID;
```
