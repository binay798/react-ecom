import React from 'react'
import classes from './Specification.module.scss';

function Specification() {
    return (
        <div className={classes.specification}>
            <ul>
                <li><span>Brand</span> : Samsung</li>
                <li><span>Model</span> : Galaxy A21s</li>
                <li><span>Dimensions</span> : 75.3 x 163.7 x 8.9 mm</li>
                <li><span>Weight</span> : 192g</li>
                <li><span>Processor</span> : Octa-Core Exynos 850 processor (Quad 2.0GHz + Quad 2.0GHz)</li>
                <li><span>Ram</span> : 4GB</li>
                <li><span>Storage</span> : 64GB, expandable via micro SD card</li>
                <li><span>OS</span> : Android 10 with Samsung One UI</li>
                <li><span>Others</span> :  3.5mm audio jack, fingerprint sensor, micro-USB, Samsung Knox</li>
                

            </ul>
        </div>
    )
}

export default Specification
