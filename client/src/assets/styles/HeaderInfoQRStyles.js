import globalStyles from "./Global/globalStyles";

const styles = {
    headerInfoContainerStyles: {
        ...globalStyles.row,
        width: 'calc(100vw - 310px)',
        height: '152px',
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
        fontSize: '32px',
        fontWeight: 'bold'
    },

    dataContainerStyles: {
        display: 'flex',
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-between',
        marginTop: '12px'
    },

    optionsContainer: {
        ...globalStyles.horizontalSpaceBetween,
        margin: '20px 0px 0px 100px',
        width: '600px',
        height: '40px'
    },

    subtitle: {
        fontSize: '18px'
    },

    headerTitle: {
        ...globalStyles.horizontalSpaceBetween,
        width: '100%'
    },

    iconsContainer: {
        ...globalStyles.horizontalSpaceBetween,
        width: '92px'
    },

    icon: {
        ...globalStyles.pointer,
        width: '28px'
    }
}

export default styles;