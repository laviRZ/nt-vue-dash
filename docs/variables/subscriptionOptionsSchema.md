[**ntcore-ts-client**](../README.md)

***

[ntcore-ts-client](../README.md) / subscriptionOptionsSchema

# Variable: subscriptionOptionsSchema

> `const` **subscriptionOptionsSchema**: `ZodObject`\<\{ `all`: `ZodOptional`\<`ZodBoolean`\>; `periodic`: `ZodOptional`\<`ZodNumber`\>; `prefix`: `ZodOptional`\<`ZodBoolean`\>; `topicsonly`: `ZodOptional`\<`ZodBoolean`\>; \}, `"strip"`, \{ `all`: `boolean`; `periodic`: `number`; `prefix`: `boolean`; `topicsonly`: `boolean`; \}, \{ `all`: `boolean`; `periodic`: `number`; `prefix`: `boolean`; `topicsonly`: `boolean`; \}\>

Defined in: [packages/ntcore-ts-client/src/lib/types/schemas.ts:58](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/types/schemas.ts#L58)

Schema for subscription options in the NT protocol.
