import React, { ReactNode } from "react";

export default function SobreLayout(
    {children}: Readonly<{children: React.ReactNode}>
){
    return(
        <>
            <p>Esse é o arquivo de layout do sobre</p>
            {children}
        </>
    )
}