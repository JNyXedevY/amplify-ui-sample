'use client';
import '@aws-amplify/ui-react/styles.css';
import {Button, Icon} from "@aws-amplify/ui-react";
import {MdAdd} from "@react-icons/all-files/md/mdAdd";


export function IconButton() {
    return (
        <Button
            gap={`${theme.tokens.space.small}`}
            width="2rem"
            height="2rem"
            style={{ borderRadius: "20px" }}
            fontSize="2rem"
        >
            <Icon as={MdAdd} />
        </Button>
    )
}
