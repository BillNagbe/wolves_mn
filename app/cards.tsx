import Image from "next/image"



export default function Cards({props}: any) {
        return (
            <figure className="w-[250px] h-[500px] border rounded-xl shadow-md shadow-black grid grid-cols-4 grid-rows-4">
                <Image
                src={props.src}
                alt={props.alt}
                height={props.height}
                width={props.width}
                className="row-start-1 row-end-4 col-start-1 col-end-4"
                />
                <div className="col-start-3 col-end-5">
                    <ul className="list-none p-1.5 flex flex-col justify-center items-center">
                        <li>PPG: {props.ppg}</li>
                        <li>RPG: {props.rpg}</li>
                        <li>AST: {props.ast}</li>
                    </ul>
                </div>
                <figcaption className="row-start-3">
                    `${props.firstName} ${props.lastName}, `
                </figcaption>
            </figure>
        )
} 