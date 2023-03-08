import globalStyles from "./Global/globalStyles";
import shadows from './Global/shadows';
import colors from "./Global/colors";

const styles = {
    cartContainer: {
        borderRadius: '12px',
        width: 'min(42%, 440px)',
        height: '400px',
        boxShadow: shadows.cart,
        padding: '30px'
    },

    title: {
        fontSize: '28px',
        fontWeight: '500',
        margin: '0px 0px 20px 0px'
    },

    planContainer: {
        ...globalStyles.horizontalSpaceBetween,
        width: '100%',
        height: '36px'
    },

    benefits: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '42%',
        margin: '60px 0px 0px 0px',
        color: colors.grey
    },

    benefitContainer: {
        ...globalStyles.row
    },

    check: {
        width: '20px',
        height: '20px',
        margin: '0px 10px 0px 0px'
    }
}

export default styles;