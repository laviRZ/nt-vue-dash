[**ntcore-ts-client**](../README.md)

***

[ntcore-ts-client](../README.md) / NetworkTablesTopic

# Class: NetworkTablesTopic\<T\>

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/topic.ts:16](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/topic.ts#L16)

## Extends

- `NetworkTablesBaseTopic`\<`T`\>

## Type Parameters

• **T** *extends* [`NetworkTablesTypes`](../type-aliases/NetworkTablesTypes.md)

## Constructors

### new NetworkTablesTopic()

> **new NetworkTablesTopic**\<`T`\>(`client`, `name`, `typeInfo`, `defaultValue`?): [`NetworkTablesTopic`](NetworkTablesTopic.md)\<`T`\>

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/topic.ts:56](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/topic.ts#L56)

Creates a new topic. This should only be done after the
base NTCore client has been initialized.

#### Parameters

##### client

`PubSubClient`

The client that owns the topic.

##### name

`string`

The name of the topic.

##### typeInfo

[`NetworkTablesTypeInfo`](../type-aliases/NetworkTablesTypeInfo.md)

The type info for the topic.

##### defaultValue?

`T`

The default value for the topic.

#### Returns

[`NetworkTablesTopic`](NetworkTablesTopic.md)\<`T`\>

#### Overrides

`NetworkTablesBaseTopic<T>.constructor`

## Properties

### \_announceParams

> `protected` **\_announceParams**: `null` \| \{ `id`: `number`; `name`: `string`; `properties`: \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}; `pubuid`: `number`; `type`: `"string"` \| `"boolean"` \| `"float"` \| `"double"` \| `"int"` \| `"json"` \| `"raw"` \| `"rpc"` \| `"msgpack"` \| `"protobuf"` \| `"boolean[]"` \| `"double[]"` \| `"int[]"` \| `"float[]"` \| `"string[]"`; \}

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts:20](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts#L20)

#### Inherited from

`NetworkTablesBaseTopic._announceParams`

***

### \_lastChangedTime?

> `protected` `optional` **\_lastChangedTime**: `number`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts:19](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts#L19)

#### Inherited from

`NetworkTablesBaseTopic._lastChangedTime`

***

### client

> `protected` **client**: `PubSubClient`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts:16](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts#L16)

#### Inherited from

`NetworkTablesBaseTopic.client`

***

### type

> `readonly` **type**: `"regular"` = `'regular'`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/topic.ts:17](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/topic.ts#L17)

#### Overrides

`NetworkTablesBaseTopic.type`

## Accessors

### announced

#### Get Signature

> **get** **announced**(): `boolean`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts:65](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts#L65)

Whether the topic has been announced.

##### Returns

`boolean`

Whether the topic has been announced.

#### Inherited from

`NetworkTablesBaseTopic.announced`

***

### id

#### Get Signature

> **get** **id**(): `undefined` \| `number`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts:41](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts#L41)

Gets the ID of the topic.

##### Returns

`undefined` \| `number`

The ID of the topic.

#### Inherited from

`NetworkTablesBaseTopic.id`

***

### lastChangedTime

#### Get Signature

> **get** **lastChangedTime**(): `undefined` \| `number`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts:57](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts#L57)

Gets the server time of the last value change.

##### Returns

`undefined` \| `number`

The server time of the last value change.

#### Inherited from

`NetworkTablesBaseTopic.lastChangedTime`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts:49](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts#L49)

Gets the name of the topic.

##### Returns

`string`

The name of the topic.

#### Inherited from

`NetworkTablesBaseTopic.name`

***

### publisher

#### Get Signature

> **get** **publisher**(): `boolean`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/topic.ts:36](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/topic.ts#L36)

Gets whether the client is the publisher of the topic.

##### Returns

`boolean`

Whether the client is the publisher of the topic.

***

### pubuid

#### Get Signature

> **get** **pubuid**(): `undefined` \| `number`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/topic.ts:44](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/topic.ts#L44)

Gets the UID of the publisher.

##### Returns

`undefined` \| `number`

The UID of the publisher, or undefined if the client is not the publisher.

***

### subscribers

#### Get Signature

> **get** **subscribers**(): `Map`\<`number`, \{ `callback`: `CallbackFn`\<`T`\>; `options`: \{ `all`: `boolean`; `periodic`: `number`; `prefix`: `boolean`; `topicsonly`: `boolean`; \}; \}\>

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts:73](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts#L73)

Gets the subscribers to the topic.

##### Returns

`Map`\<`number`, \{ `callback`: `CallbackFn`\<`T`\>; `options`: \{ `all`: `boolean`; `periodic`: `number`; `prefix`: `boolean`; `topicsonly`: `boolean`; \}; \}\>

The subscribers to the topic.

#### Inherited from

`NetworkTablesBaseTopic.subscribers`

***

### typeInfo

#### Get Signature

> **get** **typeInfo**(): [`NetworkTablesTypeInfo`](../type-aliases/NetworkTablesTypeInfo.md)

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/topic.ts:28](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/topic.ts#L28)

Gets the type info for the topic.

##### Returns

[`NetworkTablesTypeInfo`](../type-aliases/NetworkTablesTypeInfo.md)

The type info for the topic.

## Methods

### announce()

> **announce**(`params`): `void`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/topic.ts:116](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/topic.ts#L116)

Marks the topic as announced. This should only be called by the PubSubClient.

#### Parameters

##### params

The parameters of the announcement.

###### id

`number` = `...`

###### name

`string` = `...`

###### properties

\{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \} = `topicPropertiesSchema`

###### properties.cached

`boolean` = `...`

###### properties.persistent

`boolean` = `...`

###### properties.retained

`boolean` = `...`

###### pubuid

`number` = `...`

###### type

`"string"` \| `"boolean"` \| `"float"` \| `"double"` \| `"int"` \| `"json"` \| `"raw"` \| `"rpc"` \| `"msgpack"` \| `"protobuf"` \| `"boolean[]"` \| `"double[]"` \| `"int[]"` \| `"float[]"` \| `"string[]"` = `typeStringSchema`

#### Returns

`void`

#### Overrides

`NetworkTablesBaseTopic.announce`

***

### getValue()

> **getValue**(): `null` \| `T`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/topic.ts:92](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/topic.ts#L92)

Gets the value of the topic.

#### Returns

`null` \| `T`

The value of the topic.

***

### isPrefix()

> **isPrefix**(): `this is NetworkTablesPrefixTopic`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts:33](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts#L33)

#### Returns

`this is NetworkTablesPrefixTopic`

#### Inherited from

`NetworkTablesBaseTopic.isPrefix`

***

### isRegular()

> **isRegular**(): this is NetworkTablesTopic\<string \| number \| boolean \| string\[\] \| ArrayBuffer \| boolean\[\] \| number\[\]\>

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts:29](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts#L29)

#### Returns

this is NetworkTablesTopic\<string \| number \| boolean \| string\[\] \| ArrayBuffer \| boolean\[\] \| number\[\]\>

#### Inherited from

`NetworkTablesBaseTopic.isRegular`

***

### publish()

> **publish**(`properties`, `id`?): `Promise`\<`void` \| \{ `method`: `"announce"`; `params`: \{ `id`: `number`; `name`: `string`; `properties`: \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}; `pubuid`: `number`; `type`: `"string"` \| `"boolean"` \| `"float"` \| `"double"` \| `"int"` \| `"json"` \| `"raw"` \| `"rpc"` \| `"msgpack"` \| `"protobuf"` \| `"boolean[]"` \| `"double[]"` \| `"int[]"` \| `"float[]"` \| `"string[]"`; \}; \}\>

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/topic.ts:176](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/topic.ts#L176)

Publishes the topic.

#### Parameters

##### properties

The properties to publish the topic with.

###### cached

`boolean` = `...`

###### persistent

`boolean` = `...`

###### retained

`boolean` = `...`

##### id?

`number`

The UID of the publisher. You must verify that the ID is not already in use.

#### Returns

`Promise`\<`void` \| \{ `method`: `"announce"`; `params`: \{ `id`: `number`; `name`: `string`; `properties`: \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}; `pubuid`: `number`; `type`: `"string"` \| `"boolean"` \| `"float"` \| `"double"` \| `"int"` \| `"json"` \| `"raw"` \| `"rpc"` \| `"msgpack"` \| `"protobuf"` \| `"boolean[]"` \| `"double[]"` \| `"int[]"` \| `"float[]"` \| `"string[]"`; \}; \}\>

