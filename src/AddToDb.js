    import React from 'react'
    import './AddToDb.scss';
    import {db,storage,auth} from './firebase';
    import firebase from 'firebase';

    function AddToDb() {

        // State for deals
        const [deals,setDeals] = React.useState({
            title:null,
            discount: null,
            originalPrice: null,
            img: null
        })

        const dealChangeHandler = (e,type) => {
            if(type !== 'file') {
                setDeals({...deals,[type]:e.target.value})
            }else {
                setDeals({...deals,img:e.target.files[0]})
            }
        }

        const dealSubmitHandler = (e) => {
            e.preventDefault();
        
            if(deals.title !== null && deals.discount !== null && deals.originalPrice !== null && deals.img !== null) {
                
                // const uploadTask = storage.ref(`images/${deals.img.name}`).put(deals.img);

                // uploadTask.on(
                //     'state_changed',
                //     null,
                //     err => {
                //         console.log(err)
                //         setDeals({title:null,discount:null,originalPrice:null,img:null})
                //     },
                //     (success) => {
                //         storage.ref(`images`)
                //             .child(deals.img.name)
                //             .getDownloadURL()
                //             .then(url => {
                //                 db.collection('Deals').add({
                //                     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                //                     originalPrice: deals.originalPrice,
                //                     discount: deals.discount,
                //                     imgUrl: url,
                //                     title: deals.title
                //                 })
                //                 setDeals({title:null,discount:null,originalPrice:null,img:null})
                //             })
                //             .catch(err => {
                //                 console.log(err)
                //                 setDeals({title:null,discount:null,originalPrice:null,img:null})
                //             })
                //     })

                db.collection('Deals').add({
                                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                        originalPrice: deals.originalPrice,
                                        discount: deals.discount,
                                        
                                        title: deals.title
                                    })


            }
        }

        // state for categories
        const [categories,setCategories] = React.useState({
            title: '',
            discount: '',
            originalPrice: '',
            imgUrl:''
        })

        
        const [categorieId,setCategorieId] = React.useState({
           
            id: null
        })

        const [categorieList,setCategorieList] = React.useState(null);

        // Get categories from db
        React.useEffect(() => {
            db.collection('categories')
                .get()
                .then(doc => {
                    let data = doc.docs.map(item => {
                        return {...item.data(),id:item.id}
                    })
                    setCategorieList([...data])
                    setCategorieId({id: data[0].id})
                })
                .catch(err => console.log(err))
        },[])
        
        const categorieChangeHandler = (e,type) => {
            console.log(categories)
            if(type !== 'select') {
                
                setCategories({...categories,[type] : e.target.value})
            }else {
                setCategorieId({id: e.target.value})
            }
        }

        const categorieSubmitHandler = () => {
        
            if(categories.title !== '' && categories.imgUrl !== '' && categories.discount !== '' && categories.originalPrice !== '' && categorieId.id !== null) {
                console.log(categories,categorieId)
                db.collection('categories')
                    .doc(categorieId.id)
                    .collection('products')
                    .add({
                        title: categories.title,
                        originalPrice: categories.originalPrice,
                        discount: categories.discount,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        imgUrl: categories.imgUrl
                    })
                    .then(doc => {
                        console.log(doc)
                        setCategories({title: '',discount: '',originalPrice: '',imgUrl: ''})
                    })
                    .catch(err => console.log(err))
            }
        }

        
        return (
            <div className='addDb'>
                <div className="deals">
                    <h2>Deals</h2>
                    <form action="" >
                        <input type="text" onChange={(e) => dealChangeHandler(e,"title")} className="deals__title" placeholder="Title" />
                        <input type="number" onChange={(e) => dealChangeHandler(e,"discount")} className="deals__discount" placeholder="discount" />
                        <input type="number" onChange={(e) => dealChangeHandler(e,"originalPrice")} className="deals__price" placeholder="original" />
                        <input type="file" onChange={(e) => dealChangeHandler(e,"file")} className="deals__img" placeholder="img" />
                        <button type="submit" onClick={dealSubmitHandler}>Submit</button>
                    </form>
                </div>
                
                
                <div className="categories">
                    <h2>Categories</h2>


                    <select name=""  id="" onChange={(e) => categorieChangeHandler(e,'select')}>
                        {categorieList?.map(item => {
                            return (<option key={item.id} value={item.id}>{item.title}</option>)
                        })}

                    </select>

                    <input type="text" value={categories.title} onChange={(e) => categorieChangeHandler(e,'title')} placeholder="title"/>
                    <input type="number" value={categories.discount}  onChange={(e) => categorieChangeHandler(e,'discount')} placeholder="discount"/>
                    <input type="number" value={categories.originalPrice}  onChange={(e) => categorieChangeHandler(e,'originalPrice')} placeholder="original"/>
                    <input type="text" value={categories.imgUrl}  onChange={(e) => categorieChangeHandler(e,'imgUrl')} placeholder="Image url"/>

                    <button onClick={categorieSubmitHandler}>Submit</button>

                </div>
                
            </div>
        )
    }

    export default AddToDb
