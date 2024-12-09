import React from "react";

export type TodolistHeaderProps = {
    title: string
}
export const TodolistHeader = ({title}: TodolistHeaderProps) => {
    return (
        <h3 className={'header'}>{title}</h3>
    )
}