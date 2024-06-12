import React, { Component } from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import logo from "../../../assets/pizzaLogo.png";

export class Navbar extends Component {
    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        // @ts-ignore
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        // @ts-ignore
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        // @ts-ignore
        const currentScrollPos = window.pageYOffset;
        const isScrolled = currentScrollPos > 50; // Adjust this value based on your needs
        this.setState({
            isScrolled
        });
    }

    render() {
        // @ts-ignore
        const { isScrolled } = this.state;
        return (
            <div className="fixed w-full p-5 bg-black flex justify-evenly h-20 z-10">

                <div className="flex">
                    <img className="h-12 ml-1" src={logo}
                         alt=""/>
                    <h1 className="text-2xl text-red-500 ml-2">
                        VITO</h1>

                </div>


                <div className={"flex"}>
                    <ul className="list-none mt-2 flex">
                        <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-red-500 font-bold">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-red-500 font-bold">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-red-500 font-bold">
                            <Link to="/item">Items</Link>
                        </li>
                        <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-red-600 font-bold">
                            <Link to="/shopping-cart">My-Cart</Link>
                        </li>
                        <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-red-500 font-bold">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col md:flex-row space-y-2.5 md:space-y-0 md:space-x-2.5">
                    {/*<button className="text-[20px] text-[#e6f0e6] bg-green-400 pl-3 pr-3 hover:text-gray-600 rounded-2xl"><Link to="/login">Log In</Link></button>*/}
                    <button
                        className="text-[20px] text-[#e6f0e6] bg-green-400 pl-3 pr-3 mr-5 hover:text-gray-600 rounded-2xl">
                        <Link to="/signin">Sign In</Link></button>
                </div>
            </div>
        );
    }
}
