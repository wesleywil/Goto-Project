import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAc-KulkKGYwy9BxPJn1r2d62zyQOsiYQQ",
    authDomain: "project-goto-animes.firebaseapp.com",
    projectId: "project-goto-animes",
    storageBucket: "project-goto-animes.appspot.com",
    messagingSenderId: "946699436495",
    appId: "1:946699436495:web:9ceff03a33032e782a92ba",
    measurementId: "G-MC7GEQSG6M"
}

export const createAnimeDocumentAutoGeneratedId = async(data)=>{
    const res = await firestore.collection('animes').add({
        anime_id:data.anime.mal_id,
        title:data.anime.title,
        image_url: data.anime.images.webp.image_url,
        synopsis:data.anime.synopsis,
        year:data.anime.aired.prop.from.year,
        review:'',
        priority:false,
        chapter:'',
        status:0,
        rate:0,
    });
    console.log('Added new Anime Document with ID ', res.id);
};

export const snapshotToArray = (snapshot)=>{
    var returnArray = [];

    snapshot.forEach(function(childSnapshot){
        var item = childSnapshot.data();
        //item.key = childSnapshot.id;

        returnArray.push(item);
    });
    
    return returnArray;
}

export const listAnimes = async()=>{
    const animesRef = firestore.collection('animes');
    const snapshot = await animesRef.get()
    return snapshot;

};

export const selectAnimeById = async(id)=>{
    const animeRef = firestore.doc(`animes/${id}`)
    const snapshot = await animeRef.get()
    return snapshot;
}

export const updateAnimeById = async(id, data)=>{
    const animeRef = firestore.doc(`animes/${id}`)
    try{
        await animeRef.update({
            review:data.review,
            priority:data.priority,
            chapter:parseInt(data.chapter),
            status:parseInt(data.status),
            rate:parseInt(data.rate),
        })
        console.log('Updated was a success!')
    }catch(error){
        console.log('An Error Occurred ', error);
    }
}

export const createAnimeDocument = async(data) =>{
    const animeRef = firestore.doc(`animes/${data.anime.mal_id}`)

    // const snapShot = await animeRef.get()

    try{
        await animeRef.set({
            anime_id:data.anime.mal_id,
            title:data.anime.title,
            image_url: data.anime.images.webp.image_url,
            synopsis:data.anime.synopsis,
            year:data.anime.aired.prop.from.year,
            review:'',
            priority:false,
            chapter:'',
            status:0,
            rate:0,

        })
        console.log('New Anime');
    }catch(error){
        console.log('error creating new anime registration ', error.message);
    }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;