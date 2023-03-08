import globalStyles from "./Global/globalStyles";
import colors from '../styles/Global/colors';

const styles = {
    container: {
        ...globalStyles.center,
        ...globalStyles.column
    },

    box: {
        ...globalStyles.column,
        ...globalStyles.littleRoundedBorder,
        borderColor: colors.grey,
        alignItems:' center',
        padding: '28px',
        borderRadius: '18px',
        width: 'calc((100vw - 180px)/4)',
        height: '90%'
    },

    selectedBox: {
        ...globalStyles.column,
        ...globalStyles.littleRoundedBorder,
        borderColor: colors.green,
        borderWidth: '3px',
        alignItems:' center',
        padding: '30px',
        borderRadius: '18px',
        width: 'calc((100vw - 180px)/4)',
        height: '90%'
    },

    boxesContainer: {
        ...globalStyles.horizontalSpaceAround,
        justifyContent: 'space-evenly',
        height: 'min(calc(100vh - 190px), 680px)',
        width: 'calc(100vw - 310px)',
        margin: '24px 0px 0px 0px'
    },

    title: {
        fontSize: '40px',
        fontWeight: '500'
    },

    planTitle: {
        fontSize: '30px',
        fontWeight: '500'
    },

    featuresContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        marginTop: '40px',
        height: '60%',
        width: '92%',
    },

    feature: {
        ...globalStyles.littleRoundedBorder,
        ...globalStyles.verticalAlign,
        borderRadius: '30px',
        padding: '0px 20px 0px 18px',
        height: 'max(calc(24% - 20px), 38px)',
        border: 0,
        backgroundColor: colors.transparentgreen,
        color: colors.black,
        fontSize: '0.9vw'
    },

    featureUnabled: {
        ...globalStyles.littleRoundedBorder,
        ...globalStyles.verticalAlign,
        borderRadius: '30px',
        padding: '0px 20px 0px 18px',
        height: 'max(calc(24% - 20px), 38px)',
        border: 0,
        backgroundColor: colors.unabled,
        color: colors.unabledtxt,
        fontSize: '0.9vw'
    },

    cifra: {
        fontSize: '16px',
        height: '100%',
    },

    price: {
        fontSize: '40px',
        height: '50px',
        margin: '20px 0px 30px 0px'
    },

    permonth: {
        fontSize: '14px',
    },

    icon: {
        width: '24px',
        marginRight: '8px'
    }
}

export default styles;