import scrollToTop from "../../lib/ScrollToTop";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import React, { useEffect, useState } from "react";

function ScrollToTopButton() {
    const [showButton, setShowButton] = useState(false)
    const requiredScrollAmount = 1000;

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return function cleanup () {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    const onScroll = () => {
        setShowButton(document.body.scrollTop > requiredScrollAmount || document.documentElement.scrollTop > requiredScrollAmount)
    }

    return (
        <button className={`button inverted ${showButton ? '' : 'hidden'} fixed top-16 right-4 z-10`} aria-label="Back to the top" onClick={scrollToTop}>
            <ArrowUpwardIcon/>
        </button>
    )
}

export default ScrollToTopButton;
