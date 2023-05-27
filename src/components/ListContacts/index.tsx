import { CardContact } from "../CardContact";
import { SListContacts } from "./styled";

export const ListContacts = () => {
    return (
        <SListContacts>
            <CardContact
                nome="Dionisio Benevides dos santos"
                email="tes@mail.com"
                tel="12212121121"
            />
            <CardContact
                nome="Dionisio Benevides dos santos"
                email="tes@mail.com"
                tel="12212121121"
            />
            <CardContact
                nome="Dionisio Benevides dos santos"
                email="tes@mail.com"
                tel="12212121121"
            />
            <CardContact
                nome="Dionisio Benevides dos santos"
                email="tes@mail.com"
                tel="12212121121"
            />
        </SListContacts>
    );
};
