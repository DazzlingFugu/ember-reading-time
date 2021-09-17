# ember-reading-time

Medium's like reading time estimation for EmberJS.

## Compatibility

- Ember.js v3.16 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Installation

```
ember install ember-reading-time
```

## Usage

By default, `reading-time` helper will humanize down to the minute and use english as language.

```hbs
{{reading-time 'My text here'}}

{{reading-time 'My text here' (hash language='ja')}}
```

### Options

All options from `humanize-duration` are available: https://github.com/EvanHahn/HumanizeDuration.js#options

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
