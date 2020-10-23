import React, { useEffect } from "react"
import services from "../constants/services"
import Layout from "../components/Layout"

const Contact = () => {
    useEffect(() => {
        document.title = "CONTACT";
    }, []);
    return (
        <Layout>
            <section className="contact-page">
                <article className="contact-form">
                    <h3>get in touch</h3>
                    <form action="https://formspree.io/f/mrgoqagy" method="POST">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="name" className="form-control" />
                            <input type="email" mame="email" placeholder="email" className="form-control" />
                            <textarea name="message" cols="10" rows="5" placeholder="message" className="form-control"></textarea>
                        </div>
                        <button type="submit" className="submit-btn btn">SUBMIT HERE</button>

                    </form>
                </article>
            </section>
        </Layout>
    )
}

export default Contact