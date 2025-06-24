export default function RegButton(height, width, text, bgcol, textcol){  
    return( 
        <button 
            className={`w-[${width}px] h-[${height}px] hover:w-[${width-2}px] hover:h-[${height-2}px]  hover:m-[2] rounded-lg p-2 bg-${bgcol} font-body text-${textcol} text-sm font-semibold`}
        > 
            {text}
        </button>
    )

}