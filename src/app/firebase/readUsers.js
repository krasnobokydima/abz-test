import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();

export const readUsers = (setData) => {
  const starCountRef = ref(db, "users/");

  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();

    if (data) {
      setData(Object.keys(data).map((card) => data[card]));
    }
  });
}