# Caesar Kabalan - [caesarkabalan.com](https://caesarkabalan.com)

This source code repository represents the personal website of Caesar Kabalan.

## Development Notes

I wasn't happy with the cropping of the Thought Leadership cards so I had to change the `layouts/partials/views/card.html` as follows:

    Original:
        {{ $image := .Fill (printf "808x455 %s" $anchor) }}
    New:
        {{ $image := .Fit (printf "808x404 %s" $anchor) }}

I also added some overriding custom CSS to fix image hover and positioning.

## License

Caesar Kabalan Personal Website is released under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
