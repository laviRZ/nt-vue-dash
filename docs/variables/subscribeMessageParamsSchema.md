[**ntcore-ts-client**](../README.md)

***

[ntcore-ts-client](../README.md) / subscribeMessageParamsSchema

# Variable: subscribeMessageParamsSchema

> `const` **subscribeMessageParamsSchema**: `ZodObject`\<\{ `options`: `ZodObject`\<\{ `all`: `ZodOptional`\<`ZodBoolean`\>; `periodic`: `ZodOptional`\<`ZodNumber`\>; `prefix`: `ZodOptional`\<`ZodBoolean`\>; `topicsonly`: `ZodOptional`\<`ZodBoolean`\>; \}, `"strip"`, \{ `all`: `boolean`; `periodic`: `number`; `prefix`: `boolean`; `topicsonly`: `boolean`; \}, \{ `all`: `boolean`; `periodic`: `number`; `prefix`: `boolean`; `topicsonly`: `boolean`; \}\>; `subuid`: `ZodNumber`; `topics`: `ZodArray`\<`ZodString`\>; \}, `"strip"`, \{ `options`: \{ `all`: `boolean`; `periodic`: `number`; `prefix`: `boolean`; `topicsonly`: `boolean`; \}; `subuid`: `number`; `topics`: `string`[]; \}, \{ `options`: \{ `all`: `boolean`; `periodic`: `number`; `prefix`: `boolean`; `topicsonly`: `boolean`; \}; `subuid`: `number`; `topics`: `string`[]; \}\>

Defined in: [packages/ntcore-ts-client/src/lib/types/schemas.ts:87](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/types/schemas.ts#L87)

Schema for the subscribe message params in the NT protocol.
