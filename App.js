import { Text, View, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Banco, createTable, insertUsuario, selectUsuarios, deleteUsuario, updateUsuario } from './Banco/Config';
import Fontawesome from '@expo/vector-icons/FontAwesome6';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './source/styles';
import { useEffect, useState } from 'react';

const Item = ({ item, onEdit, onDelete }) => (
	<View style={styles.card}>
		<View style={styles.row}>		
			<Fontawesome name="id-card" color="white" size={20} />
			<Text style={styles.name}> {item.ID_US} </Text>
			<Fontawesome name="user" color="gray" size={20} />
			<Text style={styles.name}> {item.NOME_US}</Text>
		</View>
		<View style={styles.row}>
			<Fontawesome name="envelope" color="white" size={20} />
			<Text style={styles.email}> {item.EMAIL_US}</Text>
		</View>		
		<View style={styles.rowActions}>
			<TouchableOpacity onPress={() => onEdit(item)} style={styles.editButton}>
				<Fontawesome name="edit" color="white" size={26} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => onDelete(item.ID_US)} style={styles.deleteButton}>
				<Fontawesome name="trash" color="white" size={26} />
			</TouchableOpacity>
		</View>
	</View>
);

export default function App() {
	const [db, setDb] = useState(null);
	const [usuarios, setUsuarios] = useState([]);
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [editingId, setEditingId] = useState(null);

	useEffect(() => {
		async function initDatabase() {
			const database = await Banco();
			if (!database) return;
			await createTable(database);
			setDb(database);
			await loadUsuarios(database);
		}
		initDatabase();
	}, []);

	async function loadUsuarios(database) {
		const result = await selectUsuarios(database);
		if (result) {
			setUsuarios(result);
		}
	}

	async function handleSave() {
		if (!nome.trim() || !email.trim()) {
			Alert.alert('Preenchimento', 'Informe nome e email.');
			return;
		}

		if (!db) return;

		if (editingId) {
			await updateUsuario(db, editingId, nome.trim(), email.trim());
			setEditingId(null);
		} else {
			await insertUsuario(db, nome.trim(), email.trim());
		}

		setNome('');
		setEmail('');
		await loadUsuarios(db);
	}

	function handleEdit(item) {
		setNome(item.NOME_US);
		setEmail(item.EMAIL_US);
		setEditingId(item.ID_US);
	}

	async function handleDelete(id) {
		Alert.alert('Excluir', 'Deseja excluir este usuário?', [
			{ text: 'Cancelar', style: 'cancel' },
			{
				text: 'Sim',
				onPress: async () => {
					await deleteUsuario(db, id);
					await loadUsuarios(db);
				},
			},
		]);

	}

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={['#432f68', '#363691']}
				style={styles.gradient}
				start={{ x: 0, y: 0.4 }}
				end={{ x: 0.7, y: 1 }}			
			>
			<Text style={styles.title}>CRUD da Tabela de Usuários</Text>
			<View style={styles.card}>
				<Text style={styles.titlecard}>Digite seu nome e email, logo abaixo:</Text>
				<View style={styles.inputField}>
					<Fontawesome name="user" color="gray" size={20} />
					<TextInput 
						placeholder="Digite o seu nome:"
						value={nome}
						onChangeText={setNome}
						style={styles.input} 
					/>
				</View>
				<View style={styles.inputField}>
					<Fontawesome name="envelope" color="gray" size={20} />
					<TextInput 
						placeholder="Digite o seu email:"
						value={email}
						onChangeText={setEmail}
						keyboardType="email-address"
						style={styles.input} 
					/>
				</View>
				<TouchableOpacity onPress={handleSave} style={styles.button}>
					<Text style={styles.buttonText}>{editingId ? 'Atualizar' : 'Adicionar'}</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				data={usuarios}
				renderItem={({ item }) => <Item item={item} onEdit={handleEdit} onDelete={handleDelete} />}
				keyExtractor={(item) => item.ID_US.toString()}
				style={styles.list}
				ListEmptyComponent={<Text style={styles.emptyMessage}>Nenhum usuário cadastrado.</Text>}
			/>
			</LinearGradient>
		</View>
	);
}