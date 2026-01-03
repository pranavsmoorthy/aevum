import { assets } from "../../assets/assets"

export const styleJSON = () => ({
    card: {
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
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    dateText: {
        color: assets.basic.main,
        fontSize: 12,
    },
    deleteButton: {
        padding: 4,
    },
    title: {
        fontSize: 18,
        color: '#1e293b',
        marginBottom: 4,
        fontFamily: assets.basic.fonts.RALEWAY_BOLD,
    },
    content: {
        fontSize: 14,
        color: '#475569',
        lineHeight: 20,
        fontFamily: assets.basic.fonts.RALEWAY_LIGHT,
    },
});