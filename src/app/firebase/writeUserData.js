import { getDatabase, ref, set } from "firebase/database";

export async function writeUserData(data) {
  const db = getDatabase();

	console.log('db: ', db)
	const dataref = ref(db, 'users/' + data.id)

  await set(dataref, data);
}