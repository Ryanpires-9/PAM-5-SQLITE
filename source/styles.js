import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#432f68',
        paddingTop: 100,
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
        textAlign: 'center',
		marginBottom: 20,
		color: 'white',
	},
    titlecard: {
        fontSize: 16,
		fontWeight: 'bold',
        textAlign: 'center',
		marginBottom: 20,
		color: '#fff',
	},
	card: {
		width: '100%',
		backgroundColor: '#523e77',
		borderRadius: 14,
		padding: 20,
		shadowColor: '#000',
		shadowOpacity: 0.5,
		shadowRadius: 20,
		shadowOffset: { width: 0, height: 4 },
		elevation: 3,
		marginBottom: 10,
	},
	name: {
		fontSize: 20,
        fontWeight: 'bold',
		color: '#fff',
		marginBottom: 4,
	},
    email: {
		fontSize: 16,
		color: '#fff',
	},
    inputField: {
        flexDirection: 'row', 
        alignItems: 'center', 
		marginBottom: 15,
		borderWidth: 4,
		borderColor: '#594480',
		borderRadius: 15,
		padding: 10,
		backgroundColor: '#fff',
        paddingHorizontal: 10 
    },
	input: {
        flex: 1, 
        height: 40, 
        paddingLeft: 10
	},
	button: {
		backgroundColor: '#7a66d3',
		padding: 12,
		borderRadius: 10,
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	rowActions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
	},
    gradient: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%',
        height: 2000,
        padding: 20,
    },
    iconButton: {
        paddingLeft: 30,
        paddingRight: 30,
    },
	editButton: {
		padding: 8,
        paddingLeft: 60,
        paddingRight: 60,
		backgroundColor: '#b593ec',
		borderRadius: 8,
	},
	deleteButton: {
		padding: 8,
        paddingLeft: 60,
        paddingRight: 60,
		backgroundColor: '#f76c6c',
		borderRadius: 8,
	},
	list: {
		width: '100%',
		marginTop: 20,
	},
	emptyMessage: {
		textAlign: 'center',
		marginTop: 20,
		color: '#666',
	},
	iconCard: {
		marginTop: 20,
		alignItems: 'center',
	},
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    }
});
