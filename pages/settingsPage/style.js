import { assets } from '../../assets/assets';

export const styleJSON = () => ({
    container: {
        flex: 1,
        backgroundColor: assets.basic.mediumGray,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
    },
    aboutHeader: {
        fontSize: 24,
        color: assets.basic.main,
        marginBottom: 15,
        fontFamily: assets.basic.fonts.RALEWAY_BOLD,
        textAlign: 'center',
    },
    aboutParagraph: {
        fontSize: 16,
        color: assets.basic.darkGray,
        marginHorizontal: 20,
        marginBottom: 20,
        fontFamily: assets.basic.fonts.RALEWAY_REGULAR,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 30,
        fontFamily: assets.basic.fonts.RALEWAY_BOLD,
    },
    button: {
        backgroundColor: assets.basic.main,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    buttonText: {
        fontSize: 15,
        color: '#FFFFFF',
        fontFamily: assets.basic.fonts.RALEWAY_MEDIUM,
    },
    settingsCard: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#f1f5f9',
        width: '80%',
        alignItems: 'center'
    }
});
