export const styleJSON = (params) => {return {
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6', // Tailwind's gray-100
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  switchRow: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12, // Tailwind's rounded-xl
    width: '100%',
    maxWidth: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 18, // Tailwind's text-lg
    color: '#374151', // Tailwind's gray-700
    fontFamily: "Raleway-Medium"
  },
}}