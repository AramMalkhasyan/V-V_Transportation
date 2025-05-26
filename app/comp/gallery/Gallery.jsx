'use client'

import { useCallback, useState, useEffect } from 'react'
import styles from './gallery.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
export default function Gallery() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 3000})]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const photos = [
        {
            src: '/images/photo1.jpg',
            id: 10111
        },
        {
            src: '/images/photo2.jpg',
            id: 10112
        },
        {
            src: '/images/photo3.jpg',
            id: 10113
        },
        {
            src: '/images/photo4.jpg',
            id: 10114
        },
        {
            src: '/images/photo5.jpg',
            id: 10115
        },
        {
            src: '/images/photo6.jpg',
            id: 10116
        },
        {
            src: '/images/photo7.jpg',
            id: 10117
        },
        {
            src: '/images/photo8.jpg',
            id: 10118
        },
        {
            src: '/images/photo9.jpg',
            id: 10119
        },
    ];

    useEffect(() => {
        if(!emblaApi) return
        const updateCurrentSlide = () => {
            const inView = emblaApi.slidesInView();
            if (inView[1] === photos.length - 2 && 
                inView[2] === photos.length - 1 &&
                inView[0] === 0
            ) {
                setCurrentSlide(inView[2])
            } else if (inView[1] === 1 && 
                       inView[2] === photos.length - 1 &&
                       inView[0] === 0) {
                setCurrentSlide(inView[0])
            } else {
                setCurrentSlide(inView[1]);
            }
            
        }
        emblaApi.on('select', updateCurrentSlide);
        emblaApi.on('scroll', updateCurrentSlide);
        updateCurrentSlide()
    }, [emblaApi])
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi])
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi])
    return (
        <>
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.embla_container}>
                    {photos.map((img, i) => {
                        return (
                            <div className={styles.embla_slide} key={img.id}>
                                <Image 
                                    src={img.src}
                                    alt=""
                                    fill
                                    className={currentSlide === i ? styles.image : styles.image_blur}
                                />
                                <div className={styles.test}>
                                    <div className={styles.controll_buttons}>
                                        <button className="embla__prev" onClick={scrollPrev}>
                                            {"<"}
                                        </button>
                                        <div>
                                            {`${i+1}/${photos.length}`}
                                        </div>
                                        <button className="embla__next" onClick={scrollNext}>
                                            {">"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}