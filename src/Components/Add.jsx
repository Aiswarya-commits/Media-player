import React, { useState } from 'react';
import { Form,Button, Modal } from 'react-bootstrap';

import {addVideoAPI} from '../services/allAPI'


function Add({setUploadVideoResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);
  // setUploadVideo({
  //   id:"",caption:"",url:"",link:""
  // })
}
  const handleShow = () => setShow(true);

  const[uploadVideo,setUploadVideo]=useState({
    id:"",caption:"",url:"",link:""
  })
  

  const getYoutubeLink=(e)=>{
    const {value}=e.target

    if(value.includes("v=")){
      let VID = value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${VID}`);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }

  const handleAdd = async()=>{
    const{id,caption,url,link}=uploadVideo

    if(!id || !caption || !url || !link){
      alert("please fill the missing fields")
    }else{
      // api call-upload video to json server
      const result = await addVideoAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<300){
        alert("video uploaded")
        handleClose()
        setUploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }
  }

  console.log(uploadVideo);
  
  return (
    <>
    <div>
      <h2>Upload Videos</h2>
      <button onClick={handleShow} className='btn'><i class="fa-solid fa-arrow-up-from-bracket fa-beat fs-3"></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Video ID</Form.Label>
        <Form.Control type="text" placeholder="Video ID" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Image Title</Form.Label>
        <Form.Control type="text" placeholder="Image Title" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Video URL</Form.Label>
        <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeLink} />
      </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="submit" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
    
  );
}

export default Add;
