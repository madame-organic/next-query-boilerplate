import React from "react";
import Layout from "../components/Layout";

interface IAboutProps {}

const About: React.FC<IAboutProps> = () => {
    return (
        <Layout pageTitle="Madame Organic - About">
            <h1>About us</h1>
            <p>
                Madame Organic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque debitis delectus
                deserunt dolor doloribus ducimus impedit in incidunt magni maiores minus numquam quas qui sint sit,
                sunt unde veritatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda
                consequatur delectus dignissimos, ducimus eligendi error illum incidunt necessitatibus pariatur
                praesentium quaerat quidem quos ratione rem rerum soluta velit voluptatem
            </p>
        </Layout>
    );
}

export default About;