A promise that resolves when the topic is published.

***

### republish()

> **republish**(`client`): `Promise`\<`void` \| \{ `method`: `"announce"`; `params`: \{ `id`: `number`; `name`: `string`; `properties`: \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}; `pubuid`: `number`; `type`: `"string"` \| `"boolean"` \| `"float"` \| `"double"` \| `"int"` \| `"json"` \| `"raw"` \| `"rpc"` \| `"msgpack"` \| `"protobuf"` \| `"boolean[]"` \| `"double[]"` \| `"int[]"` \| `"float[]"` \| `"string[]"`; \}; \}\>

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/topic.ts:211](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/topic.ts#L211)

Republishes the topic.

#### Parameters

##### client

`PubSubClient`

The client to republish with.

#### Returns

`Promise`\<`void` \| \{ `method`: `"announce"`; `params`: \{ `id`: `number`; `name`: `string`; `properties`: \{ `cached`: `boolean`; `persistent`: `boolean`; `retained`: `boolean`; \}; `pubuid`: `number`; `type`: `"string"` \| `"boolean"` \| `"float"` \| `"double"` \| `"int"` \| `"json"` \| `"raw"` \| `"rpc"` \| `"msgpack"` \| `"protobuf"` \| `"boolean[]"` \| `"double[]"` \| `"int[]"` \| `"float[]"` \| `"string[]"`; \}; \}\>

A promise that resolves when the topic is republished.

***

### resubscribeAll()

> **resubscribeAll**(`client`): `void`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/topic.ts:150](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/topic.ts#L150)

Resubscribes all local subscribers.

#### Parameters

##### client

`PubSubClient`

The client to resubscribe with.

#### Returns

`void`

#### Overrides

`NetworkTablesBaseTopic.resubscribeAll`

***

### setProperties()

> **setProperties**(`persistent`?, `retained`?): `Promise`\<\{ `method`: `"properties"`; `params`: \{ `ack`: `boolean`; `name`: `string`; \}; \}\>

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts:156](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts#L156)

Sets the properties of the topic.

#### Parameters

##### persistent?

`boolean`

If true, the last set value will be periodically saved to persistent storage on the server and be restored during server startup. Topics with this property set to true will not be deleted by the server when the last publisher stops publishing.

##### retained?

`boolean`

Topics with this property set to true will not be deleted by the server when the last publisher stops publishing.

#### Returns

`Promise`\<\{ `method`: `"properties"`; `params`: \{ `ack`: `boolean`; `name`: `string`; \}; \}\>

The server's response.

#### Inherited from

`NetworkTablesBaseTopic.setProperties`

***

### setValue()

> **setValue**(`value`): `void`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/topic.ts:79](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/topic.ts#L79)

Sets the value of the topic.
The client must be the publisher of the topic to set the value.

#### Parameters

##### value

`T`

The value to set.

#### Returns

`void`

***

### subscribe()

> **subscribe**(`callback`, `options`, `id`?, `save`?): `number`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/topic.ts:135](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/topic.ts#L135)

Creates a new subscriber.

#### Parameters

##### callback

`CallbackFn`\<`T`\>

The callback to call when the topic value changes.

##### options

`Omit`\<\{ `all`: `boolean`; `periodic`: `number`; `prefix`: `boolean`; `topicsonly`: `boolean`; \}, `"prefix"`\> = `{}`

The options for the subscriber.

##### id?

`number`

The UID of the subscriber. You must verify that the ID is not already in use.

##### save?

`boolean` = `true`

Whether to save the subscriber.

#### Returns

`number`

The UID of the subscriber.

#### Overrides

`NetworkTablesBaseTopic.subscribe`

***

### unannounce()

> **unannounce**(): `void`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts:104](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts#L104)

Marks the topic as unannounced. This should only be called by the PubSubClient.

#### Returns

`void`

#### Inherited from

`NetworkTablesBaseTopic.unannounce`

***

### unpublish()

> **unpublish**(): `void`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/topic.ts:195](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/topic.ts#L195)

Unpublishes the topic.

#### Returns

`void`

***

### unsubscribe()

> **unsubscribe**(`subuid`, `removeCallback`): `void`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts:134](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts#L134)

Removes a subscriber

#### Parameters

##### subuid

`number`

The UID of the subscriber.

##### removeCallback

`boolean` = `true`

Whether to remove the callback. Leave this as true unless you know what you're doing.

#### Returns

`void`

#### Inherited from

`NetworkTablesBaseTopic.unsubscribe`

***

### unsubscribeAll()

> **unsubscribeAll**(): `void`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts:142](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts#L142)

Removes all local subscribers.

#### Returns

`void`

#### Inherited from

`NetworkTablesBaseTopic.unsubscribeAll`

***

### updateValue()

> **updateValue**(`value`, `lastChangedTime`): `void`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/topic.ts:102](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/topic.ts#L102)

Updates the value of the topic.
This should only be called by the PubSubClient.

#### Parameters

##### value

`T`

The value to update.

##### lastChangedTime

`number`

The server time of the last value change.

#### Returns

`void`
