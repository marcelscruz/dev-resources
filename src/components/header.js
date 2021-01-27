import React, { useContext } from 'react'
import { Flex, Box } from '@chakra-ui/react'
// import { Button, Logo, MobileMenu } from 'components'
import Logo from './logo'
import colours from 'constants/ui/colours'
import sizes from 'constants/ui/sizes'
// import preventFocus from 'utils/prevent-focus'
// import siteMetadata from 'constants/site-metadata'

const { contentXPadding, headerHeight } = sizes

export function Header() {
    return (
        <Flex
            as="header"
            borderBottom={`1px solid ${colours.grey4}`}
            background={colours.black}
            height={headerHeight}
            justify="center"
            position="fixed"
            top="0"
            width="100vw"
            zIndex="999"
        >
            <Flex flex="1" align="center" justify="space-between" paddingX={contentXPadding}>
                <Logo />

                {/* <Box display={{ lg: 'none' }}>
                    <MobileMenu />
                </Box> */}

                {/* <Box display={{ base: 'none', lg: 'block' }}>
                    <Button
                        as="a"
                        href={patreonUrl}
                        target="_blank"
                        rel="noopener"
                        variant="outline"
                        marginRight="25px"
                        onMouseDown={preventFocus}
                        width="180px"
                    >
                        Sponsor
                    </Button>

                    <Button width="180px" flex="1" variant="blue" onMouseDown={preventFocus} onClick={onOpen}>
                        Submit Resource
                    </Button>
                </Box> */}
            </Flex>
        </Flex>
    )
}

export default Header
