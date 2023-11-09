import React from "react";

const Book = ({imageScr, title, author, number}) => {
    return (
        <article className="bg-[#fff] p-3 text- rounded-lg text-center shadow shadow-md relative">
            <img className="py-3 w-40 h-100 mx-auto" src={imageScr} alt={ title } />
            <h4 className="text-md text-[#617d98] tracking-wide">{ title }</h4>
            <p className="text-md">by { author }</p>
            <span className="absolute top-0 left-0 p-1 text-xl rounded-tl-lg rounded-br-lg text-[#fff] bg-[#c35600]">{`# ${number + 1 }`}</span>
        </article>
    );
}
 
export default Book;
