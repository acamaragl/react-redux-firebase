import { todosRef, grupo17Ref, msgsRef } from "../config/firebase";
import { FETCH_TODOS, FETCH_GRUPO17, FETCH_MAP ,FETCH_MSGS } from "./types";

export const addToDo = (newToDo) => async dispatch => {
  todosRef.push().set(newToDo);
};

export const addMsg = (msg, id) => async dispatch => {
  msgsRef.push().set({
    "owner": id || '-',
    "date": new Date().getTime(),
    "message": msg
  });
};

export const completeToDo = (completeToDoId) => async dispatch => {
  todosRef.child(completeToDoId).remove();
};
export const blockBuilding = (id, key) => async dispatch => {
  let self = {id,key}
  grupo17Ref.child('maps').child(id).child(key).update({"blocked":true}).then(() => {
    dispatch(addMsg("Bloqueado edificio de "+self.id, self.id))
  }).catch(function(error) {
    alert("Data could not be saved." + error);
  });
};
export const createRandomBuilding = (id) => async dispatch => {
  let self = {id}
  let tipo = ['agua', 'oxigeno', 'energía', 'alimento', 'vivienda'];
  let name = 'edi'+(Math.floor(Math.random() * (999999-1000))+1000)
  grupo17Ref.child('maps').child(id).push().set({
    "name": name,
    "level":1,
    "tipo": tipo[Math.floor(Math.random() * tipo.length)]
  }).then(() => {
    dispatch(addMsg("Creado edificio "+name + " de "+self.id, self.id))
  }).catch(function(error) {
    alert("Data could not be saved." + error);
  });
};

export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};
export const fetchgrupo17Ref = () => async dispatch => {
  grupo17Ref.child('memberList').on("value", snapshot => {
    dispatch({
      type: FETCH_GRUPO17,
      payload: snapshot.val()
    });
  });
};

export const fetchmap = (id) => async dispatch => {
  grupo17Ref.child('maps').child(id).on("value", snapshot => {
    dispatch({
      type: FETCH_MAP,
      payload: snapshot.val(),
      selectedId: snapshot.key,
    });
  });
};

export const fetchMsgs = () => async dispatch => {
  msgsRef.limitToLast(5).on("value", snapshot => {
    dispatch({
      type: FETCH_MSGS,
      payload: snapshot.val()
    });
  });
};
