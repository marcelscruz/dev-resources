import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalStyle from 'styles/global-style'
import Header from 'components/header'

function Layout({ children }) {
    return (
        <ChakraProvider>
            <GlobalStyle />

            <Header />

            {children}
        </ChakraProvider>
    )
}

export default Layout
