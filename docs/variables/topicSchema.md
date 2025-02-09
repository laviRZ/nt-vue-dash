[**ntcore-ts-client**](../README.md)

***

[ntcore-ts-client](../README.md) / topicSchema

# Variable: topicSchema

> `const` **topicSchema**: `ZodObject`\<\{ `id`: `ZodNumber`; `name`: `ZodString`; `properties`: `ZodObject`\<\{ `cached`: `ZodOptional`\<`ZodBoolean`\>; `persistent`: `ZodOptional`\<`ZodBoolean`\>; `retained`: `ZodOptional`\<`ZodBoolean`\>; \}, `"strip"`, \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}, \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}\>; `type`: `ZodUnion`\<\[`ZodLiteral`\<`"boolean"`\>, `ZodLiteral`\<`"double"`\>, `ZodLiteral`\<`"int"`\>, `ZodLiteral`\<`"float"`\>, `ZodLiteral`\<`"string"`\>, `ZodLiteral`\<`"json"`\>, `ZodLiteral`\<`"raw"`\>\]\>; \}, `"strip"`, \{ `id`: `number`; `name`: `string`; `properties`: \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}; `type`: `"string"` \| `"boolean"` \| `"float"` \| `"double"` \| `"int"` \| `"json"` \| `"raw"` \| `"rpc"` \| `"msgpack"` \| `"protobuf"` \| `"boolean[]"` \| `"double[]"` \| `"int[]"` \| `"float[]"` \| `"string[]"`; \}, \{ `id`: `number`; `name`: `string`; `properties`: \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}; `type`: `"string"` \| `"boolean"` \| `"float"` \| `"double"` \| `"int"` \| `"json"` \| `"raw"` \| `"rpc"` \| `"msgpack"` \| `"protobuf"` \| `"boolean[]"` \| `"double[]"` \| `"int[]"` \| `"float[]"` \| `"string[]"`; \}\>

Defined in: [packages/ntcore-ts-client/src/lib/types/schemas.ts:50](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/types/schemas.ts#L50)

Schema for a topic in the NT protocol.
