import { assets } from "../../assets/assets"

export const styleJSON = () => ({
    scrollView: {
        flex: 1,
        backgroundColor: assets.basic.mediumGray,
    },
    container: {
        flex: 1,
        padding: 16,
    },
    searchContainer: {
        marginBottom: 16,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBar: {
        flex: 1,
        height: 44,
        backgroundColor: '#ffffff',
        borderRadius: 22,
        paddingHorizontal: 20,
        fontSize: 16,
        color: assets.basic.darkGray,
        fontFamily: assets.basic.fonts.RALEVAY_LIGHT,
        borderWidth: 1,
        borderColor: '#e5e7eb',
    },
    clearButton: {
        position: 'absolute',
        right: 10,
        height: 44,
        width: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    clearButtonText: {
        fontSize: 22,
        color: '#9ca3af',
    },
    noMemoryContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    noMemoryText: {
        fontSize: 16,
        color: '#9ca3af',
        fontFamily: assets.basic.fonts.RALEVAY_LIGHT,
        marginTop: 16,
        textAlign: 'center',
    },
});