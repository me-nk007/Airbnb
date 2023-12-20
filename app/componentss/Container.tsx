'use client';                     // Indicating this as a client component
// Passing props in Next.js
interface ContainerProps {
    children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({
    children
}) =>{
    return ( 
        <div
        className="
        max-w-[2520px]
        xl:px-2o
        md:px-10
        sm:px-2
        px-4"
        >{children}</div>
    );
}

export default Container