import globalStyles from "../Global/globalStyles";
import shadows from "../Global/shadows";

const styles = {
    containerStyles: {
        ...globalStyles.center,
        ...globalStyles.pointer,
        ...globalStyles.defaultSize,
        boxShadow: shadows.google,
        borderRadius: '10px',
    },

    logoStyles: {
        width: '28px',
        height: '28px',
        margin: '0px 20px 0px 20px'
    },
    
    textStyles: {
        fontSize: '20px',
        color: '#757575',
        fontWeight: 'bold',
        letterSpacing: '0.95px'
    }
}

export default styles;