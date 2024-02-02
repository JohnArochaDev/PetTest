# Pets app API test

## Entities

```js
User is comprised of the following:
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		hashedPassword: {
			type: String,
			required: true,
		},
		token: String,
	},
```

```js
Pet is comprised of the following:
	{
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		adoptable: {
			type: Boolean,
			required: true,
      default: false,
		},
		toys: [toySchema],
  	owner: {
			mongoose.Schema.Types.ObjctId,
      ref: 'User'
		},
	},
```

```js
Toys is comprised of the following:
	{
		name: {
			type: String,
			required: true,
		},
		Description: {
			type: String,
			required: true,
		},
		isSqueaky: {
			type: Number,
			required: true,
		},
		adoptable: {
			type: Boolean,
			required: true,
      default: false,
		},
		condition: [toySchema],
  	type: string,
    enum: ['new', 'used', 'discusting']		
	},
```

## Routes

## Auth Routes

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |