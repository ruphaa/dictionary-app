import React from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Select from "react-select";

export const Header = () => {
    const [ font, setFont ] = React.useState<string | undefined>("monospace");
    const [ theme, setTheme ] = React.useState(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
    const fontOptions = [
        { value: "serif", label: "Serif" },
        { value: "sans-serif", label: "San serif" },
        { value: "monospace", label: "Monospace" },
    ];

    const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    React.useEffect(() => {
        document.documentElement.style.setProperty('--font-family', font ?? null);
    }, [font]);
    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <FontAwesomeIcon icon={faBook}/>
            </div>
            <div className={styles.fontToggle}>
                <Select 
                    options={fontOptions}
                    value={fontOptions.filter(({value}) => value === font)}
                    getOptionLabel={({label}) => label}
                    getOptionValue={({value}) => value}
                    onChange={(value) => setFont(value?.value)}
                />
            </div>
            <div className="theme-toggle">
                <input 
                    type="checkbox" 
                    className={styles.toggle} 
                    role="switch" 
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                />
            </div>
        </div>
    );
}
