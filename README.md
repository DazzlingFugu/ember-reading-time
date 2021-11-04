# ember-reading-time

Medium-like reading time estimation for EmberJS.

Based on [reading-time](https://github.com/ngryman/reading-time) and [humanized-duration](https://github.com/EvanHahn/HumanizeDuration.js/) libraries.

## Compatibility

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v12 or above

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

## Contributors ✨

[//]: contributor-faces
<a href="https://github.com/GreatWizard"><img src="https://avatars.githubusercontent.com/u/1322081?v=4" title="GreatWizard" width="80" height="80"></a>
<a href="https://github.com/MrChocolatine"><img src="https://avatars.githubusercontent.com/u/47531779?v=4" title="MrChocolatine" width="80" height="80"></a>
<a href="https://github.com/yonmey"><img src="https://avatars.githubusercontent.com/u/3025706?v=4" title="yonmey" width="80" height="80"></a>
<a href="https://github.com/ef4"><img src="https://avatars.githubusercontent.com/u/319282?v=4" title="ef4" width="80" height="80"></a>
<a href="https://github.com/ewjoachim"><img src="https://avatars.githubusercontent.com/u/1457576?v=4" title="ewjoachim" width="80" height="80"></a>

[//]: contributor-faces

## License

This project is licensed under the [MIT License](LICENSE.md).
