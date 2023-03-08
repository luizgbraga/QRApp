import globalStyles from "./Global/globalStyles";
import colors from "./Global/colors";

const styles = {
    container: {
        ...globalStyles.horizontalSpaceBetween,
        alignItems: 'center',
        width: '100%',
        height: '42px',
        margin: '0px 0px 28px 0px',
        border: 'solid 1px',
        borderColor: colors.grey,
        borderRadius: '6px',
        padding: '0px 30px 0px 20px',
        ...globalStyles.pointer
    },

    label: {
        margin: '0px 0px 12px 0px',
        fontSize: '16px',
        fontWeight: '600',
        letterSpacing: '0.9px'
    },

    text: {
        fontSize: '17px',
        fontWeight: '500'
    },

    creditCard: {
        ...globalStyles.horizontalSpaceBetween,
        width: '172px'
    },

    radio: {
        ...globalStyles.pointer,
        width: '16px',
        height: '16px'
    },

    cardContainer: {
        ...globalStyles.horizontalSpaceBetween,
        width: '90px'
    },

    cardImage: {
        height: '15px'
    },
}

export default styles;