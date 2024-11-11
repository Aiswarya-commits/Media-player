import React from 'react';
import {  Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function LandingPage() {
  return (
    <>
    {/*head */}
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
        <h1 style={{color:"blueviolet",fontSize:"40px"}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ducimus ea aut, 
          aliquid ut dolore nam iste vero quis. Recusandae similique cupiditate sit quaerat et
           iste perspiciatis, assumenda animi perferendis!</p>
           <Link style={{textDecoration:"none"}} to={'/home'}>Get Started</Link>
        
        
        </Col>
        <Col lg={5}>
        <img src="https://i.gifer.com/origin/ce/ce9b1b80a59bc4090dcded493ccba5f3.gif" alt="" />
        </Col>
        <Col></Col>
      </Row>
      {/* card section */}

      <div className='container mt-3 mb-5 d-flex justify-content-center align-items-center flex-column w-100'>
        <h2 className='text-center text-warning'>Features</h2>
        <div className='Card mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
          <Card style={{width:"18rem"}} className='bg-info'>
            <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media.tenor.com/WOQ4NaiPiRwAAAAM/beats-art.gif"/>
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                some quick examples text to build on the card title and make up the 
                bulk of the card's content 
              </Card.Text>
            </Card.Body>

          </Card>
          <Card style={{width:"18rem"}} className='bg-info'>
            <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/e6/58/e8/e658e8998f13909eae69aa262214f667.gif"/>
            <Card.Body>
              <Card.Title>Categorized Videos</Card.Title>
              <Card.Text>
                some quick examples text to build on the card title and make up the 
                bulk of the card's content 
              </Card.Text>
            </Card.Body>

          </Card>
          <Card style={{width:"18rem"}} className='bg-info'>
            <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/6f/5f/f3/6f5ff36fd8ffefa40bf466df6c693ef1.gif"/>
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                some quick examples text to build on the card title and make up the 
                bulk of the card's content 
              </Card.Text>
            </Card.Body>

          </Card>
        </div>

      </div>
      {/* details section */}

      <div className="container border border-2 d-flex align-items-center justify-content-center mt-5 p-4">
        <div className='col-lg-5'>
          <h4 className='text-warning fw-bolder'>Simple,Powerful & Fast</h4>
          <h6 className='m-3'><span className='text-warning fw-bolder '>Play Everything </span>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. At minus cumque fugit architecto recusandae dolorem illum nihil tempore, numquam est 
            doloremque, sunt rerum obcaecati expedita ab nesciunt sequi suscipit? Sequi.</h6>
            <h6 className='m-3'><span className='text-warning fw-bolder '>Categorize Videos </span>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. At minus cumque fugit architecto recusandae dolorem illum nihil tempore, numquam est 
            doloremque, sunt rerum obcaecati expedita ab nesciunt sequi suscipit? Sequi.</h6>
            <h6 className='m-3'><span className='text-warning fw-bolder '>Managing Videos </span>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. At minus cumque fugit architecto recusandae dolorem illum nihil tempore, numquam est 
            doloremque, sunt rerum obcaecati expedita ab nesciunt sequi suscipit? Sequi.</h6>

        </div>
        <div className='col-lg-5 ms-2'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AiD6SOOBKZI?si=hP0KkwEqZnBTw2-V" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
          
        </div>
      </div>
    </>
  );
}

export default LandingPage;
