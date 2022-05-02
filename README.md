# ember-reading-time

[![CI](https://github.com/DazzlingFugu/ember-reading-times/actions/workflows/ci.yml/badge.svg)](https://github.com/DazzlingFugu/ember-reading-times/actions/workflows/ci.yml) [![Ember Observer Score](https://emberobserver.com/badges/ember-reading-times.svg)](https://emberobserver.com/addons/ember-reading-times) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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

## Contributors

<!-- readme: contributors,ember-tomster/- -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/GreatWizard">
            <img src="https://avatars.githubusercontent.com/u/1322081?v=4" width="100;" alt="GreatWizard"/>
            <br />
            <sub><b>GreatWizard</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/MrChocolatine">
            <img src="https://avatars.githubusercontent.com/u/47531779?v=4" width="100;" alt="MrChocolatine"/>
            <br />
            <sub><b>MrChocolatine</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/yonmey">
            <img src="https://avatars.githubusercontent.com/u/3025706?v=4" width="100;" alt="yonmey"/>
            <br />
            <sub><b>yonmey</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ef4">
            <img src="https://avatars.githubusercontent.com/u/319282?v=4" width="100;" alt="ef4"/>
            <br />
            <sub><b>ef4</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ewjoachim">
            <img src="https://avatars.githubusercontent.com/u/1457576?v=4" width="100;" alt="ewjoachim"/>
            <br />
            <sub><b>ewjoachim</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: contributors,ember-tomster/- -end -->

## License

This project is licensed under the [MIT License](LICENSE.md).
