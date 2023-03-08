import globalStyles from "./Global/globalStyles";
import colors from "./Global/colors";

const styles = {
    container: {
        padding: '0px 0px 0px 72px',
        height: 'calc(100vh - 260px)'
    },

    title: {
        fontSize: '40px',
        fontWeight: '600',
        margin: '0px 0px 24px 0px'
    },

   header: {
        ...globalStyles.verticalAlign,
        ...globalStyles.horizontalSpaceBetween,
        width: '800px',
        height: '54px'
   },

    subtitle: {
        ...globalStyles.pointer,
        fontSize: '22px',
        fontWeight: '500'
    },

    subsubtitle: {
        fontSize: '20px',
        fontWeight: '500',
        margin: '0px 0px 20px 0px'
    },

    unabledSubtitle: {
        ...globalStyles.pointer,
        fontSize: '22px',
        fontWeight: '500',
        color: colors.unabledtxt
    },

    profileContainer: {
        height: '90%',
    },

    row: {
        ...globalStyles.horizontalSpaceBetween
    },

    personalInfoContainer: {
        margin: '40px 0px 0px 0px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },

    billingInfoContainer: {
        ...globalStyles.column,
        width: 'calc(100vw - 1000px)'
    },

    addressInfoContainer: {
        width: '60%'
    },

    allButons: {
        ...globalStyles.horizontalSpaceBetween,
        width: '420px',
        margin: '20px 0px 0px 0px'
    },

    actionButtons: {
        ...globalStyles.horizontalSpaceBetween,
        width: '260px',
    },

    accountUsageContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '72px',
        margin: '40px 0px 0px 0px'
    },

    info: {
        ...globalStyles.horizontalSpaceBetween,
        width: '24%'
    },

    label: {
        fontSize: '20px',
        fontWeight: '500'
    },

    value: {
        fontSize: '20px' 
    },

    cardInfo: {
        ...globalStyles.horizontalSpaceBetween
    },

    cardProfileContainer: {
        margin: '40px 0px 0px 0px',
        ...globalStyles.column,
        justifyContent: 'start'
    },

    cardContainer: {
        width: '240px',
        margin: '0px 0px 20px 0px'
    },

    allButonsCard: {
        ...globalStyles.horizontalSpaceBetween,
        width: '296px',
        margin: '20px 0px 0px 0px'
    },

    buttonsCard: {
        ...globalStyles.horizontalSpaceBetween,
        width: '100%',
    },

    allButonsCardEditable: {
        ...globalStyles.horizontalSpaceBetween,
        width: 'calc(100vw - 640px)',
        margin: '20px 0px 0px 0px'
    },

    buttonsCardEditable: {
        ...globalStyles.horizontalSpaceBetween,
        width: '260px',
    },

    editableCardContainer: {
        ...globalStyles.horizontalSpaceBetween,
        width: 'calc(100vw - 640px)'
    }
}

export default styles;