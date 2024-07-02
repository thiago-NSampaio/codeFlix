import React from 'react';
import Image from "next/image";

export const Logo = () => {
    return (
        <Image src='./logo.svg' alt='Logo' width={90} height={90} />
    );
};
