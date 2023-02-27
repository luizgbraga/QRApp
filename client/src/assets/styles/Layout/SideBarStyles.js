import globalStyles from "../Global/globalStyles";
import colors from "../Global/colors";

const styles = {
    sideBarContainer: {
        ...globalStyles.column,
        height: '100vh',
        width: '310px',
        padding: '26px',
        borderRight: `solid 1px ${colors.grey}`
    },

    logo: {
        ...globalStyles.pointer,
        margin: '20px 0px 42px 0px'
    },

    sessionTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '20px 0px 24px 0px',
        letterSpacing: '0.9px'
    },

    itemContainer: {
        ...globalStyles.horizontalSpaceBetween,
        ...globalStyles.pointer,
        height: '40px',
        alignItems: 'center',
        margin: '0px 0px 8px 10px'
    },

    itemContent: {
        ...globalStyles.row,
        ...globalStyles.pointer,
        alignItems: 'center'
    },

    qrContainer: {
        ...globalStyles.verticalAlign,
        ...globalStyles.littleRoundedBorder,
        ...globalStyles.pointer,
        border: 0,
        padding: '10px',
        margin: '0px 0px 12px 18px',
        height: '40px'
    },

    qrContainerSelected: {
        ...globalStyles.verticalAlign,
        ...globalStyles.littleRoundedBorder,
        border: 0,
        padding: '10px',
        margin: '0px 0px 12px 18px',
        height: '40px',
        backgroundColor: colors.transparentgreen
    },

    itemTitle: {
        fontSize: '20px'
    },

    sideBarIcons: {
        width: '20px',
        marginRight: '10px'
    }
}

export default styles;