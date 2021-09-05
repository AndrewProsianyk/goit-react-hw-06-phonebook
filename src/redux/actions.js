import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit"

export const addContact = createAction('contact/add', (name, number) => ({
    payload: {
        id: shortid.generate(),
        name,
        number
    },
}));

export const deleteContact = createAction('contact/delete')

export const changeFilter = createAction('contact/filter');

