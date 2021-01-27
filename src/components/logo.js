import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Image } from '@chakra-ui/react'
import logo from 'images/logo.svg'
import { focusBorder } from 'constants/ui/borders'
import preventFocus from 'utils/prevent-focus'

export function Logo() {
    return (
        <Box
            as={GatsbyLink}
            to="/"
            display="block"
            aria-label="Dev Resources API, go back to homepage"
            left={{ base: '-2px', lg: '0' }}
            pos="relative"
            _focus={focusBorder}
            onMouseDown={preventFocus}
        >
            <Image
                height={{ base: '14px', md: '17.5px' }}
                ignoreFallback
                display="inline-block"
                src={logo}
                alt="Dev Resources API logo"
            />
        </Box>
    )
}

export default Logo
