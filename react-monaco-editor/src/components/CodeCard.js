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

            <MDBCardHeader>Language: JS</MDBCardHeader>
            <MDBCardBody>
                <MDBCardTitle>A Code Sample</MDBCardTitle>
                <MDBCardText>Open to see</MDBCardText>
                        <MDBBtn href='http://localhost:3000/code-editor/#-NXvDDK3Syb9AA06sDfH'>Edit This</MDBBtn>
            </MDBCardBody>
        </MDBCard>
        <br />
        <MDBCard>
            <MDBCardHeader>Featured</MDBCardHeader>
            <MDBCardBody>
                <MDBCardTitle>Sample Code</MDBCardTitle>
                <MDBCardText>Edit with Editor</MDBCardText>
                        <MDBBtn href='http://localhost:3000/code-editor/#-NXvDDK3Syb9AA06sDfH'>Edit This</MDBBtn>
            </MDBCardBody>
        </MDBCard>
        <br />
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Create new Colab Pad</MDBCardTitle>
                        <MDBBtn href='http://localhost:3000/code-editor'>Create</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
            <br /><br />
            <div className='text-center'>Made with ♥️ by Anmol</div>
        </>

    );
}
