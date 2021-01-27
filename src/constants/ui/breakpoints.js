// Chakra's default breakpoints
const chakraBreakpoints = {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
}

const customBreakpoints = {
    xs: '350px', // Used for phones like iPhone 5
}

const breakpoints = {
    ...chakraBreakpoints,
    ...customBreakpoints,
}

export default breakpoints
