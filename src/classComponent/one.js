import getImageUrl from "./two"

function Avatar({person,size}){

    return(
        <img 
            className="avatar"
            src={getImageUrl(person)}
            width={size}
            height={size}
        ></img>
    )
}


export default function Profile(){

    return(
        <div>
            <Avatar 
            size={100}
            person={{
                name:"Katsuko Saruhashi",
                imageId:'YfeOqp2'
            }}
            ></Avatar>

            <Avatar
            size={200}
            person={{
                name:'Aklilu Lemma',
                imageId:'OKS67lh'
            }}
            ></Avatar>

            <Avatar 
            size={150}
            person={{
                name:'prashanth',
                imageId:'1bX5QH6'
            }}
            
            ></Avatar>
        </div>
    )
}