import globalStyles from "./Global/globalStyles";

const styles = {
    container: {
        padding: '0px 0px 0px 72px',
    },

    title: {
        fontSize: '40px',
        fontWeight: '600',
        margin: '0px 0px 24px 0px'
    },

    bodyContainer: {
        ...globalStyles.horizontalSpaceBetween,
        width: 'calc(100vw - 480px)',
        margin: '40px 0px 0px 0px'
    }
}

export default styles;