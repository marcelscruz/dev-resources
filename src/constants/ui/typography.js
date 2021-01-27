import fonts from 'constants/ui/fonts'

const config = {
    heading: {
        fontFamily: fonts.heading,
        fontWeight: '700',
        textTransform: 'uppercase',
        lineHeight: '1.2',
    },
    body: {
        fontFamily: fonts.body,
        fontWeight: '400',
        lineHeight: '1.4',
    },
    statusMessage: {
        letterSpacing: '1px',
        lineHeight: '1.5',
        wordSpacing: '-3px',
    },
}

const input = {
    ...config.body,
    letterSpacing: '0.4px',
}

const statusMessage = {
    sm: { ...config.heading, ...config.statusMessage, fontSize: '10px' },
    md: { ...config.heading, ...config.statusMessage, fontSize: '12px' },
    lg: { ...config.heading, ...config.statusMessage, fontSize: '14px' },
}

const heading = {
    hero: {
        base: { ...config.heading, fontSize: '32px', letterSpacing: '0.8px', wordSpacing: '-10px' },
        xs: { ...config.heading, fontSize: '38px', letterSpacing: '0.8px', wordSpacing: '-10px' },
        sm: { ...config.heading, fontSize: '42px', letterSpacing: '1px', wordSpacing: '-10px' },
        md: { ...config.heading, fontSize: '46px', letterSpacing: '1px', wordSpacing: '-10px' },
        lg: { ...config.heading, fontSize: '58px', letterSpacing: '1px', wordSpacing: '-12px' },
        xl: { ...config.heading, fontSize: '72px', letterSpacing: '1px', wordSpacing: '-15px' },
    },
    xxxs: {
        ...config.heading,
        fontSize: '10px',
        letterSpacing: '1.2px',
        wordSpacing: '-3px',
    },
    xxs: {
        ...config.heading,
        fontSize: '14px',
        letterSpacing: '1.2px',
        wordSpacing: '-3px',
    },
    xs: {
        ...config.heading,
        fontSize: '16px',
        letterSpacing: '1.2px',
        wordSpacing: '-5px',
    },
    sm: {
        ...config.heading,
        fontSize: '18px',
        letterSpacing: '1.4px',
        wordSpacing: '-5px',
    },
    md: {
        ...config.heading,
        fontSize: '20px',
        letterSpacing: '1.6px',
        wordSpacing: '-5px',
    },
    lg: {
        ...config.heading,
        fontSize: '24px',
        letterSpacing: '2px',
        wordSpacing: '-5px',
    },
    xl: {
        ...config.heading,
        fontSize: '26px',
        letterSpacing: '2px',
        wordSpacing: '-5px',
    },
    xxl: {
        ...config.heading,
        fontSize: '30px',
        letterSpacing: '2px',
        wordSpacing: '-5px',
    },
    xxxl: {
        ...config.heading,
        fontSize: '42px',
        letterSpacing: '2px',
        wordSpacing: '-5px',
    },
}

const body = {
    xs: {
        ...config.body,
        fontSize: '13px',
        letterSpacing: '0.4px',
    },
    sm: {
        ...config.body,
        fontSize: '14px',
        letterSpacing: '0.4px',
    },
    md: {
        ...config.body,
        fontSize: '15px',
        letterSpacing: '0.4px',
    },
    lg: {
        ...config.body,
        fontSize: '16px',
        letterSpacing: '0.4px',
    },
    xl: {
        ...config.body,
        fontSize: '18px',
        letterSpacing: '0.8px',
    },
    xxl: {
        ...config.body,
        fontSize: '20px',
        letterSpacing: '0.8px',
    },
    xxxl: {
        ...config.body,
        fontSize: '22px',
        letterSpacing: '0.8px',
    },
}

const link = {
    footer: {
        ...config.heading,
        fontSize: '12px',
        letterSpacing: '1px',
    },
    platform: {
        ...config.heading,
        fontSize: '14px',
        letterSpacing: '1px',
        wordSpacing: '-5px',
    },
}

const typography = {
    input,
    statusMessage,
    heading,
    body,
    link,
}

export default typography

// card category - 10
// page subtitle mobile -  14
// site descrip mobile - 16
// card - 18

// site descrip desktop - 20

// section mobile - 24
// page mobile - 26
// section desktop - 30
// page desktop - 42

// xxxs
// xxs
// xs
// sm

// md

// lg
// xl
// xxl
// xxxl
