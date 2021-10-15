import React, { useRef } from 'react';
import "./styles.css"
import video from "../../assets/video.mp4"

function Video() {
    return (
        <section>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                    <video className="video" loop autoPlay muted>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    )
};

export default Video;