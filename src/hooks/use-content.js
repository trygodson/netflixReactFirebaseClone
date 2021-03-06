import {useState, useContext, useEffect} from 'react';
import {FirebaseContext} from '../context/firebase'

export default function UseContent(target){
  const [content, setContent] = useState([])
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    firebase.firestore().collection(target).get().then((snapshot)=>{
      const allContent = snapshot.docs.map((snapshotItem)=>({
        ...snapshotItem.data(),
        docId: snapshotItem.id
      }))
      setContent(allContent)
    }).catch((err)=>{
      console.log(err.message)
    })
  }, [])

  return{[target]: content}
}