import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';




function Category({dropVideoResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[categoryName,setCategoryName]=useState("")
  const [allCategories,setAllCategories]=useState([])

  const handleAdd=async()=>{
    if(categoryName){
      const result = await addCategoryAPI({categoryName,allVideos:[]})
      // console.log(result);
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")
        getCategories()
      }else{
        console.log(result.message);
      }
    }else{
      alert("please fill missing fields")
    }

  }
  const getCategories=async()=>{
    const {data}=await getCategoryAPI()
    setAllCategories(data)
  }

  const removeCategory=async(id)=>{
    await deleteCategoryAPI(id)
    getCategories()
  }
  const dragOver=(e)=>{
    console.log("video drag over the category");
    e.preventDefault()
  }
  // console.log(allCategories)
  const videoDrop=async(e,categoryId)=>{
    const videoId = e.dataTransfer.getData("videoId")
    console.log(videoId,"dropped into category id:",categoryId);
    const {data}=await getAVideoAPI(videoId)
    console.log(data);
    const selectedCategory=allCategories.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategoryAPI(categoryId,selectedCategory)
    // getCategories()

  }
  useEffect(()=>{
    getCategories()
  },[dropVideoResponse])

  const videoDragStarted=(e,videoId,categoryId)=>{
    let dataShare= {videoId,categoryId}
    e.dataTransfer.setData("Data",JSON.stringify(dataShare))
  }

  return (
    <>
     <div className='d-grid'>
      <Button onClick={handleShow} className='btn btn-primary'>Add Category</Button>
     </div>
     <Modal
       show={show}
       onHide={handleClose}
       backdrop="static"
       keyboard={false}
       centered
     >
      <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Category Name</Form.Label>
        <Form.Control type="text" placeholder="Category Name" onChange={e=>setCategoryName(e.target.value)} />
      </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
     </Modal>
     {
      allCategories?.length>0?allCategories.map(category=>(
        <div className='border border-3 m-3 p-3' droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category?.id)}>
          <div className='d-flex justify-content-between align-items-center'>
            <h3>{category?.categoryName}</h3>
            <button className='text-danger btn' onClick={()=>removeCategory(category?.id)}><i class="fa-solid fa-trash"></i></button>
          </div>
          <Row>
            {
              category?.allVideos.length>0?category?.allVideos.map(card=>(
                <Col sm={12} className='mb-3 mt-2 p-2' draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                  <VideoCard video={card} insideCategory={true}/>
                </Col>
              )):null
            }
          </Row>
        </div>
      )):<p className='text-danger fw-bolder mt-3'>No Ctegories Created</p>
     }
    </>
  );
}

export default Category;
