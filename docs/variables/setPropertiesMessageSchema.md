[**ntcore-ts-client**](../README.md)

***

[ntcore-ts-client](../README.md) / setPropertiesMessageSchema

# Variable: setPropertiesMessageSchema

> `const` **setPropertiesMessageSchema**: `ZodObject`\<\{ `method`: `ZodLiteral`\<`"setproperties"`\>; `params`: `ZodObject`\<\{ `name`: `ZodString`; `update`: `ZodObject`\<\{ `cached`: `ZodOptional`\<`ZodBoolean`\>; `persistent`: `ZodOptional`\<`ZodBoolean`\>; `retained`: `ZodOptional`\<`ZodBoolean`\>; \}, `"strip"`, \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}, \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}\>; \}, `"strip"`, \{ `name`: `string`; `update`: \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}; \}, \{ `name`: `string`; `update`: \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}; \}\>; \}, `"strip"`, \{ `method`: `"setproperties"`; `params`: \{ `name`: `string`; `update`: \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}; \}; \}, \{ `method`: `"setproperties"`; `params`: \{ `name`: `string`; `update`: \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}; \}; \}\>

Defined in: [packages/ntcore-ts-client/src/lib/types/schemas.ts:128](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/types/schemas.ts#L128)

Schema for a setproperties message in the NT protocol.
