import * as firebase from "firebase";

import { FirebaseConfig } from "./keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
export const grupo17Ref = databaseRef.child("grupo17");
export const msgsRef = databaseRef.child("mensajes");
