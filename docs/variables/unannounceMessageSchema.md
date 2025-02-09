[**ntcore-ts-client**](../README.md)

***

[ntcore-ts-client](../README.md) / unannounceMessageSchema

# Variable: unannounceMessageSchema

> `const` **unannounceMessageSchema**: `ZodObject`\<\{ `method`: `ZodLiteral`\<`"unannounce"`\>; `params`: `ZodObject`\<\{ `id`: `ZodNumber`; `name`: `ZodString`; \}, `"strip"`, \{ `id`: `number`; `name`: `string`; \}, \{ `id`: `number`; `name`: `string`; \}\>; \}, `"strip"`, \{ `method`: `"unannounce"`; `params`: \{ `id`: `number`; `name`: `string`; \}; \}, \{ `method`: `"unannounce"`; `params`: \{ `id`: `number`; `name`: `string`; \}; \}\>

Defined in: [packages/ntcore-ts-client/src/lib/types/schemas.ts:152](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/types/schemas.ts#L152)

Schema for an unannounce message in the NT protocol.
