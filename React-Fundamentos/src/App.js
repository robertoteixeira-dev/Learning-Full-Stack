import React from 'react';
import Post from './Post';

const category = 'Products';

function App() {
    return (
        <>
            <h1>Component</h1>;
            <p>{ category }</p>

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