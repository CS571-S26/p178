import React, { memo } from "react"
import { Container } from "react-bootstrap";

function home () {
    return <Container className="container text-center">
        <h1>Welcome to the Cult of George Carlin!</h1>
        <p className="text-start">      We are a group of people who worship the great comedian George Carlin. We believe that he was a genius and that his comedy was a form of art. We also believe that he was a prophet who spoke the truth about the world and the human condition.</p>
        <br />
        <p className="text-start"> George Carlin began his career in the late 1950s as a clean-cut, mainstream stand-up comedian, known for clever but safe wordplay that fit radio and television audiences. While this brought him early success, it didn’t reflect his evolving perspective, and by the late 1960s he reinvented himself, adopting a more countercultural style that challenged authority and social norms.</p>
        <img src="https://aaps.space/kundli/george-carlin/george-carlin.jpg" alt="George Carlin Portrait shot from Amazon" style={{ maxWidth: "500px", borderRadius: "16px", boxShadow: "0 8px 25px rgba(0,0,0,0.2)", margin: "40px 0" }} />

        <p className="text-start"> His breakthrough came in the 1970s with bold routines like “Seven Words You Can Never Say on Television,” which sparked the landmark FCC v. Pacifica Foundation case on free speech and censorship. From there, Carlin became known for fearless, thought-provoking comedy, frequently appearing in specials on HBO where he dissected politics, religion, language, and American culture with sharp wit and precision.</p>
        <img src="https://www.rollingstone.com/wp-content/uploads/2024/04/GettyImages-81675273.jpeg?w=1581&h=1054&crop=1" alt="Funny George Carlin from fity.club" style={{ maxWidth: "500px", borderRadius: "16px", boxShadow: "0 8px 25px rgba(0,0,0,0.2)", margin: "40px 0" }} />
        <p className="text-start">Over the following decades, Carlin’s work grew more philosophical and critical, often reflecting a darker view of society and human behavior. He continued performing and releasing acclaimed specials well into his later years, cementing his legacy as one of the most influential stand-up comedians ever—someone who transformed comedy into a powerful form of social commentary.</p>

    </Container>
}

export default memo(home);
