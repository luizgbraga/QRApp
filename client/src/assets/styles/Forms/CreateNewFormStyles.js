import globalStyles from "../Global/globalStyles";
import shadows from "../Global/shadows";

const styles = {
    containerStyles: {
        ...globalStyles.column,
        boxShadow: shadows.newQR,
        width: '520px',
        height: '420px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: '16px',
    },

    inputsStyles: {
        ...globalStyles.column,
        height: '210px',
        justifyContent: 'space-around'
    },

    titleStyles: {
        fontSize: '30px',
        fontWeight: 'bold',
        letterSpacing: '0.9px'
    }
}

export default styles;