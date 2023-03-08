import globalStyles from "../Global/globalStyles";
import colors from "../Global/colors";

const textInputStyles = {
    defaultTextInput: {
        ...globalStyles.defaultSize,
        ...globalStyles.littleRoundedBorder,
        ...globalStyles.verticalAlign,
        padding: '10px 58px 10px 20px',
        marginTop: '8px',
        fontSize: '20px',
        borderColor: colors.grey,
        position: 'relative'
    },

    defaultLabelContainer: {
        width: '420px',
        ...globalStyles.horizontalSpaceBetween
    },

    defaultLabel: {
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: '0.9px'
    },

    moreInfoLabel: {
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: '0.9px',
        color: colors.green,
        cursor: 'pointer'
    },

    warningMessageContainer: {
        width: '420px',
        height: '22px',
        marginTop: '2.6px'
    },

    warningMessage: {
        fontSize: '16px',
        color: colors.warning,
    },

    eye: {
        ...globalStyles.pointer,
        width: '32px',
        position: 'absolute',
        bottom: '10px',
        right: '20px'
    },

    info: {
        ...globalStyles.pointer,
        width: '28px',
        position: 'absolute',
        bottom: '12px',
        right: '20px'
    },

    popover: {
        borderRadius: '10px',
        border: '1px solid',
        borderColor: colors.grey,
        zIndex: '12',
        backgroundColor: '#FFFFFF',
        width: '320px',
        position: 'relative',
        margin: '0px 0px 8px 10px'
    },

    popoverHeader: {
        backgroundColor: '#F0F0F0',
        borderBottom: '1px solid',
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px',
        borderBottomColor: colors.grey,
        padding: '10px 12px 10px 16px',
        fontSize: '16px',
        fontWeight: '500'
    },

    point: {
        width: '14px',
        height: '14px',
        backgroundColor: '#FFFFFF',
        borderLeft: '1px solid',
        borderLeftColor: colors.grey,
        borderBottom: '1px solid',
        borderBottomColor: colors.grey,
        position: 'absolute',
        top: '48px',
        left: '-8px',
        transform: 'rotate(45deg)'
    },

    popoverBody: {
        padding: '16px 12px 16px 16px',
        fontSize: '14px',
    }
}

export default textInputStyles;
