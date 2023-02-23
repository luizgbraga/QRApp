import globalStyles from "../Global/globalStyles";
import colors from "../Global/colors";

const inputsStyles = {
    defaultTextInput: {
        width: '420px',
        height: '56px',
        padding: '10px 20px 10px 20px',
        ...globalStyles.littleRoundedBorder
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
    }
}

export default inputsStyles;
