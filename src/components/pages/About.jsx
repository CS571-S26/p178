import React, { memo } from "react"
import { Container } from "react-bootstrap";

function About () {
    return <Container className="container text-center">
        <h1 className="text-center">WE LOVE GEORGE CARLIN!</h1>
        <p className="text-start">This Cult is dedicated to celebrating the life, work, and enduring impact of George Carlin—one of the most fearless and thought-provoking comedians of all time. From his early days in clean-cut stand-up to his later years as a sharp-tongued social critic, Carlin challenged audiences to question authority, language, and the systems shaping everyday life. His comedy wasn’t just about laughs—it was about insight, honesty, and pushing boundaries.</p>
        <img src="https://americasfuture.org/wp-content/uploads/2022/07/george-carlins-american-dreams-honors-legendary-comedian.jpg" alt="George Carlin from americasfuture.org" style={{ maxWidth: "500px", borderRadius: "16px", boxShadow: "0 8px 25px rgba(0,0,0,0.2)", margin: "40px 0" }} />
        <p className="text-start">Here, fans come together to share favorite routines, discuss his most powerful ideas, and explore how his work remains relevant today. Whether you admire his linguistic genius, his bold critiques of culture and politics, or simply his unmistakable voice, this community exists to keep his spirit alive and evolving.</p>
        <img src="https://cst.brightspotcdn.com/dims4/default/d3e4940/2147483647/strip/true/crop/833x476+0+94/resize/1461x834!/quality/90/?url=https:%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FONLRtdy-IdbFlLGxK6cPfyfytgg%3D%2F419x0:1252x1920%2F833x1920%2Ffilters:focal(838x332:839x333)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F23545905%2Fgeorge_carlin_1.jpg" alt="George Carlin from chicago.suntimes.com" style={{ maxWidth: "500px", borderRadius: "16px", boxShadow: "0 8px 25px rgba(0,0,0,0.2)", margin: "40px 0" }} />
        <p className="text-start">We believe Carlin’s legacy goes beyond entertainment. He inspired generations to think more critically and speak more freely. This space is for anyone who appreciates that legacy—whether you’re discovering his work for the first time or have been quoting his routines for years.</p>
    </Container>
}

export default memo(About);
