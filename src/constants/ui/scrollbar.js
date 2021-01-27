export const hideScrollbar = `
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */

    ::-webkit-scrollbar {
        display: none;
    }

    ::-webkit-scrollbar-track {
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: transparent;
    }
`
