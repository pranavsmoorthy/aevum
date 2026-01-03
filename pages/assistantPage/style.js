import { assets } from "../../assets/assets"

export const styleJSON = () => ({
    container: {
        flexGrow: 1,
        backgroundColor: assets.basic.mediumGray,
        padding: 16,
        paddingBottom: 24,
    },
    messageContainer: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 12,
    },
    userMessageContainer: {
        justifyContent: 'flex-end',
    },
    aiMessageContainer: {
        justifyContent: 'flex-start',
    },
    messageBubble: {
        maxWidth: '85%',
        padding: 12,
        borderRadius: 18,
    },
    userMessageBubble: {
        backgroundColor: assets.basic.main,
        borderBottomRightRadius: 4,
    },
    aiMessageBubble: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderBottomLeftRadius: 4,
    },
    aiMessageHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginBottom: 4,
    },
    aiHeaderText: {
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: assets.basic.main,
        fontFamily: assets.basic.fonts.RALEWAY_BOLD,
    },
    userMessageText: {
        fontSize: 15,
        color: 'white',
        fontFamily: assets.basic.fonts.RALEWAY_LIGHT,
    },
    aiMessageText: {
        fontSize: 15,
        color: '#374151',
        fontFamily: assets.basic.fonts.RALEWAY_LIGHT,
    },
});