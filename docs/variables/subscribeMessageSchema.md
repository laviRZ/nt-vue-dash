[**ntcore-ts-client**](../README.md)

***

[ntcore-ts-client](../README.md) / subscribeMessageSchema

# Variable: subscribeMessageSchema

> `const` **subscribeMessageSchema**: `ZodObject`\<\{ `method`: `ZodLiteral`\<`"subscribe"`\>; `params`: `ZodObject`\<\{ `options`: `ZodObject`\<\{ `all`: `ZodOptional`\<`ZodBoolean`\>; `periodic`: `ZodOptional`\<`ZodNumber`\>; `prefix`: `ZodOptional`\<`ZodBoolean`\>; `topicsonly`: `ZodOptional`\<`ZodBoolean`\>; \}, `"strip"`, \{ `all`: `boolean`; `periodic`: `number`; `prefix`: `boolean`; `topicsonly`: `boolean`; \}, \{ `all`: `boolean`; `periodic`: `number`; `prefix`: `boolean`; `topicsonly`: `boolean`; \}\>; `subuid`: `ZodNumber`; `topics`: `ZodArray`\<`ZodString`\>; \}, `"strip"`, \{ `options`: \{ `all`: `boolean`; `periodic`: `number`; `prefix`: `boolean`; `topicsonly`: `boolean`; \}; `subuid`: `number`; `topics`: `string`[]; \}, \{ `options`: \{ `all`: `boolean`; `periodic`: `number`; `prefix`: `boolean`; `topicsonly`: `boolean`; \}; `subuid`: `number`; `topics`: `string`[]; \}\>; \}, `"strip"`, \{ `method`: `"subscribe"`; `params`: \{ `options`: \{ `all`: `boolean`; `periodic`: `number`; `prefix`: `boolean`; `topicsonly`: `boolean`; \}; `subuid`: `number`; `topics`: `string`[]; \}; \}, \{ `method`: `"subscribe"`; `params`: \{ `options`: \{ `all`: `boolean`; `periodic`: `number`; `prefix`: `boolean`; `topicsonly`: `boolean`; \}; `subuid`: `number`; `topics`: `string`[]; \}; \}\>

Defined in: [packages/ntcore-ts-client/src/lib/types/schemas.ts:134](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/types/schemas.ts#L134)

Schema for a subscribe message in the NT protocol.
