import React from 'react';
import styled from "styled-components";

function About() {
    return (

        <Wrapper>

            <h2>About Foodie App</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto commodi enim iure laudantium
                minus non perspiciatis repellendus. Ab doloribus ducimus et fugiat inventore ipsa libero magni natus
                placeat recusandae, repellat tempore ut voluptas. Ad dolorem minus nesciunt reiciendis. Consectetur
                cumque ea eaque, hic labore minus qui tenetur velit voluptatem?</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto commodi enim iure laudantium
                minus non perspiciatis repellendus. Ab doloribus ducimus et fugiat inventore ipsa libero magni natus
                placeat recusandae, repellat tempore ut voluptas. Ad dolorem minus nesciunt reiciendis. Consectetur
                cumque ea eaque, hic labore minus qui tenetur velit voluptatem?</p>
<br/>
<br/>
            <h4>Best, Dennis</h4>

        </Wrapper>
    );
}

export default About;

const Wrapper = styled.section`
  width: 100%;
  height: 645px;
  margin-top: 80px;
  
  h2 {
    margin-bottom: 16px;
    color: white;
  }
  
  h4 {
    font-family: 'Dancing Script', cursive;
    color: var(--main-style-element-color);
  }
  
  p {
    color: #5b5454;
  }

`;

