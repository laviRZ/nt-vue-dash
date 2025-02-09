[**ntcore-ts-client**](../README.md)

***

[ntcore-ts-client](../README.md) / NetworkTablesPrefixTopic

# Class: NetworkTablesPrefixTopic

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/prefix-topic.ts:12](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/prefix-topic.ts#L12)

## Extends

- `NetworkTablesBaseTopic`\<[`NetworkTablesTypes`](../type-aliases/NetworkTablesTypes.md)\>

## Constructors

### new NetworkTablesPrefixTopic()

> **new NetworkTablesPrefixTopic**(`client`, `name`): [`NetworkTablesPrefixTopic`](NetworkTablesPrefixTopic.md)

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/prefix-topic.ts:21](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/prefix-topic.ts#L21)

Creates a new topic. This should only be done after the
base NTCore client has been initialized.

#### Parameters

##### client

`PubSubClient`

The client that owns the topic.

##### name

`string`

The name of the topic.

#### Returns

[`NetworkTablesPrefixTopic`](NetworkTablesPrefixTopic.md)

#### Overrides

`NetworkTablesBaseTopic<NetworkTablesTypes>.constructor`

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

> `readonly` **type**: `"prefix"` = `'prefix'`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/prefix-topic.ts:13](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/prefix-topic.ts#L13)

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

## Methods

### announce()

> **announce**(`params`): `void`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts:98](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/base-topic.ts#L98)

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

#### Inherited from

`NetworkTablesBaseTopic.announce`

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

### resubscribeAll()

> **resubscribeAll**(`client`): `void`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/prefix-topic.ts:67](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/prefix-topic.ts#L67)

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

### subscribe()

> **subscribe**(`callback`, `options`, `id`?, `save`?): `number`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/prefix-topic.ts:44](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/prefix-topic.ts#L44)

Creates a new subscriber.

#### Parameters

##### callback

`CallbackFn`\<`string` \| `number` \| `boolean` \| `string`[] \| `ArrayBuffer` \| `boolean`[] \| `number`[]\>

The callback to call when the topic value changes.

##### options

`Omit`\<\{ `all`: `boolean`; `periodic`: `number`; `prefix`: `boolean`; `topicsonly`: `boolean`; \}, `"prefix"`\> = `{}`

The options for the subscriber.

##### id?

`number`

The UID of the subscriber.

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

> **updateValue**(`params`, `value`, `serverTime`): `void`

Defined in: [packages/ntcore-ts-client/src/lib/pubsub/prefix-topic.ts:80](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/pubsub/prefix-topic.ts#L80)

Updates the value of a subtopic. Notifies all subscribers of the change.

#### Parameters

##### params

The params of the subtopic

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

##### value

The value of the subtopic

`string` | `number` | `boolean` | `string`[] | `ArrayBuffer` | `boolean`[] | `number`[]

##### serverTime

`number`

The time the value was updated

#### Returns

`void`
