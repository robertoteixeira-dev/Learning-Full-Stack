import React from 'react';
import Post from './Post';
import Header from './Header';

const category = 'Products';
const posts = [
    {title: 'title 01'},
    {title: 'title 01'},
    {title: 'title 01'},
];

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
                likes={20}
            />

            {posts.map(post => (
                <Post
                    key={post.title} // Importante passar uma key e ela deve ser única
                    title={post.title}
                    post={{ 
                        title: post.title,
                    }}
                />
            ))}
        </>


        // <React.Fragment>
        // Nesse jeito podemos passar atributos no fragment
        // </React.Frag>

        
    );
}

export default App;