import { assets } from "../../assets/assets"

export const styleJSON = (params) => { return {
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 }, // shadow-xl (approx)
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 8, // For Android shadow
        padding: 17, // p-6
        marginBottom: -10, // mb-4
    },
    formContainer: {
        flexDirection: 'row', // sm:flex-row
        alignItems: 'center', // items-center
        // space-x-2 is handled by margin on TextInput
        // space-y-4 is handled by flex-col on smaller screens, but not directly applicable here
    },
    textInput: {
        flexGrow: 1, // flex-grow
        paddingHorizontal: 16, // px-4
        paddingVertical: 8, // py-2
        borderWidth: 1,
        borderColor: assets.basic.lightGray, // border-gray-300
        borderRadius: 9999, // rounded-full
        backgroundColor: 'white',
        color: assets.basic.darkGray, // text-gray-800
        // Shadow for TextInput (similar to shadow-sm)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        fontFamily: assets.basic.fonts.RALEWAY_REGULAR,
        elevation: 2,
        marginRight: 8, // space-x-2 (equivalent)
        width: 100
        // No direct focus styles in RN, but you can simulate with state
    },
    sendButton: {
        flexShrink: 0, // flex-shrink-0
        backgroundColor: assets.basic.blue, // bg-blue-600
        borderColor: "#2f62b5ff",
        borderWidth: 1,
        padding: 8, // p-2
        borderRadius: 9999, // rounded-full
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 }, // shadow-lg (approx)
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 10, // For Android shadow
        alignItems: 'center',
        justifyContent: 'center',
        width: 40, // w-10
        height: 40, // h-10
    },
    currentInputText: {
        marginTop: 24, // mt-6
        textAlign: 'center',
        color: assets.basic.darkGray, // text-gray-600
    },
    currentInputValue: {
        fontWeight: '600', // font-semibold
        color: assets.basic.blue, // text-blue-700
    },
}}