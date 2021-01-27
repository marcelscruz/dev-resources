import colours from './colours'

// The duplicated border styles make sure
// Chakra doesn't overwrite it
const config = {
    background: colours.grey3,
    border: `1px solid ${colours.grey4}`,
    borderColor: colours.grey4,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '10px',
}

export default config
