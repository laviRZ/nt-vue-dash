[**ntcore-ts-client**](../README.md)

***

[ntcore-ts-client](../README.md) / unsubscribeMessageSchema

# Variable: unsubscribeMessageSchema

> `const` **unsubscribeMessageSchema**: `ZodObject`\<\{ `method`: `ZodLiteral`\<`"unsubscribe"`\>; `params`: `ZodObject`\<\{ `subuid`: `ZodNumber`; \}, `"strip"`, \{ `subuid`: `number`; \}, \{ `subuid`: `number`; \}\>; \}, `"strip"`, \{ `method`: `"unsubscribe"`; `params`: \{ `subuid`: `number`; \}; \}, \{ `method`: `"unsubscribe"`; `params`: \{ `subuid`: `number`; \}; \}\>

Defined in: [packages/ntcore-ts-client/src/lib/types/schemas.ts:140](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/types/schemas.ts#L140)

Schema for an unsubscribe message in the NT protocol.
