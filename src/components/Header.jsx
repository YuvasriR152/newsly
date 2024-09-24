export default function Header(){
    return(
        <>
        <header className="flex flex-row gap-2 justify-between bg-black text-white hover:bg-orange-500 p-4">
            <a href="#" className="text-3xl font-extrabold ">Newsly!!</a>
            <nav className="hidden md:block">
            <ul className="flex flex-row gap-2 ">
                <li><a href="#">Home</a></li>
                <li>< a href="#">Weather</a></li>
                <li><a href="#">Stock</a></li>
            </ul>
            </nav>
           
        </header>
        </>
    );
};