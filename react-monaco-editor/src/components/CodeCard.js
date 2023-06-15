import React from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBContainer
} from 'mdb-react-ui-kit';

export default function CodeCard() {
    return (
        <>
            <div className='p-5 text-center bg-light'>

            <h4 className='mb-2'>Available Codes to Live Edit</h4>
            <br /><br />
            </div>
            <MDBContainer breakpoint='md'>
                <MDBCard className='bg-light'>

            <MDBCardHeader>Featured</MDBCardHeader>
            <MDBCardBody>
                <MDBCardTitle>Special title treatment</MDBCardTitle>
                <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                <MDBBtn href='#'>Go somewhere</MDBBtn>
            </MDBCardBody>
        </MDBCard>
        <br />
        <MDBCard>
            <MDBCardHeader>Featured</MDBCardHeader>
            <MDBCardBody>
                <MDBCardTitle>Special title treatment</MDBCardTitle>
                <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                        <MDBBtn href='http://localhost:3000/code-editor/#-NXvDDK3Syb9AA06sDfH'>Go somewhere</MDBBtn>
            </MDBCardBody>
        </MDBCard>
        <br />
        <MDBCard>
            <MDBCardHeader>Featured</MDBCardHeader>
            <MDBCardBody>
                <MDBCardTitle>Special title treatment</MDBCardTitle>
                <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                <MDBBtn href='#'>Go somewhere</MDBBtn>
            </MDBCardBody>
        </MDBCard>
            </MDBContainer>
        </>

    );
}
