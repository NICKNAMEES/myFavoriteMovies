import React from 'react'

const Book = ({id,,handleCheckout}) => {
    function handleCheckout(id) {
        const payload = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id})
        }
        fetch("/checkout",payload)
            .then(res => res.json())
            .then(res => console.info(res))
    }