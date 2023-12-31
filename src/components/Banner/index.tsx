"use client"
import Carousel from 'react-material-ui-carousel'
import styles from './Banner.module.css';
import React from 'react';
import { Paper, Container } from '@mui/material';
import { LoadingButton } from "@mui/lab";
import Link from 'next/link';

// Define the prop types for the Item component
interface ItemProps {
    item: {
        heading1: string;
        heading2: string;
        image: string;
    };
}

// Define the Item component with TypeScript
function Item(props: ItemProps) {
    return (
        <Paper className={`${styles.carouselItem}`}>
            <div className={styles.imageContainer}>
                <img src={props.item.image} alt="Recode7" className={styles.image} />

                <div className={`${styles.textContainer} px-5`}>
                    <h1 className={`${styles.title} text-dark`} >{props.item.heading1}</h1>
                    <h1 className={`${styles.title} mb-4 color-primary`}>{props.item.heading2}</h1>

                    <Link href="/about">
                        <LoadingButton
                            color="primary"
                            size='large'
                            type="submit"
                            variant="contained"
                            loading={false}
                            className="loading-button"
                        >
                            LEARN MORE
                        </LoadingButton>
                    </Link>
                </div>
            </div>
        </Paper>
    )
}

// Define the prop types for the Banner component
interface BannerProps {}

// Define the Banner component with TypeScript
const Banner: React.FC<BannerProps> = () => {
    var items: ItemProps['item'][] = [
        {
            heading1: "Discovering Hope in",
            heading2: "Every Dose",
            image: "/images/banner3.jpg"
        },
        {
            heading1: "Your Health is always",
            heading2: "Our Priority",
            image: "/images/banner2.jpg"
        },
        {
            heading1: "From Research",
            heading2: "to Recovery",
            image: "/images/banner1.jpg"
        }
    ];

    return (
        <Carousel height={'60vh'} animation='fade' duration={1000} interval={5000} indicators={false}>
            {items.map((item, i) => <Item key={i} item={item} />)}
        </Carousel>
    )
}

export default Banner;