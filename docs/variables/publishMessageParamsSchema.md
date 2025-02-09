[**ntcore-ts-client**](../README.md)

***

[ntcore-ts-client](../README.md) / publishMessageParamsSchema

# Variable: publishMessageParamsSchema

> `const` **publishMessageParamsSchema**: `ZodObject`\<\{ `name`: `ZodString`; `properties`: `ZodObject`\<\{ `cached`: `ZodOptional`\<`ZodBoolean`\>; `persistent`: `ZodOptional`\<`ZodBoolean`\>; `retained`: `ZodOptional`\<`ZodBoolean`\>; \}, `"strip"`, \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}, \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}\>; `pubuid`: `ZodNumber`; `type`: `ZodUnion`\<\[`ZodLiteral`\<`"boolean"`\>, `ZodLiteral`\<`"double"`\>, `ZodLiteral`\<`"int"`\>, `ZodLiteral`\<`"float"`\>, `ZodLiteral`\<`"string"`\>, `ZodLiteral`\<`"json"`\>, `ZodLiteral`\<`"raw"`\>\]\>; \}, `"strip"`, \{ `name`: `string`; `properties`: \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}; `pubuid`: `number`; `type`: `"string"` \| `"boolean"` \| `"float"` \| `"double"` \| `"int"` \| `"json"` \| `"raw"` \| `"rpc"` \| `"msgpack"` \| `"protobuf"` \| `"boolean[]"` \| `"double[]"` \| `"int[]"` \| `"float[]"` \| `"string[]"`; \}, \{ `name`: `string`; `properties`: \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}; `pubuid`: `number`; `type`: `"string"` \| `"boolean"` \| `"float"` \| `"double"` \| `"int"` \| `"json"` \| `"raw"` \| `"rpc"` \| `"msgpack"` \| `"protobuf"` \| `"boolean[]"` \| `"double[]"` \| `"int[]"` \| `"float[]"` \| `"string[]"`; \}\>

Defined in: [packages/ntcore-ts-client/src/lib/types/schemas.ts:68](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/types/schemas.ts#L68)

Schema for the publish message in the NT protocol.
