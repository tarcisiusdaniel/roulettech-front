import Dropdown from "./utilities/Dropdown";

export default function Home() {
    return (
        <div className = "flex flex-col items-center">
            <h1 className = "text-7xl"><b>Welcome, Dog Lovers!</b></h1>
            <p>Feel free to get as many dog pictures as possible!</p>
            <div className = "flex flex-row justify-between w-96">
                <button>Random</button>
                <Dropdown />
            </div>
            
        </div>
    );
}