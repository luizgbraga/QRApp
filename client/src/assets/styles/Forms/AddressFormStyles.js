import globalStyles from "../Global/globalStyles";

const styles = {
    addressInfoContainer: {
        margin: '40px 0px 0px 0px',
        ...globalStyles.horizontalSpaceBetween,
        width: 'calc(100vw - 590px)'
    },

    subsubtitle: {
        fontSize: '20px',
        fontWeight: '500',
        margin: '0px 0px 20px 0px'
    },

    row: {
        ...globalStyles.horizontalSpaceBetween,
        width: '500px'
    }
}

export default styles;