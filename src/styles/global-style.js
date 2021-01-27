import React from 'react'
import { Global, css } from '@emotion/react'
import colours from 'constants/ui/colours'
import fonts from 'constants/ui/fonts'

export function GlobalStyle() {
    return (
        <Global
            styles={css`
                body {
                    background: ${colours.black};
                    overflow-x: hidden;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    color: ${colours.white};
                    font-family: ${fonts.heading};
                    font-weight: 700;
                    text-transform: uppercase;
                    line-height: 1.2;
                    margin: 10px 0;
                }

                h1 {
                    font-size: 36px;
                }

                h2 {
                    font-size: 30px;
                }

                h3 {
                    font-size: 24px;
                }
            `}
        />
    )
}

export default GlobalStyle
