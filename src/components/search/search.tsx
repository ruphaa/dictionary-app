import React, { useState } from "react";
import { Input } from "../input/input";
import { useDictionaryContext } from "../../context/dictionaryContext";
import { getWordDefinition } from "../../services/service";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Search = () => {
    const [ searchTerm, setSearchTerm ] = useState("dictionary");
    const [ error, setError ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState("");
    const { setWordDefinition } = useDictionaryContext();

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // Do form validation
        if(event.key === "Enter") {
            if(searchTerm && searchTerm.length) {
                // Make an API call
                getWordDefinition(searchTerm)
                    .then(def => {
                        if(Array.isArray(def) && def.length > 0) {
                            setWordDefinition(def[0])
                        } else {
                            console.log("error");
                        }
                    });
            } else {
                setError(true);
                setErrorMessage("Search term cannot be empty");
            }
        }
    }

    const handleChange = (value: string) => {
        setSearchTerm(value);
        setError(false);
        setErrorMessage("");
    }

    return (
        <Input 
            value={searchTerm} 
            error={error}
            errorMessage={errorMessage}
            onChange={handleChange} 
            onKeyDown={handleSubmit}
            decorator={<FontAwesomeIcon icon={faMagnifyingGlass}/>}
        />
    ) 
}
