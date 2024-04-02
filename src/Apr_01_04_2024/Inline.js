import './ExternalStyling.css'

import styles from './Style.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';


const CustomText = ()=>{
    return(
        <>
            <h1
                style={{
                    color:"red",
                    backgroundColor:"black"
                }}>
                Hello Guys Welcome to React Stylings</h1>


            <h2 className="external">Hello Guys this is External styling</h2>
            <h2 className="external">Hello Guys this is External styling</h2>
            <h2 className="external">Hello Guys this is External styling</h2>
            <h2 className="external2">Hello Guys this is External styling</h2>
            <h4 className={styles.h4Text}>hey this is MODULE STYLING</h4>
        </>
    )
}

export default CustomText;