import globalStyles from "../Global/globalStyles";
import colors from "../Global/colors";

const selectInputsStyles = {
    defaultSelectInput: {
        ...globalStyles.defaultSize,
        ...globalStyles.littleRoundedBorder,
        padding: '6px 0px 6px 20px',
        marginTop: '8px',
        fontSize: '20px',
        borderColor: colors.grey
    },

    leftSelectInput: {
        ...globalStyles.defaultSize,
        padding: '6px 0px 6px 20px',
        marginTop: '8px',
        fontSize: '20px',
        borderTopLeftRadius: '6px',
        borderBottomLeftRadius: '6px',
        borderColor: colors.grey
    },

    rightSelectInput: {
        ...globalStyles.defaultSize,
        padding: '6px 0px 6px 20px',
        marginTop: '8px',
        fontSize: '20px',
        borderTopRightRadius: '6px',
        borderBottomRightRadius: '6px',
        borderColor: colors.grey
    },

    noBorderSelectInput: {
        ...globalStyles.defaultSize,
        padding: '6px 0px 6px 20px',
        marginTop: '8px',
        fontSize: '20px',
        borderColor: colors.grey
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

export default selectInputsStyles;
