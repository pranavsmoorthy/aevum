import { assets } from "../../assets/assets"

export const styleJSON = (params) => ({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 16, // p-4
        width: '100%',
    },
    card: {
        width: '100%',
        maxWidth: 448, // max-w-md (approx 448px for 28rem)
        backgroundColor: 'white',
        borderRadius: 15, // rounded-full
        borderWidth: 1,
        borderColor: assets.basic.lightGray, // border-gray-200
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 }, // shadow-xl (approx)
        shadowOpacity: 0.1,
        shadowRadius: 6,
        padding: 17, // p-6
        marginBottom: 56
    },
    formContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        gap: 8,
    },
    textInput: {
        flex: 1,
        backgroundColor: '#f3f4f6',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 12,
        height: 48, // Fixed height
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: assets.basic.lightGray,
        fontFamily: assets.basic.fonts.RALEVAY_LIGHT,
        overflow: 'hidden'
    },
    sendButton: {
        backgroundColor: '#3b82f6',
        borderRadius: 24,
        width: 48, // Make it square
        height: 48, // Same height as textInput
        justifyContent: 'center',
        alignItems: 'center',
    },
    currentInputText: {
        marginTop: 24, // mt-6
        textAlign: 'center',
        color: assets.basic.darkGray, // text-gray-600
        fontFamily: assets.basic.fonts.RALEVAY_LIGHT,
    },
    currentInputValue: {
        fontWeight: '600', // font-semibold
        color: assets.basic.blue, // text-blue-700
    },
})