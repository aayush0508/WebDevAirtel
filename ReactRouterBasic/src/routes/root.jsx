import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <nav>
                    <ul>
                        <li>
                            <a href={`/link1`}>Link 1</a>
                        </li>
                        <li>
                            <a href={`/link2`}>Link 2</a>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>

        </>
    );
}