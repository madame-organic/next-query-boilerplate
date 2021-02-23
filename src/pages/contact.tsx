import React from "react";
import Layout from "../components/Layout";

interface IContactProps {}

const Contact: React.FC<IContactProps> = () => {
    return (
        <Layout pageTitle="Madame Organic - Contact">
            <h1>Contact us</h1>
            <address>
                Visit us at: <br />
                madameorganic.co.th<br />
                Box 564, Disneyland<br />
                USA
            </address>
        </Layout>
    );
}

export default Contact;
