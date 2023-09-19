import React from 'react';
import Post from './Post';
import Header from './Header';

const category = 'Products';

function App() {
    return (
        <>
            <Header 
                title="My Header"
                
            >
                Uma string na aula de prop children
            </Header>

            <Post 
                title="First post"
                description="Description fo the first post"
                category={category}
            />
        </>


        // <React.Fragment>
        // Nesse jeito podemos passar atributos no fragment
        // </React.Frag>

        
    );
}

export default App;