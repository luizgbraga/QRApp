const globalStyles = {
    row: {
        display: 'flex',
        flexDirection: 'row'
    },

    column: {
        display: 'flex',
        flexDirection: 'column'
    },

    columnCentered: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    horizontalSpaceBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    horizontalSpaceAround: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    littleRoundedBorder: {
        borderRadius: '6px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#13131A'
    },

    pointer: {
        cursor: 'pointer'
    },

    defaultSize: {
        width: '420px',
        height: '56px'
    }
}

export default globalStyles;