import React from 'react'
import classes from './AddProductToDb.module.scss';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from './../../components/UI/Modal/Modal'

const useStyles = makeStyles({
    root: {
      display: 'block',
      border: '1px solid lightgray',
      width: '90%',
      margin: '0 auto',

    
    },
    label: {
      textTransform: 'capitalize',
      fontSize: '20px',
      color: '#333'
    },
  });

function AddProductToDb() {
    const styles = useStyles()
    

    const [showModal,setShowModal] = React.useState(false)
    const [productInfo,setProductInfo] = React.useState({
        title: '',
        originalPrice: 0,
        discountPrice: 0,
        summary: '',
        img: '',
    })
    const [basicInfo,setBasicInfo] = React.useState({
        name: '',
        content: '',
    })

    const showModalHandler = () => {
        setShowModal(true)
    }

    const hideModalHandler = () => {
        setShowModal(false)
    }

    const inputChangeHandler = (e) => {
        
        if(e.target.name === 'name' || e.target.name === 'content') {
            setBasicInfo({...basicInfo,[e.target.name]: e.target.value})

        } else if(e.target.name === 'image') {
            let file = e.target.files[0];
            setProductInfo({...productInfo,img: file})
            
        }
        
        else {
            setProductInfo({...productInfo,[e.target.name]: e.target.value})
        }
    }

    const submitHandler = () => {
        setProductInfo({...productInfo,[basicInfo.name]: basicInfo.content})
        setBasicInfo({name: '',content: ''})
        setShowModal(false)
    }


    // Display list of product info
    let listOfProductInfo = Object.keys(productInfo);
    // console.clear()
    listOfProductInfo = listOfProductInfo.map((item,id) => {
        if(item !== 'img') {
            return (
                <li key={id}><strong>{item} : </strong>{productInfo[item]}</li>
            )
        } else if (item === 'img') {
            return (
                <li key={id}><strong>{item} : </strong>{productInfo[item].name}</li>
            )
        } 
        return null;


    })

    console.log(productInfo)
    
    return (
        <div className={classes.addProduct}>
            {/* Modal */}
            <Modal show={showModal} backgroundModal="white" hideModal={hideModalHandler} backgroundBackdrop="rgba(0,0,0,0.5)" >
                <div className={classes.btnContainer}>
                    <input type="text" value={basicInfo.name} onChange={inputChangeHandler} placeholder="Name" name="name" />
                    <textarea name="content" value={basicInfo.content} onChange={inputChangeHandler} id="" cols="30" rows="10" placeholder="write content,description..."></textarea>
                    <Button 
                        classes={{
                            root: styles.root,
                            label: styles.label
                          }}
                        onClick={submitHandler}

                        >Add</Button>
                </div>
            </Modal>


            <div className={classes.addSection}>
                <h2>Add Product</h2>

                <div className={classes.addSection__basic}>
                    <h3>Basic Info</h3>
                    <input type="text" value={productInfo.title} autoComplete='off' onChange={inputChangeHandler} placeholder="Title" name="title" />
                    <input type="number" value={productInfo.originalPrice} autoComplete='off' onChange={inputChangeHandler} placeholder="Original Price" name="originalPrice" />
                    <input type="number" value={productInfo.discountPrice} autoComplete='off' onChange={inputChangeHandler} placeholder="Discount Price" name="discountPrice" />
                    <input type="file" name="image" placeholder="img"  onChange={inputChangeHandler} />
                    <textarea name="summary" value={productInfo.summary} autoComplete='off' onChange={inputChangeHandler} placeholder="Summary"  cols="30" rows="10"></textarea>
                    
                    <Button 
                        classes={{
                            root: styles.root,
                            label: styles.label
                          }}
                        onClick={showModalHandler}

                        >Add Additional Info</Button>
                </div>
                          
                <div className={classes.addSection__spec}>
                    <h3>Specification</h3>
                </div>
            </div>
            <div className={classes.displaySection}>
                <h3>Display Section</h3>

                <ul>
                    {listOfProductInfo}
                </ul>
            </div>
        </div>
    )
}

export default AddProductToDb
