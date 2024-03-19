// Codes by mahdi tasha
// Importing part
import {useDbPropType, useDbType} from "@/types/db";
import {useEffect, useState} from "react";
import {initializeApp} from "@firebase/app";
import firebaseConfig from "@/config/firebaseConfig";
import {DataSnapshot, getDatabase, onValue, ref} from "@firebase/database";

// Creating and exporting useDb custom hook as default
export default function useDb<Type>({path = '/'}:useDbPropType):useDbType<Type| undefined> {
    // Defining states of component
    const [data, setData] = useState<Type>();
    const [loading, setLoading] = useState<boolean>(true);

    // Using useEffect to ...
    useEffect(() => {
        // Initializing the app
        const app = initializeApp(firebaseConfig);

        // Getting database
        const db = getDatabase();
        const dbRef = ref(db, path);

        // Setting data state when value of refrence changes
        onValue(dbRef, (snapshot:DataSnapshot) => {
            setData(snapshot.val());
            setLoading(false);
        })
    }, []);

    // Returning part
    return {
        isLoading: loading,
        data: data
    };
}
