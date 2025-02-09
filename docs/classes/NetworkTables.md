[**ntcore-ts-client**](../README.md)

***

[ntcore-ts-client](../README.md) / NetworkTables

# Class: NetworkTables

Defined in: [packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts:19](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts#L19)

NetworkTables class for interacting with NetworkTables over a WebSocket connection.

## Accessors

### client

#### Get Signature

> **get** **client**(): `PubSubClient`

Defined in: [packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts:35](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts#L35)

Gets the PubSubClient instance used to establish and manage the connection to the robot.

##### Returns

`PubSubClient`

The PubSubClient instance.

## Methods

### addRobotConnectionListener()

> **addRobotConnectionListener**(`callback`, `immediateNotify`?): () => `void`

Defined in: [packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts:133](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts#L133)

Adds a listener for robot connection status updates.

#### Parameters

##### callback

(`_`) => `void`

The callback to call when the connection status changes.

##### immediateNotify?

`boolean`

Whether to immediately notify the callback of the current connection status.

#### Returns

`Function`

A function to remove the listener.

##### Returns

`void`

***

### changeURI()

> **changeURI**(`uri`, `port`): `void`

Defined in: [packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts:98](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts#L98)

#### Parameters

##### uri

`string`

##### port

`number` = `5810`

#### Returns

`void`

***

### createPrefixTopic()

> **createPrefixTopic**(`prefix`): [`NetworkTablesPrefixTopic`](NetworkTablesPrefixTopic.md)

Defined in: [packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts:153](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts#L153)

Creates a new topic with a prefix.

#### Parameters

##### prefix

`string`

The prefix of the topic.

#### Returns

[`NetworkTablesPrefixTopic`](NetworkTablesPrefixTopic.md)

The topic.

***

### createTopic()

> **createTopic**\<`T`\>(`name`, `typeInfo`, `defaultValue`?): [`NetworkTablesTopic`](NetworkTablesTopic.md)\<`T`\>

Defined in: [packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts:144](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts#L144)

Creates a new topic.

#### Type Parameters

• **T** *extends* `string` \| `number` \| `boolean` \| `string`[] \| `ArrayBuffer` \| `boolean`[] \| `number`[]

#### Parameters

##### name

`string`

The name of the topic.

##### typeInfo

[`NetworkTablesTypeInfo`](../type-aliases/NetworkTablesTypeInfo.md)

The type information of the topic.

##### defaultValue?

`T`

The default value of the topic.

#### Returns

[`NetworkTablesTopic`](NetworkTablesTopic.md)\<`T`\>

The topic.

***

### getPort()

> **getPort**(): `number`

Defined in: [packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts:107](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts#L107)

Returns the port to connect to the robot on.

#### Returns

`number`

The port number.

***

### getURI()

> **getURI**(): `string`

Defined in: [packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts:94](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts#L94)

Returns the URI of the server.

#### Returns

`string`

The robot address.

***

### isRobotConnected()

> **isRobotConnected**(): `boolean`

Defined in: [packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts:115](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts#L115)

Returns whether the robot is currently connected.

#### Returns

`boolean`

Whether the robot is connected.

***

### isRobotConnecting()

> **isRobotConnecting**(): `boolean`

Defined in: [packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts:123](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts#L123)

Returns whether the robot is currently connecting.

#### Returns

`boolean`

Whether the robot is connecting.

***

### getInstanceByTeam()

> `static` **getInstanceByTeam**(`team`, `port`): [`NetworkTables`](NetworkTables.md)

Defined in: [packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts:67](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts#L67)

Creates a new NetworkTables instance if it does not exist.

#### Parameters

##### team

`number`

The team number of the robot.

##### port

`number` = `5810`

The port to connect to the robot on. Defaults to 5810.

#### Returns

[`NetworkTables`](NetworkTables.md)

The NetworkTables instance.

#### Throws

Error if the team number is not provided.

***

### getInstanceByURI()

> `static` **getInstanceByURI**(`uri`, `port`): [`NetworkTables`](NetworkTables.md)

Defined in: [packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts:82](https://github.com/cjlawson02/ntcore-ts-client/blob/331d06be09e5add7ae8d0871852ae66ac3016b17/packages/ntcore-ts-client/src/lib/ntcore-ts-client.ts#L82)

Creates a new NetworkTables instance if it does not exist.

#### Parameters

##### uri

`string`

The URI of the robot.

##### port

`number` = `5810`

The port to connect to the robot on. Defaults to 5810.

#### Returns

[`NetworkTables`](NetworkTables.md)

The NetworkTables instance.

#### Throws

Error if the URI is not provided.
