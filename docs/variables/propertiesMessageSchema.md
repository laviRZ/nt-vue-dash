[**ntcore-ts-client**](../README.md)

***

[ntcore-ts-client](../README.md) / propertiesMessageSchema

# Variable: propertiesMessageSchema

> `const` **propertiesMessageSchema**: `ZodObject`\<\{ `method`: `ZodLiteral`\<`"properties"`\>; `params`: `ZodObject`\<\{ `ack`: `ZodBoolean`; `name`: `ZodString`; \}, `"strip"`, \{ `ack`: `boolean`; `name`: `string`; \}, \{ `ack`: `boolean`; `name`: `string`; \}\>; \}, `"strip"`, \{ `method`: `"properties"`; `params`: \{ `ack`: `boolean`; `name`: `string`; \}; \}, \{ `method`: `"properties"`; `params`: \{ `ack`: `boolean`; `name`: `string`; \}; \}\>

Defined in: [packages/ntcore-ts-client/src/lib/types/schemas.ts:158](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/types/schemas.ts#L158)

Schema for a properties message in the NT protocol.
