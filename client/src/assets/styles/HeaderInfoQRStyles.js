import globalStyles from "./Global/globalStyles";

const styles = {
    headerInfoContainerStyles: {
        ...globalStyles.row,
        width: 'calc(100vw - 310px)',
        height: '190px',
        padding: '0px 100px 0px 100px'
    },

    qrContainerStyles: {
        width: '16%',
        display: 'flex',
        alignItems: 'center'
    },

    infoContainerStyles: {
        width: '84%'
    },

    titleStyles: {
        fontSize: '36px',
        fontWeight: 'bold'
    },

    dataContainerStyles: {
        display: 'flex',
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-between',
        marginTop: '20px'
    }
}

export default styles;