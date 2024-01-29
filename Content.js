import React from 'react';
import myImage from './Assets/image1.jpg';
import Counter from './counter';
import { useState } from 'react';
import Article from './Article'; 

const Content = () => {
    //State for the Content component
const [contentState, setContentState] = useState('This is some sample content.');
// Props for the Counter component
const counterProps = {
initialCount: 0,
step: 1,
};
// Function to update the content state
const handleContentUpdate = () => {
setContentState('Content has been updated!');
};
const articles = [
    {
      title: "Article 1",
      description: "Description of Article 1",
      content: "Full content of Article 1"
    },
    {
      title: "Article 2",
      description: "Description of Article 2",
      content: "Full content of Article 2"
    }
    // Add more articles as needed
  ];

return (
<section>
<p>Welcome to my website! This is some sample content.</p>

{/* Adding an image */}
<img src={myImage} alt="My_Image" />
 {/* Adding a list */}
 <ul>
 <li>Item 1</li>
 <li>Item 2</li>
 <li>Item 3</li>
 </ul>
 {/* Adding a header */}
 <h2>This is a subheading</h2>
 {/* Adding another paragraph */}
 <p>More content goes here...</p>
 {/* Adding a link */}
 <a href="https://www.example.com">Visit Example Website</a>
{/* Using the Counter component with props and state */}
<Counter {...counterProps} />
{/* Button to update content state */}
<button onClick={handleContentUpdate}>Update Content</button>

<h2>Lates Articles </h2>
<h4> Introduction to React </h4>
<p> A  brief overview of React for beginners.</p>
<button> Read More </button>
<h5> State and Props in React </h5>
<p> Understanding the concepts of state and props in React.</p>
<button> Read More </button>

</section>

);
};
export default Content;