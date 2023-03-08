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
        width: '84%',
        padding: '0px 10px 0px 60px'
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
    },

    optionsContainer: {
        ...globalStyles.horizontalSpaceBetween,
        margin: '30px 0px 0px 100px',
        width: '600px',
        height: '40px'
    },

    subtitle: {
        fontSize: '18px'
    }
}

export default styles;